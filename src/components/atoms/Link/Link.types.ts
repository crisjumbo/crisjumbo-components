type LinkVariant = 'default' | 'primary' | 'secondary';
type LinkState = 'active' | 'loading' | 'disabled';

export type LinkProps = {
  text: string;
  testId?: string;
  theme?: any;
  state?: LinkState;
  variant?: LinkVariant;
  type?: 'button' | 'submit' | 'reset';
  handleClick?: () => void;
};

export type StyledLinkProps = {
  variant: LinkVariant;
  state: LinkState;
};
