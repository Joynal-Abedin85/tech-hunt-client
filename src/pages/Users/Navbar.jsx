// import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
// import { Authcontext } from "../auth/Authprovider";
import { FaShoppingCart } from "react-icons/fa";
// import usecart from "../hook/usecart";
import { useContext } from "react";
import { Authcontext } from "../auth/Authprovider";

const Navbar = () => {
  const { user, logout } = useContext(Authcontext);
//   const [cart] = usecart()

  const logouts = () => {
    logout().then(() => {});
  };

  const menu = (
    <>
      <NavLink to="/">HOME</NavLink>
      <NavLink to='/products'>PRODUCTS</NavLink>
      <NavLink to='/blog'>BLOGS</NavLink>
      {
        user && <> <NavLink to='/dashboard'>DASHBOARD</NavLink>
        <NavLink to='/about'>ABOUT</NavLink> </>

      }
      
      
    </>
  );
  return (
    <div className="navbar text-[#28afd4]  bg-base-100 fixed z-20 bg-opacity-35 backdrop-blur-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-4"
          >
            {menu}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">TECH HUNT</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1  gap-4">{menu}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>

<div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user.photoURL} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            {user.displayName}
          </a>
        </li>
        <NavLink to='/dashboard'><li><a>DASHBOARD</a></li></NavLink>
        <h3
              onClick={logouts}
              className="btn hover:bg-[#32abcc] hover:text-white border-transparent hover:bg-transparent border-[#00c6ff] text-[#00c6ff] hover:border-2"
            >
              sign out
            </h3>
      </ul>
    </div>

          {/* prev  */}
            
          </>
        ) : (
          <>
            <NavLink
              to="login"
              className="btn bg-amber-400 text-black border-transparent hover:bg-transparent hover:border-amber-500 hover:text-amber-500 hover:border-2"
            >
              sign in
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
