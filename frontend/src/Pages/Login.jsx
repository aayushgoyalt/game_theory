import React, { useEffect, useState } from "react";
import { Stack } from "@mui/system";
import tl from "../assets/home/Asset 2.png";
import br from "../assets/home/Asset10.png";
import bl from "../assets/home/Asset20.png";
import btn from "../assets/home/Asset22.png";
import tr from "../assets/home/Asset30.png";
import gametheory from "../assets/texts/gametheory.png";

const CLIENT_ID =
  "1060472199523-n8c5sps49n35lq57mrtappsum2b2mpod.apps.googleusercontent.com"; // Replace with your client ID
const REDIRECT_URI = window.location.origin;
const GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";
const API_LOGIN_ROUTE = "http://localhost:8080/user"; // Replace with your API's login route

function Login() {
  const [error, setError] = useState("");

  // Function to initiate Google OAuth login
  const oauthSignIn = () => {
    const params = {
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      response_type: "token",
      scope:
        "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
      include_granted_scopes: "true",
      login_hint: "thapar.edu",
    };

    const query = new URLSearchParams(params).toString();
    window.location.href = `${GOOGLE_AUTH_URL}?${query}`;
  };

  // Function to handle token authentication and login
  const gtokenLogin = async (accessToken) => {
    try {
      // Fetch user info from Google
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      const userInfo = await response.json();

      if (!response.ok) throw new Error("Failed to fetch Google user info");

      // Send Google token to the backend for JWT generation
      const apiResponse = await fetch(API_LOGIN_ROUTE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ gtoken: accessToken }),
      });

      if (!apiResponse.ok) throw new Error("User not found in the database");

      const { jwt } = await apiResponse.json();
      localStorage.setItem("authToken", jwt); // Store JWT token locally
      window.location.href = "/"; // Redirect to homepage after successful login
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  };

  // Function to parse the access token from URL hash and login
  const performAuth = () => {
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = hashParams.get("access_token");

    if (accessToken) {
      gtokenLogin(accessToken);
      window.location.hash = ""; // Clear hash from URL
    }
  };

  useEffect(() => {
    performAuth(); // Perform authentication on component mount
  }, []);

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      className="relative w-full h-[100vh] bg22"
    >
      <img src={tl} className="absolute top-6 left-6 w-[24%]" alt="" />
      <img src={br} className="absolute bottom-6 right-6 w-[36%]" alt="" />
      <img src={bl} className="absolute bottom-8 left-14 w-[30%]" alt="" />
      <img src={tr} className="absolute top-8 right-6 w-[40%]" alt="" />

      <h1 className="text-white text-7xl">WELCOME TO</h1>
      <img src={gametheory} className="mt-6 w-[50%]" alt="" />

      <div className="relative w-full flex justify-center items-center mt-16">
        <img src={btn} className="w-[20%]" alt="" />
        <button
          onClick={oauthSignIn}
          className="absolute w-[18%] py-[0.4%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold bg-transparent border-none text-black"
        >
          LOG IN
        </button>
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </Stack>
  );
}

export default Login;
