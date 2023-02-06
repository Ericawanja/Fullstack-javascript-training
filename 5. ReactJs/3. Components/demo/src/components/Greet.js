import React from 'react'

function Greet(props) {
    console.log(props);
  return (
    <div>{props.greetings}</div>
  )
}

export default Greet