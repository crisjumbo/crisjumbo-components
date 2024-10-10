import { ButtonProps } from './Button.types';
import { CJPButton } from './Button.styled';

export const CJButton = ({
  text,
  testId = 'cj-button',
  variant = 'default',
  type = 'button',
  disabled = false,
  handleClick = () => {},
}: ButtonProps) => {
  return (
    <CJPButton
      data-testid={testId}
      onClick={handleClick}
      disabled={disabled}
      type={type}
    >
      {text}
    </CJPButton>
  );
};
