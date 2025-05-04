import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Review = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const res = await axios.get("https://tech-hunt-server-theta.vercel.app/tech");
          setProducts(res.data);
          console.log(res)
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
      fetchProducts();
    }, []);
  
    const handleMakeFeatured = async (id) => {
      try {
        await axios.patch(`/api/products/${id}/make-featured`);
        alert("Product marked as featured");
      } catch (error) {
        console.error("Error making product featured:", error);
      }
    };
  
    const handleAccept = async (id) => {
        try {
          const response = await axios.post(`https://tech-hunt-server-theta.vercel.app/accept-product`, { productId: id });
          if (response.data.success) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Product has been accepted and added to the Accepted Collection!",
              showConfirmButton: false,
              timer: 1500,
            });
      
            // Optional: Update UI to reflect changes without a page refresh
            setProducts((prevProducts) =>
              prevProducts.map((product) =>
                product._id === id ? { ...product, status: "Accepted" } : product
              )
            );
          }
        } catch (error) {
          console.error("Error accepting product:", error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      };
      
  
    const handleReject = async (id) => {
      try {
        await axios.patch(`/api/products/${id}/reject`);
        setProducts((prev) =>
          prev.map((product) =>
            product._id === id ? { ...product, status: "Rejected" } : product
          )
        );
        alert("Product rejected");
      } catch (error) {
        console.error("Error rejecting product:", error);
      }
    };
  
    const viewDetails = (id) => {
      navigate(`/products/${id}`);
    };
  
    return (
        <div className="p-6 text-text">
        <h2 className="text-2xl font-bold mb-6">Product Moderation</h2>
        <div className="grid grid-cols-1 gap-6">
          {products?.map((product) => (
            <div key={product._id} className="border rounded-lg p-4 shadow-md">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-text">Status: {product.status}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                  <NavLink to={`/details/${product._id}`}
                    className="px-4 py-2 border hover:text-slate-950 border-border text-text rounded hover:hover"
                    onClick={() => viewDetails(product._id)}
                  >
                    View Details
                  </NavLink>
                  <button
                    className="px-4 py-2 text-text hover:text-text rounded hover:hover"
                    onClick={() => handleMakeFeatured(product._id)}
                  >
                    Make Featured
                  </button>
                  <button
                    className={`px-4 py-2 hover:hover rounded ${product.status === "Accepted" ? "bg-text/10 cursor-not-allowed text-text/40" : "text-green-500 hover:bg-green-600"}`}
                    onClick={() => handleAccept(product._id)}
                    disabled={product.status === "Accepted"}
                  >
                    {product.status === "Accepted" ? <span>accepted</span> : "accept"}
                  </button>
                  <button
                    className={`px-4 py-2 hover:hover rounded ${product.status === "Rejected" ? "bg-bg cursor-not-allowed" : "text-red-500 hover:bg-hover/30"}`}
                    onClick={() => handleReject(product._id)}
                    disabled={product.status === "Rejected"}
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    );
  };
  

export default Review;