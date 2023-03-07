import { Card, CardItem, Image, Text, Title } from './PokeCard.styles';

const POKEMON_API =
  'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

interface PokeCardProps {
  id: number;
  name: string;
  type: string;
  base_experience: number;
}

export const PokeCard = ({
  id,
  name,
  type,
  base_experience,
}: PokeCardProps) => {
  const imgSrc = `${POKEMON_API}${String(id).padStart(3, '0')}.png`;

  return (
    <Card data-testid="pokecard">
      <CardItem>
        <Title>{name}</Title>
        <Text>{base_experience}</Text>
        <Text>{type}</Text>
        <Image src={imgSrc} alt={name} />
        <Image src={imgSrc} alt={name} />
      </CardItem>
    </Card>
  );
};
