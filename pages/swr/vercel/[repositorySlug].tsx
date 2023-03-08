/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';
import useSWR, { SWRConfig, unstable_serialize } from 'swr';

const githubURI = 'https://api.github.com/repos/vercel';

const fetcher = (repository: string) => {
  const uri = `${githubURI}/${repository}`;

  return fetch(uri).then((res) => res.json());
};

export async function getServerSideProps({ params: { repositorySlug } }: any) {
  const repoInfo = await fetcher(repositorySlug);

  return {
    props: {
      fallback: {
        [unstable_serialize(['repo', repositorySlug])]: repoInfo,
      },
      repository: repositorySlug,
    },
  };
}

function Repo({ name }: any) {
  const { data, error } = useSWR(['repo', name], () => fetcher(name), {
    revalidateOnMount: false,
  });

  if (error) {
    return <p>An error has occurred.</p>;
  }

  if (!data) {
    return <p>Loading... </p>;
  }

  return (
    <div>
      <div>
        <Link href="/">Ir para a home</Link>
      </div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}

export default function SWR({ fallback, repository }: any) {
  return (
    <SWRConfig value={{ fallback }}>
      <Repo name={repository} />
    </SWRConfig>
  );
}
