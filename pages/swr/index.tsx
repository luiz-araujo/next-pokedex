import Link from 'next/link';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function App() {
  const { data, error, isLoading } = useSWR(
    'https://api.github.com/repos/facebook/react',
    fetcher,
  );

  if (error) {
    return <p>An error has occurred.</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div>
        <Link href="/">Ir para a home</Link>
      </div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👁 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}
