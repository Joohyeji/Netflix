import {useState, useEffect} from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev)=>prev+1);
  console.log('render');
  const iRunOnlyOnce = () => {
    console.log('run only once');
  }
  useEffect(() => {},[]);
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default App;
