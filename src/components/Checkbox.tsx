import React from 'react';
import { Checkbox, mergeProps } from '@base-ui/react';
import { cva } from 'class-variance-authority';

const checkboxVariants = cva(
  'h-5 w-5 shrink-0 rounded-sm border-1 border-highlight bg-background shadow-inset focus-visible:outline-none ' +
    'focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2',
);

const checkIndicatorVariants = cva('flex items-center justify-center h-5 w-5');

// Since it does not have 'checkbox' so we will use typeof Checkbox.Root
// interface CheckBoxProps extends React.ComponentProps<typeof Checkbox.Root> {}
type CheckBoxProps = React.ComponentProps<typeof Checkbox.Root>; // It seems ESLint suggested to change it to type rather than interface if we don't overwrite things.

const NeuCheckbox = (props: CheckBoxProps) => {
  const mergedProps = mergeProps(props, {
    className: checkboxVariants(),
  });

  const mergedIndicator = mergeProps(props, {
    className: checkIndicatorVariants(),
  });

  return (
    <Checkbox.Root {...mergedProps}>
      <Checkbox.Indicator {...mergedIndicator} />
    </Checkbox.Root>
  );
};

export default NeuCheckbox;
