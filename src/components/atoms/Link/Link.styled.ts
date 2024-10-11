import styled, { css } from 'styled-components';
import { StyledLinkProps } from './Link.types';

// TO-DO: Bring the themes from the ORIGIN project
const variantStyles = {
  default: css`
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
  `,
  primary: css`
    color: ${({ theme }) => theme.colors.brand};
    font-weight: ${({ theme }) => theme.link.weight};
    text-decoration-line: ${({ theme }) => theme.link.underline};
  `,
  secondary: css`
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 400;
  `,
};

export const StyledLink = styled.a<StyledLinkProps>`
  font-size: 18px;
  cursor: pointer;
  ${({ variant }) => variant && variantStyles[variant]}
`;
