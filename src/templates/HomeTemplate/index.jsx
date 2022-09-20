import P from 'prop-types';
import { PokemonCard } from '../../components/PokemonCard';
import * as Styled from './styles';

export function HomeTemplate({ data }) {
  return (
    <Styled.Container>
      <Styled.PokemonContainer>
        {data.map((pokemon, idx) => (
          <PokemonCard key={pokemon.name} urlPokemon={pokemon.url} idx={idx} />
        ))}
      </Styled.PokemonContainer>
    </Styled.Container>
  );
}

HomeTemplate.propTypes = {
  data: P.array.isRequired,
};
