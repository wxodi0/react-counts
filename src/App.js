import React , {useEffect, useRef, useState} from 'react';
import Viewer from './Components/Viewer';
import Controller from './Components/Controller';
import './App.css';
import Even from './Components/Even';

function App() {
  //선언
  const [count , setCount] = useState(0);
  const [text , setText] = useState("");

  const didMountRef = useRef(false);
  //값 증가
  const handleSetCount = (value) => {
    setCount(count + value);
  }

  const handleChangeText = (e) => {
      setText(e.target.value);
  }

  useEffect(() => {
    if(!didMountRef.current){
      didMountRef.current= true;
      return;
    }else{
      console.log("컴포넌트 업데이트");
    }
  });

  useEffect(() => {
    console.log("컴포넌트 마운트");
  },[]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("깜빡");
    },1000);
    return () => {
      console.log("클린업");
      clearInterval(intervalID);
    }
  })
  
  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText}></input>
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even/>}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount}/>
      </section>
    </div>
  );
}

export default App;
