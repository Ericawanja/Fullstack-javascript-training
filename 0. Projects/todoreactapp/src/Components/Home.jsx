import React, {Fragment, useState} from 'react'

function Home() {
    let [user, setUser] = useState('lecturer')
    let [show, setShow] = useState(false)
  return (
    
    <>
    
    {show && <h1>Home</h1>}
    {user === 'academicOfficer' ? <h2>See all the departments</h2>:
    user === 'HOD' ? <h2>See their department only</h2>:
    <h2>See their class details only</h2>

    }
    </>
  )
}

export default Home