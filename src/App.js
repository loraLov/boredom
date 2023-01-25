
import image from "./bored.jpeg"
import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [advice, setAdvice] = useState('');

    const getAdvice = async() =>{
      const response = await fetch(`http://www.boredapi.com/api/activity/`);
      const data = await response.json();
      console.log(data.activity);
      setAdvice(data.activity);
    }
    useEffect(() => {
      getAdvice();
    },[])

  return (
    <div className="main">
     <div className="container">
        <h1>Fighting Boredom</h1>
        <button onClick={getAdvice}>Get a Tip</button>
        <div className="frame">
          <p>{advice}</p>
        </div>
     </div>
    <img className="pic" src={image} alt="boring"/>
      
    </div>
  );
}

export default App;
