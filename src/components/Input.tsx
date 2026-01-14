import { mergeProps, useRender } from '@base-ui/react';
import type { VariantProps } from 'class-variance-authority';

interface InputProps
  extends useRender.ComponentProps<'input'>,
    VariantProps<typeof inputVariants> {}

const Input = (props: InputProps) => {
  const mergedProps = mergeProps(props, {
    className: inputVariants(),
    type: props.type,
  });

  const element = useRender({
    defaultTagName: 'input',
    render: props.render,
    props: mergedProps,
  });

  return element;
};

export default Input;
