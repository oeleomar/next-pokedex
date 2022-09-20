/* eslint-disable no-nested-ternary */
import P from 'prop-types';
import * as Styled from './styles';

export function PokemonName({ name, order }) {
  return (
    <Styled.Container>
      <Styled.Span>
        {order <= 9
          ? `Nº00${order}`
          : order <= 99
          ? `Nº0${order}`
          : `Nº${order}`}
      </Styled.Span>
      <Styled.Name>{name.charAt(0).toUpperCase() + name.slice(1)}</Styled.Name>
    </Styled.Container>
  );
}

PokemonName.propTypes = {
  name: P.string.isRequired,
  order: P.number.isRequired,
};
