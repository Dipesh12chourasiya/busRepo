import React from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function BookingForm({ searchState, selectedSeats }) {
  const navigate = useNavigate();

  // console.log(searchState.selectedSeats);
  // console.log(searchState);

  // final booking form 😀
  return (
    <div className="text-center">
      <h5 className="text-[1.3rem] mb-2 font-semibold">
        From: {searchState.from} - To: {searchState.to}
      </h5>
      <h5>Date: {searchState.date}</h5>
      <br />
      <h5 className="text-lg font-semibold">Please fill below details</h5>

      {selectedSeats.map((data) => (
        <div>
          <div className="my-3 font-medium"> Seat No: {data}</div>
          <div>
            <form className="flex flex-col items-center space-y-4 md:w-1/2 mx-auto">
              <label className="font-medium">Name:</label>
              <input
                className="rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:border-green-500 w-full md:w-[300px]"
                placeholder="Enter your name"
                type="text"
                required
              />
              <label className="font-medium">Age:</label>
              <input
                className="rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:border-green-500 w-full md:w-[300px]"
                placeholder="Enter your age"
                type="number"
                required
              />
              <button className="bg-blue-500 text-white w-[80px] p-2 rounded-md">Next</button>
            </form>
          </div>
        </div>
      ))}

      <p className="text-sm m-2">Please first click on next then click on Book button.</p>
              <button
                className="m-3 bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
                onClick={() => {
                  alert("Your ticket has been booked successfully");
                  navigate("/");
                }}
              >
                Book Now
              </button>
    </div>
  );
}
