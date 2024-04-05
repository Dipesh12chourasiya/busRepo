import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { locations, Buses } from "../utils/index";
import BusList from "./BusList";

export default function BusSearch({ searchState, setSearchState }) {
  // state for finding bus by search input
  const [filteredBus, setFilteredBus] = useState(null);

  const handleSearch = () => {
    setFilteredBus(
      Buses.filter(
        (data) =>
          data.source === searchState.from &&
          data.destination === searchState.to &&
          data.availableDates.includes(searchState.date)
      )
    );
  };

  return (
    // adding tailwind classes directly for styling
    <div className="bg-white p-[1rem] rounded-md shadow-md text-center">
      <h2 className="font-semibold text-[24px] font-serif">Search for Buses</h2>
      <div className="flex flex-col items-center">
        <div className="w-[300px] mt-4">
          <label className="text-lg font-semibold mt-3">From:</label>
          {/* it select the search item  from */}
          <Form.Select
            className="mb-3 w-[300px]"
            value={setSearchState.from}
            onChange={(e) =>
              setSearchState((prevState) => ({
                ...prevState,
                from: e.target.value,
              }))
            }
          >
            {/* locations is an array from index.js file for cities ✌️*/}
            {locations.map((data) => (
              <option key={`${data}-source`} value={data}>
                {data}
              </option>
            ))}
          </Form.Select>

          {/* for destination select */}
          <label className="text-lg font-semibold mt-3">To:</label>
          <Form.Select
            className="mb-3 w-[300px]"
            value={setSearchState.to}
            onChange={(e) =>
              setSearchState((prevState) => ({
                ...prevState,
                to: e.target.value,
              }))
            }
          >
            {locations.map((data) => (
              <option key={`${data}-destination`} value={data}>
                {data}
              </option>
            ))}
          </Form.Select>

          {/* Input for date 😶‍🌫️*/}
          <input
            className="mb-3 w-[300px] border-[1px] border-zinc-400"
            type="date"
            value={searchState.date}
            onChange={(e) =>
              setSearchState((prevState) => ({
                ...prevState,
                date: e.target.value,
              }))
            }
          />
        </div>
        <button
          className=" w-20 bg-blue-700 text-white mb-3 rounded-md hover:bg-blue-900 active:bg-blue-950 p-2"
          onClick={handleSearch}
        >
          Search
        </button>
        {/* we have to add date of 2024 year in our Buses data 😭  */}
        {filteredBus && filteredBus?.length > 0 && <BusList buses={filteredBus} />}
        {filteredBus && filteredBus.length < 1 && <h3>No Buses Found</h3>}
      </div>
    </div>
  );
}
