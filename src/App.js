import React, { useState } from 'react';
import './index.css';

function App() {
  const [count, setCount]=useState(0);

  const IncreMent=()=>{
   
    setCount (parseInt(count) + 1);
  }

  const DecreMent=()=>{
    setCount(parseInt(count)-1);
    
  }
 const handleChange=(e)=>{
   setCount(e.target.value);
   
 }
  return (<>
    <h1 style={{textAlign:"center"}}>Machine Test</h1>
    <div className="App">
      
      <div className='form'>
        <button onClick={DecreMent} style={{width:"50px",height:"60px"}}>-</button>
        <input type={'number'} value={count} min={-10} max={10} 
        style={{textAlign:"center",width:"50px",height:"60px"}} 
        onChange={(e)=>handleChange(e)}/>
        <button onClick={IncreMent} style={{width:"50px",height:"60px"}}>+</button>
      </div>
      <div className='van'>Updated Value is:{count}</div>
    </div>
    </>
  );
}

export default App;