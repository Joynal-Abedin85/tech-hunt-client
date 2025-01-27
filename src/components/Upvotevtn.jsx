import React, { useState, useContext, useEffect } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Authcontext } from "../pages/auth/Authprovider";

const Upvotevtn = ({product}) => {
  const { user } = useContext(Authcontext);
  
  const navigate = useNavigate();
  const [votes, setVotes] = useState(product.votes);
  const [hasVoted, setHasVoted] = useState(false);

  const isOwner = user?.email === product.owneremail;
    console.log(product._id);

  const handleUpvote = async () => {
    
    if (!product?._id) {
        console.error("Product ID is undefined");
        return;
      }
    if (!user) {
      // Redirect to login if user is not logged in
      navigate("/login");
      return;
    }

    if (hasVoted) {
      alert("You have already voted on this product");
      return;
    }

    try {
      const response = await axios.post(
        `https://tech-hunt-server-theta.vercel.app/tech/${product._id}/upvote`,
        { userId: user.uid } // Send the user ID
      );

      if (response.status === 200) {
        setVotes(response?.data?.votes); // Update votes from backend response
        setHasVoted(true); // Prevent further votes
      }
    } catch (error) {
      console.error("Error upvoting the product:", error);
      alert(error.response?.data?.message || "An error occurred while upvoting.");
    }
  };

  return (
    <button
      onClick={handleUpvote}
      disabled={hasVoted}
      className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded ${
        hasVoted || isOwner
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : "bg-blue-600 text-white hover:bg-blue-700"
      }`}
    >
      <FaThumbsUp /> {votes}  Votes
    </button>
  );
};

export default Upvotevtn;
