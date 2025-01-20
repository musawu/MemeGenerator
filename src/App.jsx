import React, { useState } from 'react'
import './App.css'
import Meme from '../component/Meme'
import Header from'../component/Header'
// import Form from '../component/Form'

function App() {
  const [darkMode, setDarkMode] = useState(true) 

  function toggleDarkMode(){
    setDarkMode(prevDarkMode=>!prevDarkMode)
  }


  return (
    <>
   <Header  darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
   <Meme  darkMode={darkMode} />
    </>

  )
}

export default App