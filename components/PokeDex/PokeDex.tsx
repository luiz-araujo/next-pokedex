import { PokeCard, PokeCardProps } from '../PokeCard';
import { Cards, FinalResult, TotalExp, Wrapper } from './PokeDex.styles';

type PokeDexProps = {
  cards: PokeCardProps[];
  exp: number;
  isWinner: boolean;
};

export const PokeDex = ({ cards, exp, isWinner }: PokeDexProps) => {
  const title = isWinner ? (
    <FinalResult color="winner">Winning Hand</FinalResult>
  ) : (
    <FinalResult color="loser">Losing Hand</FinalResult>
  );

  return (
    <Wrapper>
      {title}
      <TotalExp>Total Experience: {exp}</TotalExp>
      <Cards>
        {cards.map((card) => (
          <PokeCard
            key={card.id}
            id={card.id}
            name={card.name}
            type={card.type}
            base_experience={card.base_experience}
          />
        ))}
      </Cards>
    </Wrapper>
  );
};
