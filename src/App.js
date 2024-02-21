import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);
  console.log('render');
  useEffect(() => {
    console.log('Call the API....')
  }, []); //딱 한 번 실행
  useEffect(() => {
    if(keyword !== '' && keyword.length > 5)
    console.log('SEARCH FOR',keyword)
  }, [keyword]); //keyword가 변할 때 마다 실행
  return (
    <div>
      <input
        onChange={onChange}
        value={keyword}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default App;
