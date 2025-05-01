import { useState } from 'react';
import './App.css';

function App() {
  const [count,setCounter]=useState(0)
  return (
    <div className="App">
      <div className="section">
        <h1 className='cnt'>Counter: {count} </h1>
        <counterButton onClick={minusCount}>-</counterButton>
        <counterButton onClick={resetCount}>RESET</counterButton>
        <counterButton onclick={addCount}>+</counterButton>
      </div>
    </div>
  );
}

export default App;
