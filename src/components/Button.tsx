// import type { ButtonProps } from '@base-ui/react';
// import type { FC, ReactNode } from 'react';

// interface ButtonProps {
//   children?: ReactNode;
// }

// Answer from google ai
// type ButtonProps = React.ComponentProps<'button'>;

// Answer from hover over <button>.
type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

// const Button: FC<ButtonProps> = ({children}) => {
const Button = (props: ButtonProps) => {
  const { children, ...otherProps } = props;
  return <button {...otherProps}>{children}</button>;
};

export default Button;
