import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="grid grid-cols-12 w-ful border-b border-gray-400/20 py-3 px-5  max-w-7xl mx-auto">
      <div className="logo col-span-2 flexLeft">
        <Link to={"/"}>Logo</Link>
      </div>
      <div className="navContent col-span-7 flexCenter gap-5">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-500/20 px-5 py-1 rounded-2xl border-b-2 border-amber-400/40 font-semibold text-[18px]"
              : "text-gray-500 font-semibold text-[18px]"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-500/20 px-5 py-1 rounded-2xl border-b-2 border-amber-400/40 font-semibold text-[18px]"
              : "text-gray-500 font-semibold text-[18px]"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-500/20 px-5 py-1 rounded-2xl border-b-2 border-amber-400/40 font-semibold text-[18px]"
              : "text-gray-500 font-semibold text-[18px]"
          }
        >
          About Me
        </NavLink>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-500/20 px-5 py-1 rounded-2xl border-b-2 border-amber-400/40 font-semibold text-[18px]"
              : "text-gray-500 font-semibold text-[18px]"
          }
        >
          Contact
        </NavLink>
      </div>
      <div className="navButton col-span-3 flexRight gap-5">
        <div className="flex items-center justify-center gap-5">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "bg-gray-500/20 px-5 py-1 rounded-2xl border-b-2 border-amber-400/40 font-semibold text-[18px]"
                : "text-gray-500 font-semibold text-[18px]"
            }
          >
            Login
          </NavLink>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "bg-gray-500/20 px-5 py-1 rounded-2xl border-b-2 border-amber-400/40 font-semibold text-[18px]"
                : "text-gray-500 font-semibold text-[18px]"
            }
          >
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
