import React from 'react'
import { Form } from 'react-router-dom'
import { locations } from '../utils';

const BusSearch = ({ searchState, setSearchState }) => {
    return (
      <div className='bg-white p-4 text-center rounded-lg shadow-md text-2xl'>
        <h2>Search for Buses</h2>
        <div className='flex flex-col items-center'>
          <Form.select 
            className="mb-3 w-300 p-2 border rounded-md"
            value={searchState.from}
            onChange={(e) => setSearchState((prevState) => ({
              ...prevState,
              from: e.target.value
            }))}
          >
            {locations.map((data) => (
              <option key={`${data}-source`} value={data}>
                {data}
              </option>
            ))}
          </Form.select>
        </div>
      </div>
    );
  }
  
  export default BusSearch;