import { mergeProps, Tabs } from '@base-ui/react';
import React from 'react';
import { cva } from 'class-variance-authority';

const tabsRootVariants = cva('w-full');

// interface TabRootProps extends React.ComponentProps<typeof Tabs.Root> {}
// Change to the following to get rid of ESLint error of:
// ESLint: An interface declaring no members is equivalent to its supertype. (@typescript-eslint/no-empty-object-type)
type TabsRootProps = React.ComponentProps<typeof Tabs.Root>;

export const TabsRoot = (props: TabsRootProps) => {
  // const rootMerge = mergeProps(props, { className: tabsRootVariants() });
  const rootMerge = mergeProps(props, { tabsRootVariants });

  return <Tabs.Root {...rootMerge} />;
};

const tabsTabVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium ' +
    'ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ' +
    'focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[selected]:bg-background ' +
    'data-[selected]:text-foreground data-[selected]:shadow-inset cursor-pointer hover:text-foreground duration-350 ' +
    'relative z-10',
);

type TabsTabProps = React.ComponentProps<typeof Tabs.Tab>;

export const TabsTab = (props: TabsTabProps) => {
  // const rootMerge = mergeProps(props, { className: tabsTabVariants() });
  const rootMerge = mergeProps(props, { tabsTabVariants });

  // return <Tabs.Tab {...rootMerge} />;
  // It ask to inject the value explicitly.
  return <Tabs.Tab {...rootMerge} value={rootMerge.value} />;
};

const tabsListVariants = cva('w-full');

type TabsListProps = React.ComponentProps<typeof Tabs.List>;

export const TabsList = (props: TabsListProps) => {
  const rootMerge = mergeProps(props, { tabsListVariants });

  return <Tabs.List {...rootMerge} />;
};
