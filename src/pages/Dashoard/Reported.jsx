import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Reported = () =>  {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
  
    // Fetch products from the database
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get("https://tech-hunt-server-theta.vercel.app/reports");
          setProducts(response.data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      fetchProducts();
    }, []);
  
    // Handle delete product
    const handleDelete = async (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await axios.delete(`https://tech-hunt-server-theta.vercel.app/reports/${id}`);
            setProducts(products.filter((product) => product.productId !== id));
            Swal.fire("Deleted!", "The product has been deleted.", "success");
          } catch (error) {
            console.error("Error deleting product:", error);
            Swal.fire("Error!", "Failed to delete the product.", "error");
          }
        }
      });
    };
  
    return (
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Product Management</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">Product Name</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id} className="text-center">
                  <td className="px-4 py-2 border">{product.productName}</td>
                  <td className="px-4 py-2 border">
                    <div className="flex justify-center gap-2">
                        <NavLink to={`/details/${product.productId}`}>
                        
                        <button
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        View Details
                      </button>
                        </NavLink>
                      
                      <button
                        onClick={() => handleDelete(product.productId)}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  

export default Reported;