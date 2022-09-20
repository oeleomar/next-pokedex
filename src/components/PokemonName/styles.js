import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding-left: 7.2525%;
  `}
`;

export const Span = styled.span`
  ${({ theme }) => css`
    display: block;
    text-align: start;
    font-size: 14px;
    color: #919191;
    font-weight: 600;
    margin: 0.5rem 0;
  `}
`;

export const Name = styled.h3`
  ${({ theme }) => css`
    text-align: start;
    font-size: 24px;
    font-weight: 400;
    text-transform: capitalize;
    margin: 1rem 0;
    margin-bottom: 0.5rem;
    color: #313131;
  `}
`;
