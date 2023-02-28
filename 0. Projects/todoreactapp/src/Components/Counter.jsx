import React, { useReducer } from 'react'

function reducer(count, action){
  console.log( action)
  switch (action.type){
    case 'increment':
      console.log('decre')
      return count + 1;
    case 'decrement':
      console.log('incre')
      return count - 1  
    case 'incrementBy5':
      return count + action.payload  
  }

}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0)

  const handleIncrement = ()=>{
    dispatch({type:'increment'})

  }
  const handleDecrement = ()=>{
    dispatch({type:'decrement'})
    
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={()=> dispatch({type:"incrementBy5", payload: 5})}> + 5</button>
    </div>
  )
}

export default Counter