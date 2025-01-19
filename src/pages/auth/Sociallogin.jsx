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
            <button onClick={handlegoogle} className='btn btn-outline ml-8 mb-4'>
                <FaGoogle></FaGoogle>google</button>
        </div>
    );
};

export default Sociallogin;