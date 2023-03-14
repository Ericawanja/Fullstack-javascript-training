import React from 'react'


function Home() {
    const handlesum= ()=>{
        import ("../components/sum.js").then(module=>{
            alert(module.sum(2,2))
        })
    }
  return (
    <div>
        <button onClick={handlesum}> 2+ 2</button>
    </div>
  )
}

export default Home