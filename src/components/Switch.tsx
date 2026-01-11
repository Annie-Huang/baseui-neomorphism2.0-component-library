import { Switch, useRender } from '@base-ui/react';
import { cva, type VariantProps } from 'class-variance-authority';

const switchVariants = cva('cursor-pointer');

// I got confused, we don't have a html element called 'switch', there is a material ui Switch component as well as React Native Switch component.
// But I actually don't know what is the React.ElementType or HTMLProps of 'switch' is.
interface SwitchProps
  extends useRender.ComponentProps<'switch'>,
    VariantProps<typeof switchVariants> {}

const NeuSwitch = (props: SwitchProps) => {
  return (
    <Switch.Root {...props}>
      <Switch.Thumb />
    </Switch.Root>
  );
};

export default NeuSwitch;
