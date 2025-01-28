import React, { useContext, useEffect, useState } from 'react';

import { FaThumbsUp } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { Authcontext } from '../auth/Authprovider';
import useaxiospublic from '../../hook/useaxiospublic';
import Upvotevtn from '../../components/Upvotevtn';

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
  
   
  
    return (
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Tranding  Products</h2>
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
              <NavLink to={`/details/${product._id}`}><h3 className="text-lg text-purple-500 font-semibold mb-2">{product.name}</h3></NavLink>
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
              <Upvotevtn product={product}></Upvotevtn>
                <p className="text-sm text-gray-500">
                  Posted by: {product.ownername}
                </p>
              </div>
            </div>
          ))}
          <Link to='/products'><button className='btn font-bold bg-purple-500 text-xl text-black hover:text-purple-600'>show more</button></Link>
        </div>
      </div>
    );
  };

export default Tranding;