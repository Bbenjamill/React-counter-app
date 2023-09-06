import React from 'react'

import "./counter.css"

const Display = ({count, setCount}) => {

  return (
    <div className='text-container'>
     <h1 className='counter-text'>
      {count}
     </h1>
    </div>
  )
}

export default Display