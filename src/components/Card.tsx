import { useRender } from '@base-ui/react';
import { cva, type VariantProps } from 'class-variance-authority';



interface CardProps extends useRender.ComponentProps<'div'>, VariantProps<>{}

export const Card = (props) => {

  const element = useRender({
    defaultTagName: 'div'
    render:,
    props: merged
  })
  return <div></div>;
};
