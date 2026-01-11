import React from 'react';
import { Checkbox } from '@base-ui/react';
import { cva } from 'class-variance-authority';

const checkboxVariants = cva(
  'h-5 w-5 shrink-0 rounded-sm border-1 border-highlight bg-background shadow-inset focus-visible:outline-none ' +
    'focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2',
);

// Since it does not have 'checkbox' so we will use typeof Checkbox.Root
interface CheckBoxProps extends React.ComponentProps<typeof Checkbox.Root> {
  className?: string;
}

const NeuCheckbox = (props: CheckBoxProps) => {
  return (
    <Checkbox.Root>
      <Checkbox.Indicator />
    </Checkbox.Root>
  );
};

export default NeuCheckbox;
