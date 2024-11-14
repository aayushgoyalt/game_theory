import { useState, useEffect } from "react";
import MonacoEditor from "@monaco-editor/react";
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import tr from "../assets/editor/Asset 2.png";
import bl from "../assets/editor/Asset 4.png";
import editor from "../assets/texts/editor.png";
import stage1 from "../assets/texts/stage1.png";
import stage2 from "../assets/texts/stage2.png";
import stage3 from "../assets/texts/stage3.png";
import { Paper, Stack, Typography } from "@mui/material";

const stageName = {
  1: "Stage 1",
  2: "Stage 2",
  3: "Stage 3",
};

const Homee = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("java");
  const [response, setResponse] = useState("");
  const [stage, setStage] = useState(3);
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState();

  let codeCache = undefined;
  // Fetch code template based on selected language
  const setTemplate = async (lang) => {
    if (codeCache) {
      setCode(codeCache[lang]);
    }
    try {
      const response = await axios.get(`http://localhost:8080/templates`);
      codeCache = response.data;
      setCode(response.data[lang]);
    } catch (error) {
      console.error("Error fetching template:", error);
    }
  };

  useEffect(() => {
    setTemplate(language);
  }, [language]);

  const SendReponse = async () => {
    setLoading(true); // Start loading
    try {
      const res = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code, language }),
      });
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error("Error sending response:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div className="bg-black w-full bg22 min-h-[100vh]">
      <img src={bl} className="absolute bottom-3 left-2 w-[20%]" alt="" />
      <img src={tr} className="absolute top-3 right-2 w-[20%]" alt="" />
      <Stack alignItems="center" justifyContent="center" className="mt-20 mb-6">
        <img
          src={stage === 1 ? stage1 : stage === 2 ? stage2 : stage3}
          className="w-[26%]"
          alt=""
        />
        <Typography
          variant="h5"
          sx={{
            mt: 1,
            color: "#D758BA",
            letterSpacing: "2px",
            fontSize: "40px",
            fontWeight: 600,
          }}
        >
          {stageName[stage]}
        </Typography>
      </Stack>
      <div className="flex justify-center items-center w-full">
        <div className="grid grid-cols-3 z-20 gap-5 px-32 w-full">
          <div className="col-span-1 flex justify-center items-start mt-14">
            <Paper
              elevation={10}
              className="bg-white w-full min-h-[40vh] max-h-[49vh] overflow-y-auto p-5"
            >
              <h1 className="font-semibold text-2xl">Question:</h1>
              <h5 className="font-normal">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit...
                Delectus veritatis eaque, perferendis distinctio maxime optio
                quasi magnam quod ipsum velit corporis aspernatur omnis quia
                molestiae animi pariatur facilis dolores nesciunt...
              </h5>
            </Paper>
          </div>
          <div className="col-span-2 flex">
            <div className="flex flex-col w-full">
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
                    <option value="java">Java</option>
                    <option value="py">Python</option>
                  </select>
                </div>
              </div>
              <div className="mt-3 py-3" style={{ backgroundColor: "#1E1E1E" }}>
                <MonacoEditor
                  className="z-50 h-[46vh]"
                  height="100%"
                  language={language}
                  theme="vs-dark"
                  value={code}
                  options={{
                    automaticLayout: true,
                    minimap: { enabled: false },
                    suggestOnTriggerCharacters: true,
                  }}
                />
              </div>
              <div className="flex justify-center items-center w-full">
                <LoadingButton
                  variant="contained"
                  onClick={SendReponse}
                  loading={loading}
                  sx={{
                    backgroundColor: "#D758BA",
                    width: 0.4,
                    py: 1,
                    fontSize: "18px",
                    fontWeight: 600,
                    mt: 2,
                  }}
                >
                  Submit
                </LoadingButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homee;
