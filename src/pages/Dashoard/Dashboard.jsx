import React, { useContext } from "react";
import {
  FaBook,
  FaHamburger,
  FaHome,
  FaList,
  FaPhone,
  FaShoppingCart,
  FaStar,
  FaUser,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { FaCalendar, FaWallet } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useadmin from "../../hook/useadmin";
import { Authcontext } from "../auth/Authprovider";
import usemodarator from "../../hook/usemodarator";
// import useadmin from "../hook/useadmin";

const Dashboard = () => {
  const [isadmin] = useadmin();
  const [ismodarator] = usemodarator()
  const {user} = useContext(Authcontext)
  
  return (
    <div className="flex">
     
      <div className="bg-[#6f10c2] text-[#b172e6] font-bold w-60 min-h-full fixed top-0 left-0 h-screen overflow-y-auto p-4">
        <ul className="menu  p-4 space-y-3 ">
          

          {isadmin ? (
            <>
            <li>
                <NavLink to="/dashboard/myprofile">
                  <FaUser></FaUser>
                  my profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/statistic">
                  <FaList></FaList>
                  statistics
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/coopon">
                  <FaBook></FaBook>
                  Manage coopon
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/alluser">
                  <FaUsers></FaUsers>
                  All users
                </NavLink>
              </li>
            </>
          ) : ismodarator ? (
            <>
            <li>
                <NavLink to="/dashboard/myprofile">
                  <FaUser></FaUser>
                  my profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaList></FaList>
                  product review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reported">
                  <FaBook></FaBook>
                  reported contents
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
          )}

          <div className="divider divider-primary">or</div>

          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
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
