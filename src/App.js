import React, { useState } from 'react';
import './index.css';

function App() {
  const [count, setCount]=useState(0);

  const IncreMent=()=>{
    if(count < 10){
     setCount (count + 1);
   }else{
     alert('max value is limited to 10');
   }
 }

 const DecreMent=()=>{
  if(count > -10){
  setCount(count-1);
  }else{
    alert('min value is limited to -10');
  }
}
 const handleChange=(e)=>{
   setCount(e.target.value);
   
 }
  return (<>
    <h1 style={{textAlign:"center"}}>Machine Test</h1>
    <div className="App">
      
      <div className='form'>

        <button onClick={DecreMent} style={{width:"50px",height:"60px",fontSize:"50px"}}>-</button>
        <input type={'number'} value={count} 
        style={{textAlign:"center",width:"85px",height:"54px",fontSize:"50px"}}
        min={-10} max={10} 
        onChange={(e)=>handleChange(e)}/>
        <button onClick={IncreMent} style={{width:"50px",height:"60px",fontSize:"50px"}}>+</button>
      </div>
      <div className='van'>Updated Value is:{count}</div>
    </div>
    </>
  );
}

export default App;
