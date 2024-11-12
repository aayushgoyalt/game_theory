"use client";
import React, { useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import { useNavigate } from "react-router-dom";
import { Button, createTheme, ThemeProvider } from "@mui/material";

export default function Home() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(
    () => localStorage.getItem("code") || "Enter Your Code Here"
  );
  const [isLoading, setIsLoading] = useState(false);
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

  const handleSubmit = async () => {
    setIsLoading(true);
    setResponse("");

    try {
      // Send code to backend (replace with actual endpoint)
      const res = await fetch("/api/submit-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language, code }),
      });
      const data = await res.json();
      setResponse(data.message);
    } catch (error) {
      setResponse("Error: Unable to submit code.");
    }

    setIsLoading(false);
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#39b9bc",
      },
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "gray",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#39b9bc",
            },
          },
          input: {
            color: "white",
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: "white",
            "&.Mui-focused": {
              color: "#39b9bc",
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col items-center text-white w-full min-h-screen bg-gray-900 p-8 space-y-6">
        <div className="flex w-full justify-between">
          <div></div>
          <h1 className="text-3xl font-semibold">Code Editor</h1>
          <Button
            variant="contained"
            sx={{ width: "150px", height: "43px", marginTop: "12px" }}
            onClick={handleLogout}
          >
            Log Out
          </Button>
        </div>

        {/* Monaco Code Editor */}
        <div className="flex w-full justify-evenly ">
          <div className=" bg-white w-[35%] h-[75vh] text-black">Question</div>
          <div className="flex w-[55%] h-[60vh] flex-col gap-5">
            {/* Language Dropdown */}
            <div className="flex items-center space-x-4 justify-between">
              <div></div>
              <div className="gap-2 flex items-center">
                <label htmlFor="language" className="text-lg">
                  Choose Language:
                </label>
                <select
                  id="language"
                  value={language}
                  onChange={handleLanguageChange}
                  className="p-2 bg-gray-700 text-white rounded-md"
                >
                  <option value="c">C</option>
                  <option value="cpp">C++</option>
                  <option value="go">Golang</option>
                  <option value="javascript">JavaScript</option>
                </select>
              </div>
            </div>
            <MonacoEditor
              height="100%"
              language="html"
              theme="vs-dark"
              value={code}
              onChange={handleCodeChange}
              options={{
                automaticLayout: true,
                minimap: { enabled: false },
                quickSuggestions: true,
                parameterHints: true,
                suggestOnTriggerCharacters: true,
                tabCompletion: "on",
              }}
            />
          </div>
        </div>

        {/* Done Button and Loader */}
        <Button
          variant="contained"
          sx={{ width: "150px", height: "43px", marginTop: "12px" }}
          onClick={handleLogout}
        >
          {isLoading ? <Loader /> : "Done"}
        </Button>

        {/* Response */}
        {response && (
          <div className="mt-4 p-4 bg-gray-800 rounded-md text-center text-lg">
            {response}
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}
