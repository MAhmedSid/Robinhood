import React from "react";
import logo from "./assets/logo.svg";

const Header = () => {
  return (
    <div className="header__wrapper items-center flex  justify-around h-16 text-white">
      {/* logo */}

      <div title="Robinhood" className="header__logo">
        <img className="h-10" src={logo} alt="logo" />
      </div>
      {/* Search */}
      <div className="header__search flex h-10 px-2 items-center">
        <div className="header__searchContainer">
          <input
            className="h-5 border bg-black pl-3 py-3 focus:outline-none border-[#31363A] rounded-md w-96"
            placeholder="Search"
            type="text"
          />
        </div>
      </div>

      {/* menuItems  */}
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

      <div className="app__body"></div>

      {/* search */}
      {/* menuitems */}
    </div>
  );
};

export default Header;
