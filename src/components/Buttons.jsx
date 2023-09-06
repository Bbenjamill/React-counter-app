import React from 'react';

import "./counter.css"

const Buttons = ({reset, edit}) => {

  
  return (
    <div className='buttons-container'>
     <button className='edit-button' onClick={edit}>Edit</button>
    <button className='reset-button' onClick={reset}>Reset</button>
    </div>
  )
}

export default Buttons