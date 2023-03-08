import { useEffect, useState } from 'react';
import { fetcher } from '@/utils/fetcher';
import { PokeCardProps } from '../PokeCard';
import { PokeDex } from '../PokeDex';

const apiURL = 'http://localhost:3333/pokemons';

export const PokeGame = () => {
  const [hand1, setHand1] = useState<PokeCardProps[]>([]);
  const [hand2, setHand2] = useState<PokeCardProps[]>([]);

  useEffect(() => {
    async function loadPokemons(): Promise<void> {
      const response = await fetcher<PokeCardProps[]>({
        url: apiURL,
        method: 'GET',
      });
      const pokemons = response.data;

      pokemons.sort(() => Math.random() - 0.5);
      const halfwayThrough = Math.floor(pokemons.length / 2);

      setHand1(pokemons.slice(0, halfwayThrough));
      setHand2(pokemons.slice(halfwayThrough, pokemons.length));
    }

    loadPokemons();
  }, []);

  const exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
  const exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

  return (
    <>
      <PokeDex cards={hand1} exp={exp1} isWinner={exp1 > exp2} />
      <PokeDex cards={hand2} exp={exp2} isWinner={exp2 > exp1} />
    </>
  );
};
