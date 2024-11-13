import { useState } from "react";

import MonacoEditor from "@monaco-editor/react";
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from "react-router-dom";
import tr from "../assets/editor/Asset 2.png";
import bl from "../assets/editor/Asset 4.png";
import editor from "../assets/texts/editor.png";
import stage1 from "../assets/texts/stage1.png";
import stage2 from "../assets/texts/stage2.png";
import stage3 from "../assets/texts/stage3.png";
import { Paper, Stack, Typography } from "@mui/material";

const stageName={
  1:"Stage 1",
  2:"Stage 2",
  3:"Stage 3"
}

const Homee = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(
    () => localStorage.getItem("code") || "Enter Your Code Here"
  );
  const [response, setResponse] = useState("");
  const [stage, setStage] = useState(3);

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
    <div className="bg-black  w-full bg22 min-h-[100vh]">
      <img src={bl} className="absolute bottom-3 left-2 w-[20%]" alt="" />
      <img src={tr} className="absolute top-3 right-2 w-[20%]" alt="" />
      <Stack
      alignItems="center"
      justifyContent="center"
      className="mt-20 mb-6"
    >
        <img src={stage===1?stage1:stage===2?stage2:stage3} className=" w-[26%]" alt="" />
        <Typography variant="h5" sx={{mt:1,color:"#D758BA",letterSpacing:"2px",fontSize:"40px",fontWeight:600}}>{stageName[stage]}</Typography>
      </Stack>
      <div className="flex justify-center items-center w-full">
        <div className=" grid grid-cols-3 z-20 gap-5 px-32 w-full ">
          <div className="col-span-1 flex justify-center items-start mt-14">
            <Paper
              elevation={10}
              className=" bg-white w-full min-h-[20vh] max-h-[49vh] overflow-y-auto	 p-5"
            >
              <h1 className=" font-semibold text-2xl">Question: </h1>
              <h5 className=" font-normal">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
                quisquam non corrupti omnis quidem architecto sit ullam saepe?
                Repellat at aliquam veniam reiciendis labore distinctio odit sit
                optio numquam est porro pariatur voluptatibus quaerat et nobis
                alias molestiae quas, earum laudantium! Laboriosam ducimus nulla
                voluptatum vero aspernatur nemo inventore possimus, aliquam
                sapiente itaque optio illo ipsum voluptatibus perferendis,
                reprehenderit perspiciatis magnam? Ut optio facilis veniam
                similique magnam commodi veritatis in id praesentium architecto
                voluptatibus quas, minima modi, laboriosam provident quod!{" "}
              </h5>
            </Paper>
          </div>
          <div className="col-span-2 flex ">
            <div className="flex flex-col w-full  ">
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
              <div className="mt-3 py-3" style={{ backgroundColor: "#1E1E1E" }}>
                <MonacoEditor
                  className="z-50 h-[46vh]"
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
              <div className="flex justify-center items-center	w-full">
                <LoadingButton
                  variant="contained"
                  sx={{
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
