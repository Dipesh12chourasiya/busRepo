import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import BusSearch from './components/BusSearch';
import 'bootstrap/dist/css/bootstrap.min.css'
import { locations } from './utils';

function App() {
  const [searchState, setSearchState] = useState({
    from: locations[0],
    to: locations[2],
    date: ''
  })

  return (
    // yaha tak video complete ho gya hai => 34:43
     <div>
       <Header />
       <BrowserRouter>
          <Routes>
            <Route 
              path="/"
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
  )
}

export default App
