import P from 'prop-types';
import * as Styled from './styles';

export function PokemonName({ name, order }) {
  return (
    <Styled.Container>
      {order}.{name.charAt(0).toUpperCase() + name.slice(1)}
    </Styled.Container>
  );
}

PokemonName.propTypes = {
  name: P.string.isRequired,
  order: P.number.isRequired,
};
