import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../auth/Authprovider";
import { FaThumbsUp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Upvotevtn from "../../components/Upvotevtn";

const Product = () => {
  const [product, setproduct] = useState([]);

  const { user } = useContext(Authcontext);

  // const [votes, setVotes] = useState(product.votes || 0);
  const isOwner = user?.email === product.owneremail;
  

 
  useEffect(() => {
    fetch("https://tech-hunt-server-theta.vercel.app/accept-product")
      .then((res) => res.json())
      .then((data) => setproduct(data));
  }, []);
  console.log(product);

  // Sort products by timestamp (latest first)
  const sortedProducts = [...product].sort((a, b) => b.timestamp - a.timestamp);
  return (
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {product.map((product) => (
        <div className="bg-white shadow-md rounded-lg p-4 ">
          {/* Product Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-md mb-4"
          />

          {/* Product Name */}
          <NavLink to={`/details/${product._id}`}><h3 className="text-lg text-purple-500 font-semibold mb-2">{product.name}</h3></NavLink>

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
        </div>
      ))}
    </div>
  );
};

export default Product;
