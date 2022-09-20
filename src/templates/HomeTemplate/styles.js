import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background: #fff
      url(https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png);
    max-width: 120rem;
    width: 100%;
    margin: 0 auto;

    > header {
      background: #313131;
      min-height: 16rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    > header input {
      height: 5rem;
      width: 60%;
      border-radius: 5px;
      border: 3px #616161 solid;
      line-height: 1.5;
      padding: 0.5em 0;
      text-indent: 0.5em;
      font-family: inherit;
      font-size: 18px;
      color: #313131;
    }

    > header button {
      background-color: #ee6b2f;
      border: none;
      border-radius: 5px;
      width: 5rem;
      height: 5rem;
      margin-left: 2rem;
      color: white;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
    }

    > header button:hover {
      background: #da471b;
    }
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
