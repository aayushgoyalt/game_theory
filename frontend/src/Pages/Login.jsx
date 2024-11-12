import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true"); // Save authentication state
    navigate("/"); // Redirect to the home page on successful login
  };
  return (
    <div className="flex bg-black w-full justify-center items-center">
      <img
        src="./login.webp"
        className=" border border-white h-[100vh]"
        alt=""
      />
      <button
        onClick={handleLogin}
        className="z-50 absolute text-4xl mt-[270px]  xl:mt-[300px] px-[170px] py-5 "
      >
        LOG IN
      </button>
    </div>
  );
};

export default Login;
