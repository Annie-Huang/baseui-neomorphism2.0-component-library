import {
  // type ButtonProps as BaseUIButtonProps,
  mergeProps,
} from '@base-ui/react';
// import type { FC, ReactNode } from 'react';
import { useRender } from '@base-ui/react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

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
  // Remember focus-visiable only visiable through tab, not keyboard click.
  // Also ring-foreground meaning ring property, and foreground color, just like text-foreground
  'inline-flex justify-center items-center cursor-pointer hover:opacity-90 focus-visible:ring-foreground focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none rounded-xl border-3 border-foreground border-background shadow-raised bg-linear-to-tl disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        // default: 'bg-background',
        // primary: 'bg-blue-400',
        // destructive: 'bg-red-400',
        default: 'from-background to-highlight/75',
        primary: 'text-primary from-primary/5 to-primary/25',
        destructive: 'text-destructive from-destructive/5 to-destructive/25',
        warning: 'text-warning from-warning/5 to-warning/25',
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

/*type ButtonVariant =
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
};*/

// Much better way to do typing!
interface ButtonProps
  extends useRender.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {}

const Button = (props: ButtonProps) => {
  const mergedProps = mergeProps(props, {
    // className: buttonVariants({ variant: props.variant, size: props.size }),
    className: twMerge(
      buttonVariants({ variant: props.variant, size: props.size }), // so you can see color primary of the first button
      props.className, // also allow you to overwrite from the className props you put into inline styling.
    ),
  });

  const element = useRender({
    defaultTagName: 'button',
    render: props.render,
    props: mergedProps,
  });

  return element;
};

export default Button;
