import React from 'react';
import "./counter.css";
import { useState } from 'react';
import Display from './Display';
import Buttons from './Buttons';

const Arrowbuttons = () => {
  let [count, setCount] = useState(0)
  function increment(){
    count++
    setCount(count)
  }

  function decrement (){
    if(count<1){
      setCount(0)
    }
    else{
      count--
     setCount(count)
    }
  }

  function reset(){
    setCount(0)
  }

  function edit(){
    const input = prompt("What do you want the count to be");
  if (!isNaN(input)) {
    const newCount = parseFloat(input);
    setCount(newCount);
  } else {

    alert("Not a number! Please enter a valid number.");
  }
  }

  return (
  <>
    <Buttons gireset = {reset} edit={edit}/>
    <Display count= {count} setCount = {setCount}/>
    <div className='movement-btns'>
      
     <button className='up-btn' onClick={increment}>&uarr;</button>
      <button className='down-btn' onClick={decrement}>&darr;</button>
    </div>
    
    </>
  )
}

export default Arrowbuttons