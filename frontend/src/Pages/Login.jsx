import React from "react";
import { useNavigate } from "react-router-dom";
import loginimage from "../assets/login.webp";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true"); // Save authentication state
    navigate("/"); // Redirect to the home page on successful login
  };
  return (
    <div className="flex bg-black w-full justify-self-center justify-center">
      <img
        src={loginimage}
        className=" border border-white w-full h-[100vh]"
        alt=""
      />
      <button
        onClick={handleLogin}
        className="z-50 absolute text-4xl mt-[62vh] translate-x-[-1/2] xl:mt-[64vh] px-[170px] py-5 "
      >
        LOG IN
      </button>
    </div>
  );
};

export default Login;
