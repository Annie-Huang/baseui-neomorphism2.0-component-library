import { mergeProps, Switch, useRender } from '@base-ui/react';
import { cva, type VariantProps } from 'class-variance-authority';

// Need to add 'block' into switchVariant as Switch.Root is a <span> now (maybe it happened after migrating '@base-ui-components/react' into '@base-ui/react'?)
const switchVariants = cva(
  'block cursor-pointer h-5.5 w-12 rounded-full focus-visible:outline-none focus-visible:ring-offset-2 ' +
    'focus-visible:ring-foreground focus-visible:ring-2 bg-background shadow-inset data-[checked]:bg-primary',
);
const thumbVariants = cva(
  'h-5 w-5 bg-red-background relative rounded-full block shadow-inset translate-x-0 data-[checked]:translate-x-6.5',
);

// I got confused, we don't have a html element called 'switch', there is a material ui Switch component as well as React Native Switch component.
// But I actually don't know what is the React.ElementType or HTMLProps of 'switch' is.
interface SwitchProps
  extends useRender.ComponentProps<'switch'>,
    VariantProps<typeof switchVariants> {}

const NeuSwitch = (props: SwitchProps) => {
  const mergedProps = mergeProps(props, { className: switchVariants() });

  const thumbProps = mergeProps(props, { className: thumbVariants() });

  return (
    <Switch.Root {...mergedProps}>
      <Switch.Thumb {...thumbProps} />
    </Switch.Root>
  );
};

export default NeuSwitch;
