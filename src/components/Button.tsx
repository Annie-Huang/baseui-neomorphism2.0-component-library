import {
  type ButtonProps as BaseUIButtonProps,
  mergeProps,
} from '@base-ui/react';
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

const buttonVariants = cva(
  'inline-flex justify-center items-center bg-red-200',
  {
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
      size: 'default',
    },
  },
);

type ButtonVariant =
  | 'default'
  | 'primary'
  | 'destructive'
  | 'warning'
  | null
  | undefined;
type ButtonSize = 'default' | 'icon' | null | undefined;
type ButtonProps = BaseUIButtonProps & {
  variant: ButtonVariant;
  size: ButtonSize;
};

const Button = (props: ButtonProps) => {
  const mergedProps = mergeProps(props, {
    className: buttonVariants({ variant: props.variant, size: props.size }),
  });

  const element = useRender({
    defaultTagName: 'button',
    render: props.render,
    props: mergedProps,
  });

  return element;
};

export default Button;
