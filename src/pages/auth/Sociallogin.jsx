import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Authcontext } from './Authprovider';
// import useaxiospublic from '../hook/useaxiospublic';
import { useNavigate } from 'react-router-dom';

const Sociallogin = () => {
    const {googlesignin} = useContext(Authcontext)
    // const axiospublic  = useaxiospublic()
    const navigate = useNavigate()
    const handlegoogle  = () =>{
        googlesignin()
        .then(res => {
            console.log(res.user)
            const userinfo = {
                email: res.user?.email,
                name: res.user.displayName
            }
            axiospublic.post('/users',userinfo)
            .then(res => {
                console.log(res.data)
                navigate('/')
            })
        })
    }
    return (
        <div>
            <div className="divider">or</div>
            <button onClick={handlegoogle} className='text-text border hover:bg-primary border-primary flex items-center justify-center py-3 rounded-md w-full  mb-5'>
                <FaGoogle className='text-text  mr-2 text-xl'></FaGoogle> <span >google</span></button>
        </div>
    );
};

export default Sociallogin;