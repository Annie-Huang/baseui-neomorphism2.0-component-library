import Button from './components/Button.tsx';
import Nav from './components/Nav.tsx';

function App() {
  return (
    <main>
      <Nav />
      <div className='space-x-2'>
        <Button>Submit</Button>
        {/*<Button className='text-primary'>Submit</Button>*/}
        {/*<Button variant={'primary'} className='bg-amber-900'>Submit</Button>*/}
        {/*<Button variant={'primary'} className='bg-amber-900' style={{ backgroundColor: 'green' }}>Submit</Button>*/}
        <Button variant={'primary'}>Submit</Button>
        <Button variant={'destructive'}>Cancel</Button>
        <Button variant={'warning'}>Warning</Button>

        <Button variant={'primary'} disabled>
          Submit
        </Button>
      </div>
    </main>
  );
}

export default App;
