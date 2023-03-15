import React, { useEffect } from 'react'

function Counter() {
    useEffect(()=>{
        console.log("the counter rerendered")
    })
  return (
    <div>Counter</div>
  )
}

export default React.memo(Counter)

// export default Counter