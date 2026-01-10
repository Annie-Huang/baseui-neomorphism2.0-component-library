// This is mirror Add a mode toggle in https://ui.shadcn.com/docs/dark-mode/vite
import Button from './Button.tsx';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../providers/theme-provider.tsx';

const Nav = () => {
  const { setTheme, theme } = useTheme();

  return (
    <nav className='py-8 px-12 flex justify-between items-center'>
      <h1 className='font-bold'>Neumorphism</h1>
      <Button
        onClick={() => {
          if (theme === 'light') {
            setTheme('dark');
          } else {
            setTheme('light');
          }
        }}
        shape={'circle'}
        size={'icon'}
      >
        <Sun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
        <Moon className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
      </Button>
    </nav>
  );
};

export default Nav;
