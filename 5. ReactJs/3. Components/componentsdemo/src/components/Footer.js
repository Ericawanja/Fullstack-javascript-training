import React from 'react'

function Footer(props) {
    console.log(props);
  return (
    <div>This is a footer {props.name}</div>
  )
}

export default Footer