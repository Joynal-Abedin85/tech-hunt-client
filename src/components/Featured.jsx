import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../pages/auth/Authprovider';
import { FaThumbsUp } from 'react-icons/fa';
import useaxiospublic from '../hook/useaxiospublic';

const Featured = () => {
    const { user } = useContext(Authcontext);
    const axiospublic = useaxiospublic();
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      // Fetch featured products from the server
      const fetchProducts = async () => {
        try {
          const response = await axiospublic.get("/tech"); // Update with your API endpoint
          // Sort products by timestamp (latest first)
          const sortedProducts = response.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setProducts(sortedProducts.slice(0, 4)); // Get the latest 4 products
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
      fetchProducts();
    }, []);
  
    const handleUpvote = async (productId) => {
      try {
        await axiospublic.post(`/tech/upvote/${productId}`, {
          email: user?.email,
        }, 
        {
            headers: { authorization: `Bearer ${token}` }, // Include token in the header
          });
        // Update UI after upvote
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product._id === productId
              ? { ...product, votes: product.votes + 1 }
              : product
          )
        );
      } catch (error) {
        console.error("Error upvoting product:", error);
      }
    };
  
    return (
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products?.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {product.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => handleUpvote(product._id)}
                  disabled={user?.email === product.owneremail}
                  className={`flex items-center gap-2 text-white px-4 py-2 rounded ${
                    user?.email === product.owneremail
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                >
                  <FaThumbsUp />
                  <span>{product.votes}</span>
                </button>
                <p className="text-sm text-gray-500">
                  Posted by: {product.ownername}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Featured;