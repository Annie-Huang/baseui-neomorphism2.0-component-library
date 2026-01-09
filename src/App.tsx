import Button from './components/Button.tsx';

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
