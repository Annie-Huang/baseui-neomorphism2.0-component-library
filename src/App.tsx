import Button from './components/Button.tsx';
import Nav from './components/Nav.tsx';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './components/Card.tsx';
import NeuSwitch from './components/Switch.tsx';

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

        <div className='m-6'>
          <Card>
            <CardHeader>
              <CardTitle>This is my title</CardTitle>
              <CardDescription>Ths is the price of my product</CardDescription>
            </CardHeader>
            <CardContent>
              <ul>
                <li>this is one benefit fewafewa fewafewa</li>
                <li>this is one benefit eafwfew</li>
                <li>this is one benefit</li>
              </ul>
            </CardContent>
            <CardFooter>
              {/*<Button variant={'primary'}>Purchase now</Button>*/}
              <NeuSwitch />
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}

export default App;
