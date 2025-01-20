import React, { useContext } from 'react';
// import { Authcontext } from '../auth/Authprovider';
// import useaxios from './useaxios';
import { use } from 'react';
// import { useQuery } from '@tanstack/react-query';
import { Authcontext } from '../pages/auth/Authprovider';
import useaxios from './useaxios';
import { useQuery } from '@tanstack/react-query';

const useadmin = () => {
    const {user} = useContext(Authcontext)
    const axiossecure = useaxios()
    const {data: isadmin , isPending: isAdminloading} = useQuery({
        queryKey: [user?.email, 'isadmin'],
        queryFn: async() => {
            const res = await axiossecure.get(`/users/admin/${user.email}`)
            console.log(res.data)
            return res.data?.admin;
        }
    })
    return [isadmin,isAdminloading]
};

export default useadmin;