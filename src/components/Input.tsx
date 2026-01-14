import { mergeProps, useRender } from '@base-ui/react';

const Input = (props) => {
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
