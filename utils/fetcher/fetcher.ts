import { HTTP_STATUS_CODE } from '@/utils/httpStatusCode';

export type HttpResponse<T = unknown> = {
  status: number;
  data: T;
};

export class HttpError<T = unknown> extends Error {
  response: HttpResponse<T | null>;

  constructor(
    message: string,
    options: ErrorOptions & {
      response: HttpResponse<T | null>;
    },
  ) {
    super(message, options);

    this.name = 'HttpError';
    this.message = message;
    this.response = options.response;
  }

  toJson() {
    return {
      name: this.name,
      message: this.message,
      response: JSON.parse(JSON.stringify(this.response)),
    };
  }
}

type HumanizedHttpErrorProps<T> = {
  title: string;
  description?: string;
  httpError: HttpError<T>;
};

export class HumanizedHttpError<T = unknown> extends Error {
  title: string;
  description?: string;
  httpError: HttpError<T>;

  constructor(options: HumanizedHttpErrorProps<T>) {
    super(options.title);

    this.name = 'HumanizedHttpError';

    this.title = options.title;
    this.description = options.description;
    this.httpError = options.httpError;
  }

  get statusCode() {
    return this.httpError.response.status;
  }

  toJson() {
    return {
      name: this.name,
      message: this.title,
      title: this.title,
      description: this.description,
      statusCode: this.statusCode,
      httpError: this.httpError.toJson(),
    };
  }
}

export type Config = RequestInit & {
  responseAs?: 'json' | 'text';
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
};

export type Request = Omit<Config, 'body'> & {
  url: string;
  body?: unknown;
  timeout?: number;
};

export type GenericError = {
  response: HttpResponse<Error>;
} & Error;

const headers: HeadersInit = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

/**
 * a wrapper of the fetch api that makes its usage simpler to use by applying default configs
 *
 *  @params {object} usual config of the fetch API with the addition of the url and responseAs properties
 *  @returns {Promise} Promise that will return the response of the request
 *
 *  @example
 *  fetcher({
      url: 'https://www.boredapi.com/api/activity',
      method: 'GET',
    })
 */
export function fetcher<T = unknown>({
  url,
  body,
  timeout = 10000,
  ...customConfig
}: Request): Promise<HttpResponse<T>> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  const config: Config = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
    /**
     * Type Assertion is temporarily, the polyfill does not
     * add types to the properties that we do not use
     */
    signal: controller.signal as AbortSignal,
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  return fetch(url, config)
    .then((response) => {
      // if the algorithm can not parse the response to json or text, it will be undefined or null
      return Promise.all([
        response,
        response[config.responseAs ?? 'json']().catch(() => {
          return null;
        }),
      ]).then(([response, data]) => {
        if (response.ok) {
          return {
            status: response.status,
            data: data as T,
          };
        }

        throw new HttpError(
          `http: request to ${url} failed with status ${response.status}`,
          {
            response: {
              status: response.status,
              data: data as T | null,
            },
          },
        );
      });
    })
    .catch((error: HttpError<T> | Error) => {
      if (error instanceof HttpError) {
        throw error;
      }

      if (error.name === 'AbortError') {
        throw new HttpError('TimeoutError', {
          response: {
            status: HTTP_STATUS_CODE.UNKNOWN,
            data: null,
          },
        });
      }

      throw new HttpError(error.message, {
        response: {
          status: HTTP_STATUS_CODE.UNKNOWN,
          data: null,
        },
      });
    })
    .finally(() => {
      clearTimeout(timeoutId);
    });
}
