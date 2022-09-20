import P from 'prop-types';
import * as Styled from './styles';

export function PokemonsTypes({ types }) {
  return (
    <Styled.Container>
      {types.map((type) => (
        <Styled.SpanTypes key={type.type.name} type={type}>
          {type.type.name}
        </Styled.SpanTypes>
      ))}
    </Styled.Container>
  );
}

PokemonsTypes.propTypes = {
  types: P.array.isRequired,
};
