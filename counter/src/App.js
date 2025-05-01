import { useState } from 'react';

import './App.css';
import CounterButton from './components/CounterButton';



function App() {
  const [count, setCounter ]=useState(0)

  const minusCount=()=>setCounter(count - 1);
  const resetCount=()=>setCounter(0);
  const addCount=()=>setCounter(count + 1);

  return (
    <div className="App">
      <div className="section">
        <h1 className='cnt'>Counter: {count} </h1>
        <CounterButton onClick={minusCount}>-</CounterButton>
        <CounterButton onClick={resetCount}>RESET</CounterButton>
        <CounterButton onClick={addCount}>+</CounterButton>
      </div>
    </div>
  );
}

export default App;
