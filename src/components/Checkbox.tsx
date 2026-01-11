import React from 'react';
import { Checkbox, mergeProps } from '@base-ui/react';
import { cva } from 'class-variance-authority';
import { Check } from 'lucide-react';

// Need to add 'inline-block' into checkboxVariants as Checkbox.Root is a <span> now (maybe it happened after migrating '@base-ui-components/react' into '@base-ui/react'?)
// Also need to use data-[disabled] rather than disabled as the disabled only apply for the <input> not the <span>, which is the Checkbox.Root sitting with.
const checkboxVariants = cva(
  'inline-block h-5 w-5 relative shrink-0 rounded-sm border-1 border-highlight bg-background shadow-inset focus-visible:outline-none ' +
    'focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 data-[checked]:bg-linear-to-tl ' +
    'duration-350 ease-out transition-all data-[checked]:from-primary/5 data-[checked]:to-primary/25 ' +
    'data-[checked]:shadow-raised data-[checked]:border-primary/50 cursor-pointer data-[disabled]:opacity-50',
);

const checkIndicatorVariants = cva(
  // 'flex items-center justify-center absolute top-1/2 left-1/2 -translate-1/2',
  'absolute top-1/2 left-1/2 -translate-1/2',
);

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
