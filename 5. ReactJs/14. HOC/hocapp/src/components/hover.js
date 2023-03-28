import React from 'react'

function Hover({value, setValue}) {
  return (
    <div>
      <h1 onMouseOver={()=>setValue(prev=>prev + 1)}>You hovered {value} times</h1>
    </div>
  )
}

export default Hover