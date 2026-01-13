import { mergeProps, Progress, useRender } from '@base-ui/react';
import { cva, type VariantProps } from 'class-variance-authority';

const progressVariants = cva(
  'relative overflow-hidden rounded-full bg-background shadow-inset focus:outline-none focus-visible:ring-2 ' +
    'focus-visible:ring-primary focus-visible:ring-offset-2',
  {
    variants: {
      orientation: {
        horizontal: 'w-full h-5',
        vertical: 'h-full w-5',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
    },
  },
);

const progressIndicatorVariants = cva('rounded-full border-none', {
  variants: {
    orientation: {
      horizontal: 'bg-linear-to-l',
      vertical: 'bg-linear-to-t',
    },
    variant: {
      default: 'from-primary to-primary/75',
      secondary: 'from-muted-foreground to-muted-foreground/75',
    },
  },
});

// Great that useRender got 'progress' component
interface ProgressProps
  extends useRender.ComponentProps<'progress'>,
    VariantProps<typeof progressVariants>,
    VariantProps<typeof progressIndicatorVariants> {}

const NeuProgress = (props: ProgressProps) => {
  const rootMerge = mergeProps(props, {
    className: progressVariants(),
  });

  // Not sure why we get this error in Progress.Root:
  // Property value is missing in type { children: Element; } but required in type ProgressRootProp
  // But this is the work around:
  const { value, ...otherProps } = rootMerge;

  return (
    <Progress.Root value={value} {...otherProps}>
      <Progress.Track className='h-full w-full'>
        <Progress.Indicator
          className={progressIndicatorVariants({
            variant: props.variant,
            orientation: props.orientation,
          })}
        />
      </Progress.Track>
    </Progress.Root>
  );
};

export default NeuProgress;
