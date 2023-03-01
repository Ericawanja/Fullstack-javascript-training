import React, {useEffect, useState, useReducer} from 'react'

const ACTIONS = {
  add: 'increment',
  sub: 'decrement',
  inc: 'increment by a number'

}
function reducer(count, action){
  switch (action.type){
    case ACTIONS.add:
      return count + 1
    case ACTIONS.sub:
      return count -1
    case ACTIONS.inc:
      console.log(typeof action.payload, action)
      return count + action.payload  
  }

}
function Test() {
  
  const [count , dispatch]=useReducer(reducer, 0)
 const [input, setInput] = useState(3)
 
 const handleAdd = ()=>{
dispatch({type: ACTIONS.inc, payload: input })
 }
  return (
    <>
    <button onClick={()=> dispatch({type:ACTIONS.add})}>+</button>
    <button onClick={()=> dispatch({type:ACTIONS.sub})}>-</button>
    <button onClick={handleAdd}>Add</button>
    <input type="text" name='addValue' value={input} onChange={(e)=>setInput(+e.target.value)}/>
    <div><h1>{count}</h1></div>
    </>
  )
}

export default Test