import styled, { css } from 'styled-components';
import { StyledButtonProps } from './Button.types';

// TO-DO: Bring the themes from the ORIGIN project
const variantStyles = {
  default: css`
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
  `,
  primary: css`
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
    text-decoration-line: ${({ theme }) => theme.button.underline};
  `,
  secondary: css`
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 400;
  `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  font-size: 18px;
  border-radius: 6px;
  cursor: pointer;
  ${({ variant }) => variant && variantStyles[variant]}
`;
