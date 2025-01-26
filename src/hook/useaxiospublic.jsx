import axios from "axios";


const axiospublic = axios.create({
    baseURL: 'https://tech-hunt-server-theta.vercel.app'
})

const useaxiospublic = () => {
    return axiospublic
};

export default useaxiospublic;