import { mergeProps, Slider } from '@base-ui/react';
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const sliderVariants = cva('w-full h-4');

const trackVariants = cva('relative w-full rounded-full shadow-inset h-4');

const rangeVariants = cva('absolute h-full rounded-full', {
  variants: {
    variant: {
      default: 'bg-linear-to-l from-primary to-primary/75',
      secondary: 'bg-linear-to-l from-muted to-muted/75',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const thumbVariants = cva(
  'rounded-full border-1 border-highlight bg-background',
);

interface SliderProps
  extends React.ComponentProps<typeof Slider.Root>,
    VariantProps<typeof sliderVariants> {}

const NeuSlider = (props: SliderProps) => {
  const rootMerge = mergeProps(props, {
    className: sliderVariants(),
  });

  return (
    <Slider.Root {...rootMerge}>
      {/* Without the className={'relative'}, you will see a dot at the top when you slide the slider. */}
      <Slider.Control className={'relative'}>
        <Slider.Track className={trackVariants()}>
          <Slider.Indicator className={rangeVariants()} />
        </Slider.Track>
        <Slider.Thumb className={thumbVariants()} />
      </Slider.Control>
    </Slider.Root>
  );
};

export default NeuSlider;
