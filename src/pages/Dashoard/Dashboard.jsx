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
            <NavLink to="/dashboard/allusers">
              <FaUsers></FaUsers>
              All users
            </NavLink>
          </li>
          
            </> : <>
            <li>
            <NavLink to="/">
              <FaHome></FaHome>
               Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reserve">
              <FaCalendar></FaCalendar>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/payment">
              <FaWallet></FaWallet>
              Payment history
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>
              My cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaStar></FaStar>
              Add review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/paymenthistory">
              <FaList></FaList>
              payment history my 
            </NavLink>
          </li></>
          }

          <div className="divider divider-primary">or</div>

          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              user Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/home">
              <FaList></FaList>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/home">
              <FaShoppingCart></FaShoppingCart>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/home">
              <FaPhone></FaPhone>
              Contect
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
