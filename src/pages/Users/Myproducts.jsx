import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../auth/Authprovider';
import { Link, NavLink } from 'react-router-dom';
import useaxios from '../../hook/useaxios';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';

const Myproducts = () => {
  
  const [product, setproduct] = useState([]);
  const axiossecure = useaxios()

  
    const { user } = useContext(Authcontext);
  
   
  
    useEffect(() => {
      fetch("https://tech-hunt-server-theta.vercel.app/tech")
        .then((res) => res.json())
        .then((data) => {
          if (user?.email) {
            // Filter the data by user email
            const filteredData = data.filter(
              (item) => item.owneremail === user.email
            );
            console.log(filteredData)
            setproduct(filteredData);
          }
        });
    }, [user?.email]);


    const  handleDelete = id  => {
      Swal.fire({
          title: "Are you sure?",
          text: "You want delete this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
          
              axiossecure.delete(`/tech/${id}`)
              .then(res => {
                  if(res.data.deletedCount > 0){
                    setproduct((prevProducts) =>
                      prevProducts.filter((item) => item._id !== id)
                    );
                      Swal.fire({
                              title: "Deleted!",
                              text: "Your file has been deleted.",
                              icon: "success"
                            });
                  }
              })
  
          }
        });
    }

    console.log(product)
    return (
      <div>
      <div className="container mx-auto mt-10 text-text">
        <h2 className="text-2xl font-semibold text-center mb-5">Your Products</h2>
        <table className="table-auto w-full border-collapse border border-border shadow-lg bg-bg">
          <thead>
            <tr className="bg-card">
              <th className="border border-border px-4 py-2 text-left">Product Name</th>
              <th className="border border-border px-4 py-2 text-left">Votes</th>
              <th className="border border-border px-4 py-2 text-left">Status</th>
              <th className="border border-border px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {product.map((product) => (
              <tr key={product._id} className="hover:bg-hover hover:text-bg transition-colors">
                <td className="border border-border px-4 py-2">{product.name}</td>
                <td className="border border-border px-4 py-2">{product.votes}</td>
                <td
                  className={`border border-border px-4 py-2 font-semibold ${
                    product.status === 'Accepted'
                      ? 'text-green-400'
                      : product.status === 'Rejected'
                      ? 'text-red-400'
                      : 'text-yellow-400'
                  }`}
                >
                  {product.status || 'Pending'}
                </td>
                <td className="border border-border px-4 py-2">
                  <div className="flex gap-3 justify-start">
                    <NavLink
                      to={`/update-product/${product._id}`}
                      className="bg-primary text-white px-3 py-1 rounded hover:bg-hover transition-all"
                    >
                      Update
                    </NavLink>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-all"
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

export default Myproducts;