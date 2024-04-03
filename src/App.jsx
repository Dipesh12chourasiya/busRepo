import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

function App() {
  
  return (
    <div>
     <Header />
     <BrowserRouter>
      <Routes>
        <Route path='/' element={Header}/>
      </Routes>

     </BrowserRouter>
    </div>
  )
}

export default App
