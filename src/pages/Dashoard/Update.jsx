import React from 'react';

const Update = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [formData, setFormData] = useState({ name: "", description: "" });
  
    // Fetch product details
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`https://tech-hunt-server-theta.vercel.app/tech/${id}`);
          setProduct(response.data);
          setFormData({ name: response.data.name, description: response.data.description });
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      };
      fetchProduct();
    }, [id]);
  
    // Handle input changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.put(`https://tech-hunt-server-theta.vercel.app/tech/${id}`, formData);
        alert("Product updated successfully!");
        navigate("/products"); // Redirect after update
      } catch (error) {
        console.error("Error updating product:", error);
        alert("Failed to update the product.");
      }
    };
  
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
        <h2 className="text-2xl font-bold mb-4">Update Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Product Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Update Product
          </button>
        </form>
      </div>
    );
  };
  

export default Update;