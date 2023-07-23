import React from "react";
import { Link } from "react-router-dom";
const Header = () => {

  return (
    <header className="md:flex justify-center items-center md:justify-between bg-teal-500 p-4 text-white">
      <h1 className="text-lg items-center flex justify-center md:text-3xl font-bold">
        Sustainable Inland Fisheries Initiative
      </h1>
      <ul className="flex justify-center items-center flex-col md:flex-row md:flex gap-2 text-xl">
        <li className="hover:bg-white hover:text-black p-1 transition transition-ease rounded">
          <Link to="/">HOME</Link>
        </li>
        <li className="hover:bg-white hover:text-black p-1 transition transition-ease rounded">
          <Link to="/challenges">CHALLENGES</Link>
        </li>
        <li className="hover:bg-white hover:text-black p-1 transition transition-ease rounded">
          <Link>TEAM</Link>
        </li>
        <li className="hover:bg-white hover:text-black p-1 transition transition-ease rounded">
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
