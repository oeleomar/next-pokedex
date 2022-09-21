import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 50px;
    cursor: pointer;

    :hover {
      animation: 0.3s shake;
    }

    @keyframes shake ${theme.animations.shake};
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    background-color: #f2f2f2;
    border-radius: 8px;
    padding: 2rem;
    width: 20rem;
    height: 20rem;
  `}
`;
