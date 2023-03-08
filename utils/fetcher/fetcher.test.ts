import { rest } from 'msw';
import { server } from '@/mocks/server';
import { getError } from '@/test/testUtils';
import { HTTP_STATUS_CODE } from '@/utils/httpStatusCode';
import { HttpError, HumanizedHttpError, fetcher } from './fetcher';

const apiURL = 'https://www.api.com/';
const mockResult = { mockValue: 'VALUE' };

jest.useFakeTimers();

describe('fetcher', () => {
  it('should work with a method that receives data', async () => {
    server.use(
      rest.get(apiURL, (req, res, ctx) => {
        return res(ctx.json(mockResult));
      }),
    );

    const result = await fetcher({
      url: apiURL,
      method: 'GET',
    });

    expect(result).toStrictEqual({
      status: HTTP_STATUS_CODE.OK,
      data: mockResult,
    });
  });

  it('should work with a method that sends data', async () => {
    server.use(
      rest.post(apiURL, (req, res, ctx) => {
        return res(ctx.json(mockResult));
      }),
    );

    const data = { a: 'b' };

    const result = await fetcher({ url: apiURL, method: 'POST', body: data });

    expect(result).toStrictEqual({
      status: HTTP_STATUS_CODE.OK,
      data: mockResult,
    });
  });

  it('correctly rejects the promise if there is an error', async () => {
    const testError = { message: 'Test error' };

    server.use(
      rest.get(apiURL, (_, res, ctx) => {
        return res(
          ctx.status(HTTP_STATUS_CODE.BAD_REQUEST),
          ctx.json(testError),
        );
      }),
    );

    const error = await getError<HttpError<{ message: string }>>(() => {
      return fetcher({ url: apiURL, method: 'GET' });
    });

    expect(error.response.data?.message).toBe(testError.message);

    expect(error.toJson()).toMatchInlineSnapshot(`
      {
        "message": "http: request to https://www.api.com/ failed with status 400",
        "name": "HttpError",
        "response": {
          "data": {
            "message": "Test error",
          },
          "status": 400,
        },
      }
    `);
  });

  it('should work with a text request', async () => {
    const text = 'Success';

    server.use(
      rest.get(apiURL, (req, res, ctx) => {
        return res(
          ctx.status(HTTP_STATUS_CODE.OK),
          ctx.set('Content-Type', 'text/plain'),
          ctx.text(text),
        );
      }),
    );

    const result = await fetcher({
      url: apiURL,
      method: 'GET',
      responseAs: 'text',
    });

    expect(result).toStrictEqual({
      status: HTTP_STATUS_CODE.OK,
      data: text,
    });
  });
});

describe('HumanizedHttpError', () => {
  it('should match snapshot', async () => {
    const error = await getError<HumanizedHttpError<null>>(() => {
      throw new HumanizedHttpError({
        title: 'Algo deu errado',
        description:
          'Ocorreu um erro ao realizar o login. Por favor, tente novamente',
        httpError: new HttpError('bad request', {
          response: {
            data: {
              message: 'example',
            },
            status: HTTP_STATUS_CODE.BAD_REQUEST,
          },
        }),
      });
    });

    expect(error.toJson()).toMatchInlineSnapshot(`
      {
        "description": "Ocorreu um erro ao realizar o login. Por favor, tente novamente",
        "httpError": {
          "message": "bad request",
          "name": "HttpError",
          "response": {
            "data": {
              "message": "example",
            },
            "status": 400,
          },
        },
        "message": "Algo deu errado",
        "name": "HumanizedHttpError",
        "statusCode": 400,
        "title": "Algo deu errado",
      }
    `);
  });
});
