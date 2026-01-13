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
// import NeuSwitch from './components/Switch.tsx';
// import NeuCheckbox from './components/Checkbox.tsx';
import NeuSlider from './components/Slider.tsx';
import NeuProgress from './components/Progress.tsx';

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
              {/*<NeuSwitch />*/}
              {/*<NeuCheckbox disabled />*/}
              {/*<NeuCheckbox />*/}
              <NeuSlider variant={'secondary'} />
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Progress bars</CardTitle>
              <CardDescription>Simple vertical/horizontal bars</CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <NeuProgress max={100} value={25} />
              <NeuProgress max={100} value={50} />
              <NeuProgress max={100} value={75} />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}

export default App;
