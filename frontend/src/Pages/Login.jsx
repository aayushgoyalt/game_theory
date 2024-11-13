import { useNavigate } from "react-router-dom";
import tl from "../assets/home/Asset 2.png";
import br from "../assets/home/Asset10.png";
import bl from "../assets/home/Asset20.png";
import btn from "../assets/home/Asset22.png";
import tr from "../assets/home/Asset30.png";
import gametheory from "../assets/texts/gametheory.png";
import { Stack } from "@mui/system";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true"); // Save authentication state
    navigate("/"); // Redirect to the home page on successful login
  };
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

      <h1 className="text-white	text-7xl">WELCOME TO</h1>
      <img src={gametheory} className="mt-6 w-[50%]" alt="" />

      <div className="relative w-full flex justify-center items-center mt-16">
      <img src={btn} className="w-[20%]" alt="" />
      <button
        onClick={handleLogin}
        className="absolute w-[18%] py-[0.4%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold bg-transparent border-none text-balck"
      >
        LOG IN
      </button>
    </div>
    </Stack>
  );
};

export default Login;
