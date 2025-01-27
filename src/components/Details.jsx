import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Authcontext } from '../pages/auth/Authprovider';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useaxiospublic from '../hook/useaxiospublic';
import useaxios from '../hook/useaxios';
import Swal from 'sweetalert2';
import Upvotevtn from './Upvotevtn';

const Details = () => {
      const { register, handleSubmit, reset } = useForm();
      const axiospublic = useaxiospublic()
  const axiossecure = useaxios()

  // const [product, setproduct] = useState([])
    
    const { id } = useParams(); // Get product ID from URL
    const { user } = useContext(Authcontext); // Get user details from context
    // const [product, setProduct] = useState(null);
    const {name,image,description,tags,votes,owneremail,_id} = useLoaderData()
    const [reviews, setReviews] = useState([]);
    const [reviewForm, setReviewForm] = useState({
      description: "",
      rating: 0,
    });


  // product 



  // handle report 

  const handleReport = async () => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Please log in to report this product.",
        showConfirmButton: true,
      });
      return;
    }

    const reportData = {
      productId: _id,
      reportedBy: user.email,
      productName: name,
      image: image,
      votes: votes,
      tags: tags,
    };

    console.log("Report Data:", reportData);

    try {
      const response = await axios.post(
        `https://tech-hunt-server-theta.vercel.app/reports`,
        reportData
      );

      if (response.data.success) {
        Swal.fire({
          icon: "success",
          title: "Product reported successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: response.data.message || "Failed to report product.",
          showConfirmButton: true,
        });
      }
    } catch (error) {
      console.error("Error reporting product:", error);
      Swal.fire({
        icon: "error",
        title: "already reported",
        text: error.message,
        showConfirmButton: true,
      });
    }
  };
   
  
    // Fetch reviews
    useEffect(() => {
      const fetchReviews = async () => {
        try {
          const response = await axios.get(`https://tech-hunt-server-theta.vercel.app/reviews/${id}`);
          setReviews(response.data);
        } catch (error) {
          console.error("Error fetching reviews:", error);
        }
      };
      fetchReviews();
    }, [id]);
  
  
  
  //  sumit 

     const onSubmit = async (data) => {
       
        console.log(data)
        if(data){
            const menuitem = {
              // ...data,
              proid: _id,
              timestamp: new Date(),
                ownername: user.displayName,
                ownerimage: user.photoURL,
                description: data.description,
                rating: data.rating
                
            }
            const menures = await axiossecure.post('/reviews', menuitem)
            console.log(menures.data)
            if(menures.data.insertedId){
                reset()

                setReviews((prevReviews) => [menuitem, ...prevReviews]);
                
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "review is post",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log(data)
      };


    return (
      <div className="p-6 space-y-10">
        {/* Product Details Section */}
        
          <div className="border rounded-lg shadow p-6 bg-white">
            <div className="flex items-center space-x-6">
              <img
                src={image}
                alt={name}
                className="w-32 h-32 object-cover rounded-lg"
              />
              <div>
                <h2 className="text-2xl font-semibold">{name}</h2>
                <p className="text-gray-600 mt-2">{description}</p>
                <p className="mt-4">
                  <strong>Tags:</strong> {tags?.join(", ")}
                </p>
                <p className="mt-4">
                  <strong>Upvotes:</strong> {votes}
                </p>
                <div className="flex space-x-4 mt-6">
                  <button
                    onClick={handleReport}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        
  
        {/* Reviews Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Reviews</h3>
          <div className="space-y-4">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg shadow bg-gray-50"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={review.ownerimage}
                    alt={review.ownername}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{review.ownername}</h4>
                    <p className="text-sm text-gray-600">
                      Rating: {review.rating}/5
                    </p>
                  </div>
                </div>
                <p className="mt-2 text-gray-700">{review.description}</p>
              </div>
            ))}
          </div>
        </div>
  
       

        {/* try su review  */}
        <form onSubmit={handleSubmit(onSubmit)}>
              


              {/* rating  */}

              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Rating (1-5)
                </label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  {...register("rating", { required: "Product Name is required" })}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
        
              
        
              {/* Description */}
              <div style={{ marginBottom: "15px" }}>
                <label>Description:</label>
                <textarea
                  {...register("description", { required: "Description is required" })}
                  style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                />
                {/* {errors.description && <p style={{ color: "red" }}>{errors.description.message}</p>} */}
              </div>
        
             
        
              {/* Submit Button */}
              <button type="submit" style={{ padding: "10px 20px", background: "blue", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                Submit
              </button>
            </form>
      </div>
    );
  };

export default Details;