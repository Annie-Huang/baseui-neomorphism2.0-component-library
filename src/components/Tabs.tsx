import { mergeProps, Tabs } from '@base-ui/react';
import React from 'react';
import { cva } from 'class-variance-authority';

const tabsRootVariants = cva('w-full');

// interface TabRootProps extends React.ComponentProps<typeof Tabs.Root> {}
// Change to the following to get rid of ESLint error of:
// ESLint: An interface declaring no members is equivalent to its supertype. (@typescript-eslint/no-empty-object-type)
type TabRootProps = React.ComponentProps<typeof Tabs.Root>;

export const TabsRoot = (props: TabRootProps) => {
  const rootMerge = mergeProps(props, { className: tabsRootVariants() });

  return <Tabs.Root {...rootMerge} />;
};

const tabsRootVariants = cva('w-full');

// interface TabRootProps extends React.ComponentProps<typeof Tabs.Root> {}
// Change to the following to get rid of ESLint error of:
// ESLint: An interface declaring no members is equivalent to its supertype. (@typescript-eslint/no-empty-object-type)
type TabRootProps = React.ComponentProps<typeof Tabs.Root>;

export const TabsRoot = (props: TabRootProps) => {
  const rootMerge = mergeProps(props, { className: tabsRootVariants() });

  return <Tabs.Root {...rootMerge} />;
};
