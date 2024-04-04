import React from 'react'
import { Buses } from '../utils'
import { useNavigate } from 'react-router-dom'


export default function BusList() {
    const navigate =useNavigate()
  return (
    <div className=' m-3  w-full bg-[#f0f0f0] p-[1rem] rounded-md shadow-lg'>
        <h2 className='p-1'>Available Buses</h2>
        {Buses.map((bus)=>(
            <div key={bus.id} className='flex items-center justify-between w-full bg-white p-[1rem] m-[0.5rem] rounded-md'>
                <div className='bg-white p-[1rem] m-[0.5] rounded-md'>
                    <h3 className='bg-white p-[1rem] m-[0.5] rounded-md font-semibold text-[23px]'>{bus.name}</h3>
                    <p>
                        <span><strong>Sorce: </strong> {bus.source}</span>
                    </p>
                    <p className='bg-white p-[1rem] m-[0.5] rounded-md'>
                        <span><strong>Destination: </strong> {bus.destination}</span>
                    </p>
                    <p className='bg-white p-[1rem] m-[0.5] rounded-md'>
                        <span><strong>Departure Time: </strong> {bus.departureTime}</span>
                    </p>
                    <p className='bg-white p-[1rem] m-[0.5] rounded-md'>
                        <span><strong>Arrival Time: </strong> {bus.arrivalTime}</span>
                    </p>
                    <p className='bg-white p-[1rem] m-[0.5] rounded-md'>
                        <span><strong>Price: </strong> {bus.source}</span>
                    </p>
                    <p className='bg-white p-[1rem] m-[0.5] rounded-md'>
                        <span><strong>Type: </strong> {bus.busType}</span>
                    </p>
                </div>
                <div>
                    <button className='m-[0.5] bg-green-800 text-white px-4 py-2 rounded' onClick={()=>navigate(`bus/${bus.id}`)}>Book Now</button>
                    <h5 className="text-gray-600 mr-2 p-2">Available Seats:  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">{bus.availableSeats.length}</span></h5>
                   
                </div> 

            </div>
        ))}
       <p className='bg-white p-[1rem] m-[0.5] rounded-md'></p>
    </div>
  )
}
