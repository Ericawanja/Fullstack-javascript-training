import React, { createContext, useState } from 'react'
import './App.css'
import About from './Components/About'
import Home from './Components/Home'
export const ThemeContext = createContext(null)

function App() {
  const [theme,setTheme] = useState('dark')
  return (
    <div className='App'>
      <ThemeContext.Provider value={{theme, setTheme}}>
       <Home/>
       <About/>
      </ThemeContext.Provider>
      
    </div>
  )
}

export default App