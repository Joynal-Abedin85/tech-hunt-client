

import React, { useContext } from "react";
import { Authcontext } from "../auth/Authprovider";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Myprofile = () => {
  const {user} = useContext(Authcontext)
  const userProfile = {
    name: user?.name || "User Name",
    email: user?.email || "user@example.com",
    displayName: user?.displayName || "https://via.placeholder.com/150",
    isSubscribed: user?.isSubscribed || false,
    subscriptionAmount: "$19.99/month"}
    console.log(userProfile)

  return (

<div className="container mx-auto p-6 flex justify-center items-center">
  {/* Profile Header */}
  <div className="mb-8 bg-[#f7f7f7] text-[#2d3748] p-12 rounded-lg shadow-2xl w-full max-w-3xl">
    <div className="flex items-center space-x-8">
      {/* Full-size image with same color design */}
      <div className="w-full h-64 bg-[#46007f] rounded-lg overflow-hidden flex items-center justify-center">
        <img
          src={user.photoURL} // Replace with the actual image source
          alt="Samantha Jones"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <div className="mt-8">
      <h2 className="text-4xl font-bold text-[#46007f]">{user.displayName}</h2>
      <p className="text-lg text-gray-600">New York, United States</p>
      <p className="text-lg text-gray-600">Web Producer - Web Specialist</p>
      <p className="text-lg text-gray-600">Columbia University - New York</p>
      <div className="flex space-x-4 mt-4">
        <p className="text-lg text-gray-600">65 Friends</p>
        <p className="text-lg text-gray-600">43 Photos</p>
        <p className="text-lg text-gray-600">21 Comments</p>
      </div>
      <button className="mt-4 bg-[#46007f] text-white px-8 py-3 rounded-full hover:bg-[#5b0a98] transition duration-300 text-lg">
        Connect
      </button>
    </div>
  </div>
</div>


  );
};

export default Myprofile;
