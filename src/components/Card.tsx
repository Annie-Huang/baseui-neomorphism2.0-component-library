import { mergeProps, useRender } from '@base-ui/react';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva('rounded-2xl border-3 border-border', {
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

// Card Header
const cardHeaderVariants = cva('flex flex-col, space-y-1.5 p-6');

interface CardHeaderProps
  extends useRender.ComponentProps<'div'>,
    VariantProps<typeof cardHeaderVariants> {}

export const CardHeader = (props: CardHeaderProps) => {
  const mergedProps = mergeProps(props, {
    className: cardHeaderVariants(),
  });

  const element = useRender({
    defaultTagName: 'div',
    render: props.render,
    props: mergedProps,
  });

  return element;
};
