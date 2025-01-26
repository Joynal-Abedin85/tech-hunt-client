import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../pages/auth/Authprovider";
// import { Authcontext } from "../auth/Authprovider";

export const axiossecure = axios.create({
  baseURL: "https://tech-hunt-server-theta.vercel.app",
});

const useaxios = () => {
  const navigate = useNavigate();
  const { logout } = useContext(Authcontext);
  axiossecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      console.log("request acceptors ", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // 401 and 403 status
  axiossecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      if (error.response) {
        const status = error.response.status;
        console.log(status);
        if (status === 401 || status === 403) {
          await logout();
          navigate("/login");
        }
      } else {
        console.error("Error:", error.message);
      }
      return Promise.reject(error);
    }
  );
  return axiossecure;
};

export default useaxios;
