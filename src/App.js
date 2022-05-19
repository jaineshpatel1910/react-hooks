import './App.css';
import HookCounter from './components/HookCounter';
import HookCounterFive from './components/HookCounterFive';
import HookCounterFour from './components/HookCounterFour';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import HookMouse from './components/HookMouse';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';

function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterFive /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      <IntervalHookCounter />
    </div>
  );
}

export default App;
