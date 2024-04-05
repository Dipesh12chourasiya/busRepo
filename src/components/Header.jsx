import React from "react";

const Header = () => {
  return (
    // adding Css by tailwind classes
    <div className="bg-blue-600 flex items-center justify-center p-[1rem]">
      <h1 className="font-semibold text-white text-lg">
        Bus Ticket Booking App
      </h1>
    </div>
  );
};

export default Header;
