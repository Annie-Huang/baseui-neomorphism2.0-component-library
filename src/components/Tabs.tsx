import { mergeProps, Tabs } from '@base-ui/react';
import React from 'react';
import { cva } from 'class-variance-authority';

const tabsRootVariants = cva('w-full');

// interface TabRootProps extends React.ComponentProps<typeof Tabs.Root> {}
// Change to the following to get rid of ESLint error of:
// ESLint: An interface declaring no members is equivalent to its supertype. (@typescript-eslint/no-empty-object-type)
type TabsRootProps = React.ComponentProps<typeof Tabs.Root>;

export const TabsRoot = (props: TabsRootProps) => {
  const rootMerge = mergeProps(props, { className: tabsRootVariants() });

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
  const tabMerge = mergeProps(props, { className: tabsTabVariants() });

  // return <Tabs.Tab {...tabMerge} />;
  // It ask to inject the value explicitly.
  return <Tabs.Tab {...tabMerge} value={tabMerge.value} />;
};

const tabsListVariants = cva(
  'relative inline-flex h-12 items-center justify-center rounded-2xl bg-linear-to-tl from-background ' +
    'to-highlight/75 p-1 text-muted-foreground shadow-raised border-3 border-border gap-4',
);

type TabsListProps = React.ComponentProps<typeof Tabs.List>;

export const TabsList = (props: TabsListProps) => {
  const listMerge = mergeProps(props, { className: tabsListVariants() });

  return <Tabs.List {...listMerge} />;
};

const tabsIndicatorVariants = cva(
  'absolute rounded-sm bg-background shadow-raised transition-all duration-200 border-1 border-background',
);

type TabsIndicatorProps = React.ComponentProps<typeof Tabs.Indicator>;

export const TabsIndicator = (props: TabsIndicatorProps) => {
  const mergeIndicator = mergeProps(props, {
    className: tabsIndicatorVariants(),
  });

  return <Tabs.List {...mergeIndicator} />;
};

const tabsPanelVariants = cva(
  'mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ' +
    'focus-visible:ring-offset-2',
);

type TabsPanelProps = React.ComponentProps<typeof Tabs.Panel>;

export const TabsPanel = (props: TabsPanelProps) => {
  const panelMerge = mergeProps(props, {
    className: tabsPanelVariants(),
  });

  // return <Tabs.Panel {...panelMerge} />;
  // It ask to inject the value explicitly.
  return <Tabs.Panel {...panelMerge} value={panelMerge.value} />;
};
