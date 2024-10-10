export type ButtonProps = {
  text: string;
  testId?: string;
  variant?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  handleClick?: () => void;
};
