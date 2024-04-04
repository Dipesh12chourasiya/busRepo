import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Buses } from "../utils";

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
        (selectedSeats) => selectedSeats !== seat
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
            <div
              className="m-1 p-2 bg-white-500 rounded-md shadow-md flex justify-center items-center text-center text-white-500"
              style={{
                width: seatWidth,
                background: isSeatSelected(`${key}${seat}`)
                  ? "blue"
                  : isSeatAvailable(`${key}${seat}`)
                  ? "aqua"
                  : "grey",
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
        <div
          className="m-1 p-2 bg-white-500 rounded-md shadow-md flex justify-center items-center text-center text-white-500"
          style={{
            width: seatWidth,
            background: isSeatAvailable(`${key}${seats}`) ? "aqua" : "grey",
            cursor: isSeatAvailable(`${key}${seats}`) ? "pointer" : "",
          }}
          onClick={() => selectSeat(`${key}${seats}`)}
        >
          {key} {seats}
        </div>
      )
    );

  return (
    <div className="w-full bg-[#f0f0f0] p-[1rem] rounded-md shadow-lg">
      <h2 className="text-2xl font-bold mb-2">{selectedBus.name}</h2>
      <h4 className="text-xl font-semibold mb-2">Tickets</h4>
      <h5 className="text-lg mb-4">{selectedBus.busType}</h5>

      <div className="flex">
        <div className="flex items-center mb-2">
          <h6 className="text-sm mr-2">Available -</h6>
          <div
            className="m-1 p-2 bg-#00FFFF rounded-md shadow-md flex justify-center items-center text-center text-white-600"
            style={{ width: seatWidth }}
          >
            {1}
          </div>
        </div>
        <div className="flex items-center mb-2">
          <h6 className="text-sm mr-2">Booked -</h6>
          <div
            className="m-1 p-2 bg-red-500 rounded-md shadow-md flex justify-center items-center text-center text-white-500"
            style={{ width: seatWidth }}
          >
            {1}
          </div>
        </div>
        <div className="flex items-center mb-2">
          <h6 className="text-sm mr-2">Selected -</h6>
          <div
            className="m-1 p-2 bg-green-500 rounded-md shadow-md flex justify-center items-center text-center text-white-500"
            style={{ width: seatWidth, background: "#318beb" }}
          >
            {1}
          </div>
        </div>
      </div>
      <ul className="flex flex-wrap">
        {isSleeper ? (
          <>
            <div className="flex items-center ">
              <h6 className="p-3">Upper</h6>
              <div className="flex flex-wrap">
                {generateSeats(selectedBus.seatLayout.upper.first, "U")}
              </div>
              <div className="flex ">
                {generateSeats(selectedBus.seatLayout.upper.second, "U")}
              </div>
            </div>
            <br></br>
            <br></br>

            <div className="flex items-center ">
              <h6 className="p-3">Lower</h6>
              <div className="flex flex-wrap">
                {generateSeats(selectedBus.seatLayout.lower.first, "L")}
              </div>
              <div className="flex ">
                {generateSeats(selectedBus.seatLayout.lower.second, "L")}
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </ul>
      <div className="flex justify-center">
        {selectedSeats?.length > 0 && (
          <h4 className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md">
            Selected Seats:
            {selectedSeats.map((seat, index) => (
              <span key={index} className="mx-1">
                {seat}
              </span>
            ))}
          </h4>
        )}
      </div>
    </div>
  );
}
