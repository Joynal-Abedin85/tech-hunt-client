import React, { useContext, useEffect, useRef, useState } from 'react';
// import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { Authcontext } from './Authprovider';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const {signuser} = useContext(Authcontext)

    const capcharef = useRef(null)

    const [disabled,setdisabled] = useState(true)

    const location = useLocation()
    const navigate = useNavigate()

    let from = location.state?.from?.pathname || "/"


   
    const handlesubmit= (e) =>  {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email,password)
        signuser(email,password)
            .then(res => {
                console.log(res.user)
                navigate(from, {replace: true})
            })

    }
    return (
      <div className="hero min-h-screen bg-gradient-to-r from-primary via-purple-800 to-primary relative top-[-80px]">
  <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-6xl">
    
    {/* Text Section */}
    <div className="text-text text-center lg:text-left max-w-lg">
      <h1 className="text-6xl font-extrabold leading-tight">Welcome Back!</h1>
      <p className="py-6 text-lg opacity-90">
        Access your account and explore the amazing features we offer. Your journey starts here.
      </p>
    </div>
    
    {/* Card Section */}
    <div className="card bg-card mt-20 backdrop-blur-md shadow-2xl w-full max-w-md text-text p-6 rounded-xl border border-border">
      <form onSubmit={handlesubmit} className="card-body space-y-4">
        
        {/* Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-text/90">Email</span>
          </label>
          <input 
            type="email" 
            name='email' 
            placeholder="Enter your email" 
            className="input input-primary bg-card/20 placeholder-text/60 text-text border-border/30" 
            required 
          />
        </div>
        
        {/* Password */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-text/90">Password</span>
          </label>
          <input 
            type="password" 
            name='password' 
            placeholder="Enter your password" 
            className="input input-primary bg-card/20 placeholder-text/60 text-text border-border/30" 
            required 
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-text/70 hover:text-text">Forgot password?</a>
          </label>
        </div>

        {/* Register */}
        <div>
          <p className="text-text/80">
            Don't have an account?{' '}
            <NavLink className="text-yellow-300 font-medium hover:underline" to="/register">
              Register
            </NavLink>
          </p>
        </div>
        
        {/* Button */}
        <div className="form-control mt-4">
          <button className="btn bg-primary hover:bg-hover w-full hover:scale-105 transition-transform duration-200">
            Login
          </button>
        </div>
        
      </form>
    </div>
  </div>
</div>

    
    
    );
};

export default Login;