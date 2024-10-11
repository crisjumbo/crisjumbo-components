import { LinkProps } from './Link.types';
import { StyledLink } from './Link.styled';

export const Link = ({
  text,
  testId = 'cj-button',
  type = 'button',
  state = 'active',
  variant = 'default',
  handleClick = () => {},
}: LinkProps) => {
  if (state === 'disabled') {
    return <button>disabled</button>;
  }
  if (state === 'loading') {
    return <button>loading</button>;
  }

  return (
    <StyledLink
      data-testid={testId}
      onClick={handleClick}
      state={state}
      variant={variant}
      type={type}
    >
      {text}
    </StyledLink>
  );
};
