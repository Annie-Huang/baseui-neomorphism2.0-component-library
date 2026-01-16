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
import Input from './components/Input.tsx';
import { TabsList, TabsPanel, TabsRoot, TabsTab } from './components/Tabs.tsx';

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

        {/* Concept of a render */}
        <a href='/link'>Go to this link</a>
        <Button render={<a href='/link'>Go to this link</a>} />

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
            <CardContent className='space-y-4 h-36 flex gap-4'>
              <NeuProgress orientation={'vertical'} max={100} value={25} />
              <NeuProgress orientation={'vertical'} max={100} value={50} />
              <NeuProgress orientation={'vertical'} max={100} value={75} />
            </CardContent>
            <CardContent className='space-y-4'>
              <NeuProgress variant={'secondary'} max={100} value={25} />
              <NeuProgress max={100} value={50} />
              <NeuProgress max={100} value={75} />
            </CardContent>
            <CardFooter className='space-y-2'>
              <Input type='email'></Input>
              <Input></Input>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <TabsRoot>
                <TabsList className='space-x-4'>
                  <TabsTab value='overview'>Overview</TabsTab>
                  <TabsTab value='user'>User</TabsTab>
                </TabsList>
                <TabsPanel value='overview'>
                  <h2>This is overview</h2>
                  <p>This is more info about the overview</p>
                </TabsPanel>
                <TabsPanel value='user'>
                  <h2>This is user</h2>
                </TabsPanel>
              </TabsRoot>
            </CardHeader>
          </Card>
        </div>
      </div>
    </main>
  );
}

export default App;
