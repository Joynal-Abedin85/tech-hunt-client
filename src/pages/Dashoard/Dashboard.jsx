import React from "react";
import { FaBook, FaHamburger, FaHome, FaList, FaPhone, FaShoppingCart, FaStar, FaUser, FaUsers, FaUtensils } from "react-icons/fa";
import { FaCalendar, FaWallet } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useadmin from "../../hook/useadmin";
// import useadmin from "../hook/useadmin";

const Dashboard = () => {
    const [isadmin] = useadmin()
  return (
    <div className="flex">
      <div className="bg-amber-400  text-black font-bold w-60 min-h-full fixed top-0 left-0 h-screen overflow-y-auto p-4">
        <ul className="menu  p-4 space-y-3 ">
          {
            isadmin ? <>
            <li>
            <NavLink to="/dashboard/adminhome">
              <FaHome></FaHome>
              Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/additems">
              <FaUtensils></FaUtensils>
              Add items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageitems">
              <FaList></FaList>
              manage items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/managebookings">
              <FaBook></FaBook>
              Manage bookings
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/alluser">
              <FaUsers></FaUsers>
              All users
            </NavLink>
          </li>
          
            </> : <>
            <li>
            <NavLink to="/dashboard/myprofile">
              <FaUser></FaUser>
               my profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myproduct">
              <FaShoppingCart></FaShoppingCart>
              My product
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/additems">
              <FaStar></FaStar>
              Add product
            </NavLink>
          </li>
          </>
          }

          <div className="divider divider-primary">or</div>

          <li>
            <NavLink to="/">
              <FaHome></FaHome>
               Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/home">
              <FaList></FaList>
              Menu
            </NavLink>
          </li>
          
          
        </ul>
      </div>
      <div className="flex-1  ml-64 ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
