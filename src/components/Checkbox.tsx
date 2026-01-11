import React from 'react';
import { Checkbox, mergeProps } from '@base-ui/react';
import { cva } from 'class-variance-authority';
import { Check } from 'lucide-react';

// Need to add 'inline-block' into checkboxVariants as Checkbox.Root is a <span> now (maybe it happened after migrating '@base-ui-components/react' into '@base-ui/react'?)
const checkboxVariants = cva(
  'inline-block h-5 w-5 shrink-0 rounded-sm border-1 border-highlight bg-background shadow-inset focus-visible:outline-none ' +
    'focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 data-[checked]:bg-linear-tl ' +
    'data-[checked]:from-primary/5 data-[checked]:to-primary/25 data-[checked]:shadow-raised',
);

const checkIndicatorVariants = cva('flex items-center justify-center');

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
      <Checkbox.Indicator {...mergedIndicator}>
        <Check className='w-3 h-3 text-primary' />
      </Checkbox.Indicator>
    </Checkbox.Root>
  );
};

export default NeuCheckbox;
