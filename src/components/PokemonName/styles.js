import styled, { css } from 'styled-components';

export const Container = styled.h2`
  ${({ theme }) => css`
    text-align: center;
    font-size: 24px;
    text-transform: capitalize;
  `}
`;
