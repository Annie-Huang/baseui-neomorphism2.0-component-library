import type { ButtonProps } from '@base-ui/react';
// import type { FC, ReactNode } from 'react';
import { useRender } from '@base-ui/react';
import { cva } from 'class-variance-authority';

// interface ButtonProps {
//   children?: ReactNode;
// }

// Answer from google ai
// type ButtonProps = React.ComponentProps<'button'>;

// Answer from hover over <button>.   <--- we use this one.
// type ButtonProps = React.DetailedHTMLProps<
//   React.ButtonHTMLAttributes<HTMLButtonElement>,
//   HTMLButtonElement
// >;

// const Button: FC<ButtonProps> = ({children}) => {
/*const Button = (props: ButtonProps) => {
  const { children, ...otherProps } = props;
  return <button {...otherProps}>{children}</button>;
};*/

const buttonVariants = cva('inline-flex justify-center items-center', {
  variants: {
    variant: {
      default: '',
      primary: '',
      destructive: '',
      warning: '',
    },
    size: {
      default: 'h-12 px-4',
      icon: 'h-12 w-12',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'icon',
  },
});

const Button = (props: ButtonProps) => {
  const { render } = props;

  const element = useRender({
    defaultTagName: 'button',
    render,
    props,
  });

  return element;
};

export default Button;
