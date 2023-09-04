import React , {useEffect, useState} from 'react';
import Viewer from './Components/Viewer';
import Controller from './Components/Controller';
import './App.css';

function App() {
  //선언
  const [count , setCount] = useState(0);
  const [text , setText] = useState("gkdl");
  //값 증가
  const handleSetCount = (value) => {
    setCount(count + value);
  }

  const handleChangeText = (e) => {
      setText(e.target.value);
  }

  useEffect(() => {
    console.log("업데이트 : ",count , text);
  },[count,text]);
  
  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText}></input>
      </section>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount}/>
      </section>
    </div>
  );
}

export default App;
