import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
// import { data } from 'react-router-dom';
// import { register } from "swiper/element";
import Swal from "sweetalert2";
import { Authcontext } from "../auth/Authprovider";
import useaxiospublic from "../../hook/useaxiospublic";
import useaxios from "../../hook/useaxios";
import ReactTagInput from "@pathofdev/react-tag-input";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const Additems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiospublic = useaxiospublic()
  const axiossecure = useaxios()
  const {user} = useContext(Authcontext)
  const [tags, setTags] = useState([]);

  const handleTagsChange = (newTags) => {
    setTags(newTags);
  };
  const onSubmit = async (data) => {
    console.log(data.productImage)
    const imagefile = {image: data.productImage[0]}
    const res = await axiospublic.post(image_hosting_api, imagefile, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    })
    if(res.data.success){
        const menuitem = {
          // ...data,
          timestamp: new Date(),
            name: data.productName,
            ownername: user.displayName,
            owneremail: user.email,
            ownerimage: user.photoURL,
            description: data.description,
            image: res.data.data.display_url,
            tags,
            votes: 0
        }
        const menures = await axiossecure.post('/tech', menuitem)
        console.log(menures.data)
        if(menures.data.insertedId){
            reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
    console.log(res.data)
  };
  return (
    <div className="max-w-xl mx-auto p-6 border border-border rounded-lg bg-card text-text">
    <h2 className="text-2xl font-bold mb-6">Add Product</h2>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      
      {/* Product Name */}
      <div>
        <label className="block mb-1">Product Name:</label>
        <input
          type="text"
          {...register("productName", { required: "Product Name is required" })}
          className="w-full p-2 rounded bg-bg text-text border border-border focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
  
      {/* Product Image */}
      <div>
        <label className="block mb-1">Product Image:</label>
        <input
          type="file"
          {...register("productImage", { required: "Product Image is required" })}
          className="w-full p-2 rounded bg-bg text-text border border-border focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
  
      {/* Description */}
      <div>
        <label className="block mb-1">Description:</label>
        <textarea
          {...register("description", { required: "Description is required" })}
          className="w-full p-2 rounded bg-bg text-text border border-border focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
  
      {/* Owner Info */}
      <div>
        <label className="block mb-2">Product Owner Info:</label>
        <div className="flex items-center gap-4">
          <img
            src={user?.photoURL}
            alt="Owner"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p><strong>Name:</strong> {user?.displayName}</p>
            <p><strong>Email:</strong> {user?.email}</p>
          </div>
        </div>
      </div>
  
      {/* Tags */}
      <div>
        <label className="block mb-1">Tags:</label>
        <ReactTagInput
          tags={tags}
          onChange={handleTagsChange}
          placeholder="Add new tag"
          inputFieldPosition="top"
          autocomplete
        />
      </div>
  
      {/* External Links */}
      <div>
        <label className="block mb-1">External Links:</label>
        <input
          type="url"
          {...register("externalLink")}
          placeholder="https://example.com"
          className="w-full p-2 rounded bg-bg text-text border border-border focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
  
      {/* Submit Button */}
      <button
        type="submit"
        className="px-6 py-2 bg-primary text-white rounded hover:bg-hover transition-all duration-200"
      >
        Submit
      </button>
    </form>
  </div>
  

  );
};

export default Additems;
