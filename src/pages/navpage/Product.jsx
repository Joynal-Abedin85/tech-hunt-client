import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../auth/Authprovider";
import { FaThumbsUp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Upvotevtn from "../../components/Upvotevtn";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc"); // Default is descending
  const { user } = useContext(Authcontext);

  const isOwner = user?.email === product.owneremail;

  useEffect(() => {
    fetch("https://tech-hunt-server-theta.vercel.app/accept-product")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  // Sort products by votes based on the sortOrder
  const sortedProducts = [...product].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.votes - b.votes; // Sort in ascending order
    }
    return b.votes - a.votes; // Sort in descending order
  });

  const handleSortToggle = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  return (
    <div className="bg-[#c994f5] px-5 py-24 relative -top-20">
      {/* Sorting Button */}
      <button
        onClick={handleSortToggle}
        className="mb-4 px-4 py-2 bg-[#8b46c4] text-white rounded-lg hover:bg-[#7634ac]"
      >
        Sort by Votes ({sortOrder === "asc" ? "Ascending" : "Descending"})
      </button>

      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProducts.map((product) => (
          <div key={product._id} className="bg-white shadow-md rounded-lg p-4">
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />

            {/* Product Name */}
            <NavLink to={`/details/${product._id}`}>
              <h3 className="text-lg text-purple-500 font-semibold mb-2">
                {product.name}
              </h3>
            </NavLink>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {product.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Upvote Button */}
            <Upvotevtn product={product}></Upvotevtn>

            {/* Owner Info */}
            {isOwner && (
              <p className="text-sm text-gray-500 mt-2">This is your product.</p>
            )}

            <NavLink to={`/details/${product._id}`}><h3 className="btn bg-[#e84cf7] hover:text-[#e84cf7] hover:bg-white   hover:border-[#e84cf7] border-transparent m text-[#000000] hover:border-2">details</h3></NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
