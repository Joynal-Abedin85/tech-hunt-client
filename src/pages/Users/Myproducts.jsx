import React from 'react';

const Myproducts = () => {
    return (
        <div>
             <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-center mb-5">Your Products</h2>
      <table className="table-auto w-full border-collapse border border-gray-200 shadow-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Product Name</th>
            <th className="border border-gray-300 px-4 py-2">Votes</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{product.name}</td>
              <td className="border border-gray-300 px-4 py-2">{product.votes}</td>
              <td
                className={`border border-gray-300 px-4 py-2 ${
                  product.status === "Accepted"
                    ? "text-green-500"
                    : product.status === "Rejected"
                    ? "text-red-500"
                    : "text-yellow-500"
                }`}
              >
                {product.status || "Pending"}
              </td>
              <td className="border border-gray-300 px-4 py-2 flex gap-4 justify-center">
                <Link
                  to={`/update-product/${product._id}`}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
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