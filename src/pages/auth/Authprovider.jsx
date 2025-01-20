import React, {  createContext, useEffect, useState } from 'react';
// import { app } from '../firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
// import useaxiospublic from '../hook/useaxiospublic';
import { app } from './firease.init';
import useaxiospublic from '../../hook/useaxiospublic';
export const Authcontext = createContext(null)
const auth = getAuth(app)
const Authprovider = ({children}) => {
    
    const [user,setuser] = useState(null)
    const [loading , setloading] = useState(true)
    const googleprovider = new GoogleAuthProvider()
    const axiospublic = useaxiospublic()


    const createuser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signuser = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth , email, password)
    }

    const googlesignin = ()=> {
        setloading(true)
        return signInWithPopup(auth, googleprovider)
    }

    const logout = () => {
        return signOut(auth)
    }

    const updateprofile = (name , photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    useEffect(()=> {
        const unsub = onAuthStateChanged(auth , currentuser => {
            setuser(currentuser)
            console.log(currentuser)
            if(currentuser){
                const userinfo = {email: currentuser.email}
                axiospublic.post('/jwt', userinfo)
                .then(res => {
                    if(res.data.token) {
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            }
            else {
                localStorage.removeItem('access-token')
            }
            setloading(false)
        })
        return () => {
            return unsub()
        }
    },[])
    const authinfo = {
        user,
        loading,
        createuser,
        signuser,
        logout,
        updateprofile,
        googlesignin
    }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;