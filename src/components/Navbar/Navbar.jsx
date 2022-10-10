import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [manu, setManu] = useState(true);
  const link = [
    { id: 1, link: " Home", path: "/home" },
    { id: 2, link: " Quix", path: "/quiz" },
    { id: 3, link: " Rechart", path: "/rechart" },
    { id: 4, link: " Blogs", path: "/blogs" },
  ];

  return (
    <div className="flex justify-between items-center w-full  bg-black text-gray-300 px-9 py-6">
      <div>
        <h2 className="italic font-semibold text-4xl hover:text-pink-600 duration-300 ">
          Quiz Zone
        </h2>
      </div>
      <ul className="capitalize md:flex hidden">
        {link.map(({ link, id, path }) => (
          <li className="list-none " key={id}>
            <NavLink
              to={path}
              style={({ isActive }) => ({
                color: isActive && "blue",
              })}
              className=" text-xl hover:text-pink-600 cursor-pointer duration-300 mx-4"
            >
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
      <div onClick={() => setManu(!manu)} className="md:hidden z-10">
        {manu ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>
      {manu || (
        <ul
          className="flex flex-col justify-center items-center absolute top-0 right-0 w-full h-screen
      bg-gradient-to-b from-black to-slate-900 md:hidden"
        >
          {link.map(({ link, id, path }) => (
            <li className="list-none mb-9" key={id}>
              <NavLink
                to={path}
                style={({ isActive }) => ({
                  color: isActive && "blue",
                })}
                className="font-semibold mt-7 text-3xl capitalize cursor-pointer
                text-gray-400 hover:text-pink-600 duration-300
                "
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
