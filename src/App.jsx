import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import BusSearch from './components/BusSearch'

function App() {
  const [searchState , setSearchState]=useState({
    from:'',
    tp:'',
    date:''
  })
  
  return (
    <div>
     <Header />
     <BrowserRouter>
      <Routes>
        <Route path="/" 
        element={
          <BusSearch
             searchState={searchState}
             setSearchState={setSearchState}
          /> 
        }  
        
        />
        
      </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App
