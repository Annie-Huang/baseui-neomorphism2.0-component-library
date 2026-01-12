import { Progress, useRender } from '@base-ui/react';
import { cva, type VariantProps } from 'class-variance-authority';

const progressVariants = cva('');

// Great that useRender got 'progress' component
interface ProgressProps
  extends useRender.ComponentProps<'progress'>,
    VariantProps<typeof progressVariants> {}

const NeuProgress = (props: ProgressProps) => {
  return (
    <Progress.Root>
      <Progress.Track>
        <Progress.Indicator />
      </Progress.Track>
    </Progress.Root>
  );
};

export default NeuProgress;
