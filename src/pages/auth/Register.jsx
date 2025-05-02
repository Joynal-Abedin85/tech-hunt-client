import React, { useContext } from "react";
// import { Authcontext } from "./Authprovider";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import useaxiospublic from "../hook/useaxiospublic";
import Swal from "sweetalert2";
import Sociallogin from "./Sociallogin";
import useaxiospublic from "../../hook/useaxiospublic";
import { Authcontext } from "./Authprovider";
// import Sociallogin from "./Sociallogin";

const Register = () => {
  const navigate = useNavigate()
  const axiospublic = useaxiospublic()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createuser, updateprofile } = useContext(Authcontext);

  const onSubmit = (data) => {
    console.log(data);
    createuser(data.email, data.password)
    .then((result) => {
      console.log(result.user);
      updateprofile(data.name, data.photoURL)
      .then(()=> {
        const userinfo  = {
          name: data.name,
          email: data.email
        }
          axiospublic.post('/users', userinfo)
          .then(res => {
            if(res.data.insertedId){
              reset()
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "update been saved",
                showConfirmButton: false,
                timer: 1500
              });
              navigate("/")
            }
          })
          
      })
      .catch(error => console.log(error))
    });
  };
  return (
    <div className="hero relative top-[-80px] min-h-screen bg-bg">
  <div className="hero-content py-20 flex-col lg:flex-row-reverse">
    <div className="text-center  lg:text-left">
      <h1 className="text-5xl font-bold text-text">Register Now!</h1>
      <p className="py-6 text-text/80">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
        a id nisi.
      </p>
    </div>

    <div className="card w-full max-w-sm shrink-0 shadow-2xl bg-card border border-border">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        
        {/* Name Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-text/90">Name</span>
          </label>
          <input
            type="text"
            {...register("name")}
            name="name"
            placeholder="Name"
            className="input input-bordered bg-card text-text placeholder-text/60 border-border/30"
            required
          />
        </div>
        
        {/* Photo URL Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-text/90">Photo URL</span>
          </label>
          <input
            type="text"
            {...register("photoURL")}
            placeholder="Photo URL"
            className="input input-bordered bg-card text-text placeholder-text/60 border-border/30"
            required
          />
        </div>

        {/* Email Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-text/90">Email</span>
          </label>
          <input
            type="email"
            {...register("email")}
            name="email"
            placeholder="Email"
            className="input input-bordered bg-card text-text placeholder-text/60 border-border/30"
            required
          />
        </div>

        {/* Password Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-text/90">Password</span>
          </label>
          <input
            type="password"
            {...register("password")}
            name="password"
            placeholder="Password"
            className="input input-bordered bg-card text-text placeholder-text/60 border-border/30"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-text/70 hover:text-text">
              Forgot password?
            </a>
          </label>
        </div>

        {/* Account Link */}
        <div>
          <h2 className="text-text/80">
            If you have an account,{" "}
            <NavLink className="text-primary hover:underline" to="/login">
              login
            </NavLink>
          </h2>
        </div>

        {/* Register Button */}
        <div className="form-control mt-6">
          <button className="btn bg-primary text-text hover:bg-hover w-full">
            Register
          </button>
        </div>
      </form>

      {/* Social Login */}
      <Sociallogin />
    </div>
  </div>
</div>

  );
};

export default Register;
