import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    padding: 2rem;
  `}
`;
