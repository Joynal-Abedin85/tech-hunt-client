import axios from "axios";


const axiospublic = axios.create({
    baseURL: 'http://localhost:5000'
})

const useaxiospublic = () => {
    return axiospublic
};

export default useaxiospublic;