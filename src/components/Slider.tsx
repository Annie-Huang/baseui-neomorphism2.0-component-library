import { Slider } from '@base-ui/react';
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

interface SliderProps
  extends React.ComponentProps<typeof Slider.Root>,
    VariantProps<typeof sliderVariants> {}

const NeuSlider = (props: SliderProps) => {
  return (
    <Slider.Root>
      <Slider.Control>
        <Slider.Track>
          <Slider.Indicator />
        </Slider.Track>
        <Slider.Thumb />
      </Slider.Control>
    </Slider.Root>
  );
};

export default NeuSlider;
