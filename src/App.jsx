import Entry from '../Components/Entry'
import Header from '../Components/Header'
import React from 'react'
import './App.css'

function App() {
  return (
      <>
        <Header/>
        <main className='container'>
          <Entry/>
        </main>
      </>
  )
}

export default App
