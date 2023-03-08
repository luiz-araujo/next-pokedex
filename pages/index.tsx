import type { NextPage } from 'next';
import { ChangeTheme } from '@/components/ChangeTheme';
import { PokeGame } from '@/components/PokeGame';

const Home: NextPage = () => {
  return (
    <>
      <ChangeTheme />
      <PokeGame />
    </>
  );
};

export default Home;
