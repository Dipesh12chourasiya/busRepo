import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Buses } from "../utils/index";

// style for container = bg-[#f0f0f0] p-[1rem] rounded-md shadow-md
// style for ticketItemCon = p-[0.5rem]
// style for ticketItem = for li ->  list-style-none m-[0.5rem] bg-white rounded-md shadow-md flex justify-space-between items-center text-center

export default function BusLayout({ selectedSeats, setSelectedSeats }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedBus = Buses.find((data) => data.id === parseInt(id));
  const isSleeper = selectedBus.busType === "Sleeper";
  const seatWidth = isSleeper ? "80px" : "25px";

  const isSeatAvailable = (seat) => selectedBus.availableSeats.includes(seat);

  const selectSeat = (seat) => {
    if (selectedSeats?.includes(seat)) {
      const seats = selectedSeats.filter(
        (selectedSeat) => selectedSeat !== seat
      );
      setSelectedSeats(seats);
      return;
    }
    setSelectedSeats((prevState) => [...prevState, seat]);
  };

  const isSeatSelected = (seat) => selectedSeats.includes(seat);

  const generateSeats = (array, key = "") =>
    array.map((seats) =>
      Array.isArray(seats) ? (
        <div className="flex">
          {seats.map((seat) => (
            // TicketItem
            <div
              className="m-1 p-2 bg-white-500 rounded-md cursor-pointer shadow-md flex justify-center items-center text-center text-white-500"
              style={{
                width: seatWidth,
                background: isSeatSelected(`${key}${seat}`)
                  ? "#3399ff"
                  : isSeatAvailable(`${key}${seat}`)
                  ? "white"
                  : "#d9d9d9",
                cursor: isSeatAvailable(`${key}${seat}`) ? "pointer" : "",
              }}
              key={seat}
              onClick={() => selectSeat(`${key}${seat}`)}
            >
              {key}
              {seat}
            </div>
          ))}
        </div>
      ) : (
        // TicketItem
        <div
          className="m-1 p-2 bg-white-500 rounded-md shadow-md flex justify-center items-center text-center text-white-500"
          style={{
            width: seatWidth,
            background: isSeatSelected(`${key}${seats}`)
              ? "#3399ff"
              : isSeatAvailable(`${key}${seats}`)
              ? "white"
              : "#d9d9d9",
            cursor: isSeatAvailable(`${key}${seats}`) ? "pointer" : "",
          }}
          onClick={() => selectSeat(`${key}${seats}`)}
        >
          {key} {seats}
        </div>
      )
    );

  return (
    // container
    // <div className="w-full bg-[#f0f0f0] p-[1rem] rounded-md shadow-lg">
    <div className="bg-white p-[1rem] rounded-md shadow-lg">
      <h2 className="text-2xl font-bold mb-2">{selectedBus.name}</h2>
      <h5 className="text-lg mb-4">
        Bus Type: <span className="font-semibold">{selectedBus.busType}</span>
      </h5>
      <h4 className="text-xl font-semibold mb-2">Tickets</h4>

      <div className="flex flex-col">
        <div className="flex items-center mb-2">
          <h6 className="text-sm">Available -</h6>
          {/* tickettem */}
          <div
            className="m-1 p-2 bg-#00FFFF rounded-md shadow-md flex justify-center items-center text-center bg-slate-200"
            style={{ width: seatWidth }}
          >
            {Buses.length}
          </div>
        </div>
        <div className="flex items-center mb-2">
          <h6 className="text-sm mr-2">Booked -</h6>
          <div
            className="m-1 p-2 text-white bg-green-500 rounded-md shadow-md flex justify-center items-center text-center text-white-500"
            style={{ width: seatWidth }}
          >
            {0}
          </div>
        </div>
        <div className="flex items-center mb-2">
          <h6 className="text-sm mr-2">Selected -</h6>
          <div
            className="p-2 text-white rounded-md shadow-md flex justify-center items-center text-center"
            style={{ width: seatWidth, background: "#318beb" }}
          >
            {selectedSeats.length}
          </div>
        </div>
      </div>

      <ul className="flex flex-wrap">
        {isSleeper ? (
          <>
            {/* TicketContainer */}
            <div className="flex flex-col items-center bg-gray-100 p-[1rem] rounded-md shadow-md">
              <h6 className="p-3 font-bold">Upper</h6>
              <div className="w-[300px]">
                <div className="">
                  {generateSeats(selectedBus.seatLayout.upper.first, "U")}
                </div>
                <div className="flex">
                  {generateSeats(selectedBus.seatLayout.upper.second, "U")}
                </div>
              </div>
            </div>
            <br></br>
            <br></br>

            <div className="flex flex-col items-center bg-gray-100 p-[1rem] rounded-md shadow-md">
              <h6 className="p-3 font-bold">Lower</h6>
              <div className="w-[300px]">
                <div className="">
                  {generateSeats(selectedBus.seatLayout.lower.first, "L")}
                </div>
                <div className="flex ">
                  {generateSeats(selectedBus.seatLayout.lower.second, "L")}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center">
            <div>Seater</div>
            <div>
              {generateSeats(selectedBus.seatLayout.first)}
              <div className="mt-4">
                {generateSeats(selectedBus.seatLayout.second)}
              </div>
            </div>
          </div>
        )}
      </ul>

      <div className="flex justify-center mt-4">
        {selectedSeats?.length > 0 && (
          <h4 className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md">
            Selected Seats - {selectedSeats.join(" ,")}
          </h4>
        )}
      </div>
      <div className="flex items-center justify-center mt-4">
        <button
          className="text-white py-2 w-60 rounded-md  bg-gradient-to-tr from-green-400 to-green-700 border hover:from-green-500 hover:to-green-600 hover:border-green-700 active:bg-gradient-to-bl active:from-green-300 active:to-green-600 duration-200"
          onClick={() => navigate("/bus/book")}
          disabled={!(selectedSeats && selectedSeats.length > 0)}
        >
          Book Now
        </button>
      </div>
      <div className="flex justify-center items-center mt-4">
        <p className="text-sm">Privacy Notice Interest-Based Ads</p>
      </div>
    </div>
    
  );
}
