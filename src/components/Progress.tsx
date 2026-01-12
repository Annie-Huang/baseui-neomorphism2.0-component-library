import { Progress, useRender } from '@base-ui/react';
import { cva, type VariantProps } from 'class-variance-authority';

const progressVariants = cva(
  'relative overflow-hidden rounded-full bg-background shadow-inset p-0.25 focus:outline-none focus-visible:ring-2 ' +
    'focus-visible:ring-primary focus-visible:ring-offset-2',
);

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
