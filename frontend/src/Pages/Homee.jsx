import React, { useState } from "react";
import home from "../assets/editor.png";
import MonacoEditor from "@monaco-editor/react";
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
    <div className=" bg-black min-h-screen overflow-hidden">
      <img
        src={home}
        className=" w-full -mt-8 object-cover absolute  -ml-1"
        alt=""
      />
      <div className="flex justify-center items-center w-full">
        <div className=" grid grid-cols-3 z-20 gap-5 px-32 h-[65vh] w-full mt-44">
          <div className="col-span-1 bg-white p-5">
            <h1 className=" font-semibold text-4sxl">Question</h1>
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
              <MonacoEditor
                className="z-50 h-[40vh]"
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
            <div className=" bg-[#1e1e1e] text-white border border-gray-600 p-4 mt-4 h-[23vh]">
              asjlsda
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homee;
