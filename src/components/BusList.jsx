import React from 'react'
import { Buses } from '../utils'


export default function BusList() {
  return (
    <div className='w-full bg-[#f0f0f0] p-[1rem] rounded-md shadow-lg'>
        <h2>Available Buses</h2>
        {Buses.map((bus)=>(
            <div key={bus.id} className=' w-full bg-white p-[1rem] m-[0.5rem] rounded-md'>
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
            </div>
        ))}
       <p className='bg-white p-[1rem] m-[0.5] rounded-md'></p>
    </div>
  )
}
