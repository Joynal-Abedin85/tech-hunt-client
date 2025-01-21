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


    // useEffect(()=> {
    //     loadCaptchaEnginge(2);
    // },[])

    // const handlecapcha = (e) => {
    //     const usercapcha = e.target.value
    //     console.log(usercapcha)
    //     if(validateCaptcha(usercapcha)){
    //         setdisabled(false)
    //     } else{
    //         setdisabled(true)
    //     }
    // }
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
        <div className="hero relative top-20 bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handlesubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
      
        <div>
        <h2>if you dont have account <NavLink className='text-amber-500' to='/register' >register</NavLink>  </h2>
        </div>
        
        <div className="form-control mt-6">
          <button  className="btn btn-primary">Login</button>
        </div>
        
      </form>
      
    </div>
  </div>
</div>
    );
};

export default Login;