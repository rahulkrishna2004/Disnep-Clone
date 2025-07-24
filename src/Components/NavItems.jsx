import React from "react";

const NavItems = ({ name, Icon }) => {
  return (
    <div className="text-white w-full flex items-center gap-1.5 hover:border-b-2 hover:ring-offset-gray-600">
      <h1 className="-sm md:text-lg xl:text-xl">{Icon}</h1>

      <h1 className="hidden lg:block text-sm md:text-lg xl:text-xl">{name}</h1>
    </div>
  );
};

export default NavItems;
