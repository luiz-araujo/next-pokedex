import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div style={{ padding: '$400' }}>
      <a href="/swr">Ir para swr client side</a>
      <br />
      <a href="/swr/vercel/next.js">Ir para swr server side</a>
    </div>
  );
};

export default Home;
