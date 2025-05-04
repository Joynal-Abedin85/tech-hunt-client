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
    <div className="bg-bg px-5 py-24   pt-20 text-text">
    {/* Sort Button */}
    <div className="mb-6 flex justify-end">
      <button
        onClick={handleSortToggle}
        className="px-4 py-2 bg-card text-text rounded-lg hover:bg-hover border border-border transition"
      >
        Sort by Votes ({sortOrder === "asc" ? "Ascending" : "Descending"})
      </button>
    </div>
  
    {/* Product Grid */}
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sortedProducts.map((product) => (
        <div
          key={product._id}
          className="bg-card shadow rounded-lg p-4 shadow-primary border-border flex flex-col justify-between h-full"
        >
          {/* Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
  
          {/* Name */}
          <h3 className="text-lg font-semibold text-hover mb-2">{product.name}</h3>
  
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-2">
            {product.tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-hover/10 text-hover text-xs font-medium px-2.5 py-0.5 rounded border border-primary/30"
              >
                #{tag}
              </span>
            ))}
          </div>
  
          {/* Owner Info */}
          {isOwner && (
            <p className="text-sm text-secondary mb-2">This is your product.</p>
          )}
  
          {/* Actions Row */}
          <div className="flex  justify-between items-center mt-auto pt-4">
            <Upvotevtn
              product={product}
              className="bg-primary text-text px-4 py-1 rounded hover:bg-hover hover:text-bg transition"
            />
            <NavLink to={`/details/${product._id}`}>
              <button className="bg-hover font-semibold text-bg px-4 py-1 rounded hover:bg-card hover:text-hover border border-hover transition">
                Details
              </button>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  </div>
  

  );
};

export default Product;
