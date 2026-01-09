import Button from './components/Button.tsx';

function App() {
  return (
    <main>
      <h1>Hello there</h1>
      <div className='space-x-2'>
        {/*<Button className='text-primary'>Submit</Button>*/}
        <Button variant={'primary'} className='bg-amber-900'>
          Submit
        </Button>
        <Button variant={'destructive'}>Cancel</Button>
      </div>
    </main>
  );
}

export default App;
