import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background: #fff
      url(https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png);
    max-width: 120rem;
    width: 100%;
    margin: 0 auto;
  `}
`;

export const PokemonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: auto;
    width: 100%;
    max-width: 1024px;
    margin-top: 10rem;
    background: #fff;
  `}
`;
