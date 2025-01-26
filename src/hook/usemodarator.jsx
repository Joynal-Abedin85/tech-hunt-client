import React, { useContext } from 'react';
// import { Authcontext } from '../auth/Authprovider';
// import useaxios from './useaxios';
import { use } from 'react';
// import { useQuery } from '@tanstack/react-query';
import { Authcontext } from '../pages/auth/Authprovider';
import useaxios from './useaxios';
import { useQuery } from '@tanstack/react-query';

const usemodarator = () => {
    const {user} = useContext(Authcontext)
    const axiossecure = useaxios()
    const {data: ismodarator , isPending: ismoderatorloading} = useQuery({
        queryKey: [user?.email, 'ismodarator'],
        queryFn: async() => {
            const res = await axiossecure.get(`/users/moderator/${user.email}`)
            console.log(res.data)
            return res.data?.moderator;
        }
    })
    return [ismodarator,ismoderatorloading]
};

export default usemodarator;