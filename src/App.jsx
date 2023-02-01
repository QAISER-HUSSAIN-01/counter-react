import React from 'react'
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);

  const handleCounter = (type) => {
    if (type === "increment") {
      setCount(count + 1);
    } else {
      if (count === 0) {
        setCount(0);
      } else {
        setCount(count - 1);
      }
    }
  }

  return (
    <div className="App">
      <h1>Counter</h1>
      <h5>{count}</h5>
      <div>
        <button onClick={() => handleCounter('increment')}>Increment</button>
        <button onClick={() => handleCounter('decrement')}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
