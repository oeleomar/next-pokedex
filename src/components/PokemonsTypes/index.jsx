import P from 'prop-types';
import * as Styled from './styles';

export function PokemonsTypes({ types }) {
  return (
    <Styled.Container>
      {types.map((type) => (
        <span key={type.type.name}>{type.type.name}</span>
      ))}
    </Styled.Container>
  );
}

PokemonsTypes.propTypes = {
  types: P.array.isRequired,
};
