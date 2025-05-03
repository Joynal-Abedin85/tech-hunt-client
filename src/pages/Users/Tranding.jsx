import React, { useContext, useEffect, useState } from "react";

import { FaThumbsUp } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../auth/Authprovider";
import useaxiospublic from "../../hook/useaxiospublic";
import Upvotevtn from "../../components/Upvotevtn";

const Tranding = () => {
  const { user } = useContext(Authcontext);
  const axiospublic = useaxiospublic();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch featured products from the server
    const fetchProducts = async () => {
      try {
        const response = await axiospublic.get("/accept-product"); // Update with your API endpoint
        // Sort products by timestamp (latest first)
        const sortedProducts = response.data.sort(
          (a, b) => new Date(b.votes) - new Date(a.votes)
        );
        setProducts(sortedProducts.slice(0, 6)); // Get the latest 4 products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);
  console.log(products);

  return (
    <div className="max-w-7xl mx-auto p-6">
    <h2 className="text-4xl font-bold text-primary text-center mb-8">
      Trending Products
    </h2>
    <p className="text-lg text-center text-text mb-12">
      Stay up-to-date with the latest insights, tips, and trends from our expert team.
    </p>
  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products?.map((product) => (
        <div
          key={product._id}
          className="bg-card rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300 border border-border text-text flex flex-col justify-between h-full"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
  
          <div className="mb-2">
            <h3 className="text-lg font-semibold text-primary mb-2">{product.name}</h3>
            <div className="flex flex-wrap gap-2 mb-2">
              {product.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="bg-hover/10 text-primary text-xs font-medium px-2 py-1 rounded border border-primary/30"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-secondary">Posted by: {product.ownername}</p>
          </div>
  
          <div className="flex justify-between items-center mt-auto pt-4">
            <Upvotevtn
              product={product}
              className="bg-primary text-text px-4 py-1 rounded hover:bg-bg hover:text-bg transition"
            />
            <NavLink to={`/details/${product._id}`}>
              <button className="bg-primary text-text px-4 py-1 rounded  hover:bg-bg hover:text-primary border border-primary transition">
                Details
              </button>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  
    <Link to="/products">
      <button className="font-bold duration-500 bg-primary px-6 text-text hover:bg-hover hover:text-bg border border-border text-xl mt-8 w-full py-3 rounded">
        Show More
      </button>
    </Link>
  </div>
  
  

  );
};

export default Tranding;
