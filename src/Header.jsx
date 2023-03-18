import React from "react";


import logo from "./assets/logo.svg";


import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <div className="header__wrapper items-center flex  justify-evenly h-16 text-white">
      <div title="Robinhood" className="header__logo">
        <img className="h-10" src={logo} alt="logo" />
      </div>

      <div className="header__search flex h-10 px-2 items-center border border-[#31363A] rounded-md">
        <div className="header__searchContainer">
          <SearchIcon style={{ cursor: "pointer" }} />
          <input
            className="h-5  bg-black pl-3 py-3 focus:outline-none  w-96"
            placeholder="Search"
            type="text"
          />
        </div>
      </div>

      <div className="header__menuItems font-bold text-white justify flex gap-10">
        <a className=" hover:text-[#5AC53B]" href="#">
          Free Stocks
        </a>
        <a className=" hover:text-[#5AC53B]" href="#">
          Portfolio
        </a>
        <a className=" hover:text-[#5AC53B]" href="#">
          Cash
        </a>
        <a className=" hover:text-[#5AC53B] " href="#">
          Messages
        </a>
        <a className=" hover:text-[#5AC53B]" href="#">
          Account
        </a>
      </div>
    </div>
  );
};

export default Header;
