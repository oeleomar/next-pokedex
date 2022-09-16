import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css``}
`;

export const PokemonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    width: 120rem;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;
    margin-top: 10rem;
  `}
`;
