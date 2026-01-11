import { mergeProps, useRender } from '@base-ui/react';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva('rounded-2xl', {
  variants: { variant: { raised: 'shadow-raised', inset: 'shadow-inset' } },
  defaultVariants: {
    variant: 'raised',
  },
});

interface CardProps
  extends useRender.ComponentProps<'div'>,
    VariantProps<typeof cardVariants> {}

export const Card = (props: CardProps) => {
  const mergedProps = mergeProps(props, {
    className: cardVariants({ variant: props.variant }),
  });

  const element = useRender({
    defaultTagName: 'div',
    render: props.render,
    props: mergedProps,
  });

  return element;
};
