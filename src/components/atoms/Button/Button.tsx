import { ButtonProps } from './Button.types';
import { StyledButton } from './Button.styled';

export const Button = ({
  text,
  testId = 'cj-button',
  type = 'button',
  state = 'active',
  variant = 'default',
  handleClick = () => {},
}: ButtonProps) => {
  if (state === 'disabled') {
    return <button>disabled</button>;
  }
  if (state === 'loading') {
    return <button>loading</button>;
  }

  return (
    <StyledButton
      data-testid={testId}
      onClick={handleClick}
      state={state}
      variant={variant}
      type={type}
    >
      {text}
    </StyledButton>
  );
};
