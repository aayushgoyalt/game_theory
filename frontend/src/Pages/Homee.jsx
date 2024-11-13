import React, { useState } from "react";
import home from "../assets/editor.png";
import MonacoEditor from "@monaco-editor/react";
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from "react-router-dom";

const Homee = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(
    () => localStorage.getItem("code") || "Enter Your Code Here"
  );
  const [response, setResponse] = useState("");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleCodeChange = (value) => {
    setCode(value);
    localStorage.setItem("code", value);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div className="bg-black  overflow-y-hidden w-full">
      <img
        src={home}
        className="object-cover absolute top-0 left-0 w-full h-[100vh]"
        alt=""
      />
      <div className="flex justify-center items-center w-full">
        <div className=" grid grid-cols-3 z-20 gap-5 px-32 h-[64vh] w-full mt-56">
          <div className="col-span-1 mt-14 bg-white p-5">
            <h1 className=" font-semibold text-4sxl">Question: </h1>
          </div>
          <div className="col-span-2 ">
            <div className="flex flex-col ">
              <div className="flex justify-between">
                <div></div>
                <div className="gap-2 mb-1 flex items-center">
                  <label
                    htmlFor="language"
                    className="text-lg text-white font-semibold"
                  >
                    Choose Language:
                  </label>
                  <select
                    id="language"
                    value={language}
                    onChange={handleLanguageChange}
                    className="p-2 bg-yellow-400 text-black font-semibold rounded-md"
                  >
                    <option value="c">C</option>
                    <option value="cpp">C++</option>
                    <option value="go">Golang</option>
                    <option value="javascript">JavaScript</option>
                  </select>
                </div>
              </div>
              <div className="mt-3 py-3" style={{backgroundColor:"#1E1E1E"}}> 
                <MonacoEditor
                  className="z-50 h-[39vh]"
                  height="100%"
                  language="html"
                  theme="vs-dark"
                  value={code}
                  onChange={handleCodeChange}
                  options={{
                    automaticLayout: true,
                    minimap: { enabled: false },
                    suggestOnTriggerCharacters: true,
                  }}
                />
              </div>
            </div>
            <LoadingButton variant="contained" sx={{width:0.6}}>
              Submit
            </LoadingButton>
            <div className=" bg-[#1e1e1e] text-white border border-gray-600 p-4 mt-4 h-[14.5vh]">
              asjlsda
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homee;
