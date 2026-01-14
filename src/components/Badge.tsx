import { cva } from 'class-variance-authority';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border-2 border-background px-2.5 py-0.5 text-sm font-semibold ' +
    'transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
);
const NeuBadge = () => {
  return <div></div>;
};

export default NeuBadge;
