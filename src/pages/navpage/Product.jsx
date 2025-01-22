import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../auth/Authprovider";
import { FaThumbsUp } from "react-icons/fa";

const Product = () => {
  const [product, setproduct] = useState([]);

  const { user } = useContext(Authcontext);

  const [votes, setVotes] = useState(product.votes || 0);
  const isOwner = user?.email === product.owneremail;

  const handleUpvote = () => {
    if (!isOwner && user) {
      setVotes(votes + 1);
      // Add logic to update votes in the backend
    }
  };

  useEffect(() => {
    fetch("http://localhost:5000/tech")
      .then((res) => res.json())
      .then((data) => setproduct(data));
  }, []);
  console.log(product);

  // Sort products by timestamp (latest first)
  const sortedProducts = [...product].sort((a, b) => b.timestamp - a.timestamp);
  return (
    //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //       {sortedProducts.map((product) => (
    //         <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
    //           {/* Product Image */}
    //           <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />

    //           {/* Card Content */}
    //           <div className="p-4">
    //             {/* Product Name */}
    //             <h3 className="text-xl font-semibold mb-2">{product.name}</h3>

    //             {/* Tags */}
    //             {/* <div className="flex flex-wrap gap-2 mb-4">
    //               {product.tags.map((tag, index) => (
    //                 <span
    //                   key={index}
    //                   className="bg-blue-100 text-blue-600 text-sm font-medium px-2 py-1 rounded"
    //                 >
    //                   #{tag}
    //                 </span>
    //               ))}
    //             </div>
    //  */}
    //             {/* Upvote Button */}
    //             {user ? (
    //               <button
    //                 onClick={() => handleUpvote(product.id)}
    //                 disabled={user.email === product.ownerEmail}
    //                 className={`flex items-center gap-2 w-full justify-center py-2 px-4 text-white rounded ${
    //                   user.email === product.ownerEmail
    //                     ? "bg-gray-400 cursor-not-allowed"
    //                     : "bg-blue-600 hover:bg-blue-700"
    //                 }`}
    //               >
    //                 <FaThumbsUp />
    //                 {product.votes} Votes
    //               </button>
    //             ) : (
    //               <p className="text-gray-500 text-sm">Login to upvote this product.</p>
    //             )}
    //           </div>
    //         </div>
    //       ))}
    //     </div>
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
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>

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
          <button
            onClick={handleUpvote}
            disabled={isOwner || !user}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded ${
              isOwner || !user
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            <FaThumbsUp /> {votes} Votes
          </button>

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
