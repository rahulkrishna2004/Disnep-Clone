import React, { useState } from "react";
import logo from "./../assets/Images/Disnep-logo.png";
import { FaHome, FaPlus, FaHeart, FaTv, FaSearch } from "react-icons/fa";
import { PiFilmReelFill } from "react-icons/pi";
import NavItems from "./NavItems";
import { HiDotsVertical } from "react-icons/hi";

const Navbar = () => {
  const [openMobile, setOpenMobile] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const items = [
    { name: "Home", Icon: <FaHome /> },
    { name: "Search", Icon: <FaSearch /> },
    { name: "Watchlist", Icon: <FaPlus /> },
    { name: "Favourites", Icon: <FaHeart /> },
    { name: "Movies", Icon: <PiFilmReelFill /> },
    { name: "TV", Icon: <FaTv /> },
  ];

  return (
    <div className="w-full relative z-10">
      <div className="logo w-full flex justify-between items-center px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 h-12 md:h-16 lg:h-20">
        {/* Logo */}
        <img
          src={logo}
          alt="disneplogo"
          className=" h-full w-auto object-contain"
        />

        <div className="flex gap-5">
          <div className="flex md:hidden space-x-6">
            {items.slice(0, 3).map((item, index) => (
              <NavItems key={index} name={item.name} Icon={item.Icon} />
            ))}
          </div>

          <div className="md:flex md:space-x-6 hidden md:block ">
            {items.map((item, index) => (
              <NavItems key={index} name={item.name} Icon={item.Icon} />
            ))}
          </div>
          <div className="md:hidden relative">
            <HiDotsVertical
              className="text-xl cursor-pointer"
              onClick={() => setOpenMenu(!openMenu)}
            />
            {openMenu && (
              <div className="absolute top-10 right-0 bg-gray-900 text-white p-4 flex flex-col gap-3 rounded shadow-lg z-20">
                {items.slice(3).map((item, index) => (
                  <NavItems key={index} name={item.name} Icon={item.Icon} />
                ))}
              </div>
            )}
          </div>
        </div>



        {/* Mobile Menu Button */}
        <div className="flex space-x-5 items-center">
          <div className="theme md:h-8 md:w-16 h-6 w-12 bg-amber-50 rounded-full p-1 flex items-center">
            <div className="h-5 w-5 md:h-6 md:w-6 rounded-full bg-black" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
