import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    margin-top: 10px;
    span {
      background-color: red;
      padding: 5px 10px;
      margin: 0px 10px;
      font-size: 16px;
      font-weight: 500;
    }
  `}
`;
