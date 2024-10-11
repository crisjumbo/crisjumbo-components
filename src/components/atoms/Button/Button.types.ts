type ButtonVariant = 'default' | 'primary' | 'secondary';
type ButtonState = 'active' | 'loading' | 'disabled';

export type ButtonProps = {
  text: string;
  testId?: string;
  theme?: any;
  state?: ButtonState;
  variant?: ButtonVariant;
  type?: 'button' | 'submit' | 'reset';
  handleClick?: () => void;
};

export type StyledButtonProps = {
  variant: ButtonVariant;
  state: ButtonState;
};
