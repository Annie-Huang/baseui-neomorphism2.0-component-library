import Button from './components/Button.tsx';
import { cva } from 'class-variance-authority';

const buttonVariants = cva('inline-flex justify-center items-center', {
  variants: {
    variant: {
      default: '',
      primary: '',
      destructive: '',
      warning: '',
    },
    size: {
      default: 'h-12 px-4',
      icon: 'h-12 w-12',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'icon',
  },
});

function App() {
  return (
    <main>
      <h1>Hello there</h1>
      <div className='space-x-2'>
        <Button className='text-primary'>Submit</Button>
        <Button>Cancel</Button>
      </div>
    </main>
  );
}

export default App;
