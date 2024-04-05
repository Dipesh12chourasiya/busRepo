import React from "react";
import { useNavigate } from "react-router-dom";

// style for  BusListContainer = bg-white p-[1rem] rounded-md shadow-lg
// style for BusItem = bg-white p-[1rem] m-[0.5rem] rounded-md shadow-md

export default function BusList({ buses }) {
  const navigate = useNavigate();
  return (
    // BusListContainer
    <div className=" m-3  w-full bg-[#f0f0f0] p-[1rem] rounded-md shadow-lg">
      <h2 className="p-1 text-[24px] font-bold font-serif">Available Buses</h2>
      {buses.map((bus) => (
        <div
          key={bus.id}
          className="flex items-center justify-center flex-col w-full bg-white p-[1rem] m-[0.5rem] rounded-md"
        >
          <div className="bg-white p-[1rem] m-[0.5] rounded-md">
            <h3 className="bg-white p-[1rem] m-[0.5] rounded-md font-semibold text-[23px]">
              {bus.name}
            </h3>
            <p>
              <span>
                <strong>Sorce: </strong> {bus.source}
              </span>
            </p>
            <p className="bg-white p-[1rem] m-[0.5] rounded-md">
              <span>
                <strong>Destination: </strong> {bus.destination}
              </span>
            </p>
            <p className="bg-white p-[1rem] m-[0.5] rounded-md">
              <span>
                <strong>Departure Time: </strong> {bus.departureTime}
              </span>
            </p>
            <p className="bg-white p-[1rem] m-[0.5] rounded-md">
              <span>
                <strong>Arrival Time: </strong> {bus.arrivalTime}
              </span>
            </p>
            <p className="bg-white p-[1rem] m-[0.5] rounded-md">
              <span>
                <strong>Price: </strong> {bus.price}
              </span>
            </p>
            <p className="bg-white p-[1rem] m-[0.5] rounded-md">
              <span>
                <strong>Type: </strong> {bus.busType}
              </span>
            </p>
          </div>
          <div>
            <h5 className="font-semibold mr-2 p-2 mb-2">
              Available Seats:{"  "}
              <span className="bg-blue-600 text-white font-bold px-3 py-1 rounded-full text-sm">
                {bus.availableSeats.length}
              </span>
            </h5>
            {/* showing button first coz we r making it for mobile not for pc 😐 */}
            <button
              className="m-[0.5] bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 active:bg-green-400"
              onClick={() => navigate(`bus/${bus.id}`)}
            >
              Book Now
            </button>
          </div>
        </div>
      ))}
      <p className="bg-white p-[1rem] m-[0.5] rounded-md"></p>
    </div>
  );
}
