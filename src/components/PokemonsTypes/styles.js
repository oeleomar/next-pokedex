/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
import styled, { css } from 'styled-components';

function getTheBackgroundColor(theme, type) {
  const typeBackground = { ...theme.colors.pokemonsType };
  let correctValueBackground;
  for (const [key, value] of Object.entries(typeBackground)) {
    if (key === type) {
      correctValueBackground = value;
    }
  }
  return `${correctValueBackground}`;
}

export const Container = styled.div`
  ${({ theme }) => css`
    padding-left: 7.2525%;
  `}
`;

export const SpanTypes = styled.span`
  ${({ theme, type }) => css`
    background: ${getTheBackgroundColor(theme, type.type.name)};
    border-radius: 3px;
    line-height: 18px;
    max-width: 110px;
    margin: 0 1.5625% 0 0;
    width: 38.4375%;
    float: left;
    text-transform: none;
    font-size: 11px;
    text-align: center;
    text-transform: capitalize;
  `}
`;
