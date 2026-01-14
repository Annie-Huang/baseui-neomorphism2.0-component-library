import { Tabs } from '@base-ui/react';
import React from 'react';

// interface TabRootProps extends React.ComponentProps<typeof Tabs.Root> {}
// Change to the following to get rid of ESLint error of:
// ESLint: An interface declaring no members is equivalent to its supertype. (@typescript-eslint/no-empty-object-type)
type TabRootProps = React.ComponentProps<typeof Tabs.Root>;

export const TabsRoot = (props: TabRootProps) => {
  return <Tabs.Root {...props} />;
};
