import React from 'react'

function Counter({value, setValue}) {
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={()=>setValue(prev=>prev + 1)}>Toggle</button>
    </div>
  )
}

export default Counter