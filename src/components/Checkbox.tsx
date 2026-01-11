import React from 'react';
import { Checkbox } from '@base-ui/react';

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
