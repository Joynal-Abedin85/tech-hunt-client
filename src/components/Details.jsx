import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Authcontext } from "../pages/auth/Authprovider";
import axios from "axios";
import { useForm } from "react-hook-form";
import useaxiospublic from "../hook/useaxiospublic";
import useaxios from "../hook/useaxios";
import Swal from "sweetalert2";
import Upvotevtn from "./Upvotevtn";

const Details = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiospublic = useaxiospublic();
  const axiossecure = useaxios();

  // const [product, setproduct] = useState([])

  const { id } = useParams(); // Get product ID from URL
  const { user } = useContext(Authcontext); // Get user details from context
  // const [product, setProduct] = useState(null);
  const { name, image, description, tags, votes, owneremail, _id } =
    useLoaderData();
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
        const response = await axios.get(
          `https://tech-hunt-server-theta.vercel.app/reviews/${id}`
        );
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
  }, [id]);

  //  sumit

  const onSubmit = async (data) => {
    console.log(data);
    if (data) {
      const menuitem = {
        // ...data,
        proid: _id,
        timestamp: new Date(),
        ownername: user.displayName,
        ownerimage: user.photoURL,
        description: data.description,
        rating: data.rating,
      };
      const menures = await axiossecure.post("/reviews", menuitem);
      console.log(menures.data);
      if (menures.data.insertedId) {
        reset();

        setReviews((prevReviews) => [menuitem, ...prevReviews]);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "review is post",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(data);
  };

  return (
    <div className="p-6 pt-24 space-y-10 bg-bg text-text">
      {/* Product Details Section */}
      <div className="border border-border rounded-lg shadow p-6 bg-card">
        <div className="flex items-center space-x-6">
          <img
            src={image}
            alt={name}
            className="w-32 h-32 object-cover rounded-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold text-text">{name}</h2>
            <p className="mt-2 text-secondary">{description}</p>
            <p className="mt-4">
              <strong className="text-text">Tags:</strong> {tags?.join(", ")}
            </p>
            <p className="mt-4">
              <strong className="text-text">Upvotes:</strong> {votes}
            </p>
            <div className="flex space-x-4 mt-6">
              <button
                onClick={handleReport}
                className="px-4 py-2 bg-hover text-bg rounded hover:bg-primary"
              >
                Report
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-text">Reviews</h3>
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-4 border border-border rounded-lg shadow bg-card"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={review.ownerimage}
                  alt={review.ownername}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-text">
                    {review.ownername}
                  </h4>
                  <p className="text-sm  text-secondary">
                    Rating: {review.rating}/5
                  </p>
                </div>
              </div>
              <p className="mt-2 text-text">{review.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Review Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-text">
            Rating (1-5)
          </label>
          <input
            type="number"
            min="1"
            max="5"
            {...register("rating", { required: "Rating is required" })}
            className="w-full p-2 mt-3 border border-border rounded bg-card text-text"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-text">
            Description
          </label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            className="w-full p-2 border mt-3 border-border rounded bg-card text-text"
            rows={4}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-6 py-2 bg-primary text-text rounded hover:bg-hover"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Details;
