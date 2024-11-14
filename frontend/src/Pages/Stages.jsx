import { useState } from "react";
import br from "../assets/home/Asset10.png";
import tl from "../assets/leaderboard/Asset 6.png";
import stagesxx from "../assets/texts/stages.png";
import { Paper, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import VerifiedIcon from "@mui/icons-material/Verified";

const Stages = () => {
  const [stages, setStages] = useState([
    { stage: 1, stageName: "Stage 1", status: "Locked" },
    { stage: 2, stageName: "Stage 2", status: "Completed" },
    { stage: 3, stageName: "Stage 3", status: "Unlocked" },
  ]);

  const navigate = useNavigate();

  return (
    <div className="bg-black  w-full bg22 h-[100vh]">
      <img src={tl} className="absolute top-10 left-8 h-[40%]" alt="" />
      <img src={br} className="absolute bottom-2 right-6 w-[30%]" alt="" />

      <Stack alignItems="center" justifyContent="center" className="pt-16 ">
        <img src={stagesxx} className=" w-[30%]" alt="" />
      </Stack>

      <Stack
        direction="row"
        mt={12}
        gap={20}
        alignItems="center"
        justifyContent="center"
      >
        {stages.map((item) => (
          <Stack
            key={item.stage}
            alignItems="center"
            justifyContent="center"
            sx={{
              minHeight: "54vh",
              minWidth: "11vw",
              px: 2,
              border: "3px solid #D758BA",
              borderRadius: 2,
              backdropFilter: "blur(5px)",
              cursor: "pointer",
              pointerEvents:
                item.status === "Locked" || item.status === "Completed"
                  ? "none"
                  : "auto",
              transition: "ease-in-out 0.3s",
              "&:hover": {
                boxShadow: "0 0 10px 5px #D758BA",
              },
            }}
            onClick={() => navigate(`/play/${item.stage}`)}
          >
            {(item.status === "Locked" || item.status === "Completed") && (
              <div
                className="absolute w-full h-full flex items-center justify-center"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.9)",
                  backdropFilter: "blur(15px)",
                }}
              >
                {item.status === "Locked" && (
                  <Stack alignItems="center">
                    <LockIcon sx={{ color: "#D758BA", fontSize: "48px" }} />
                    <br />
                    <Typography
                      textAlign="center"
                      variant="h5"
                      mt="-15px"
                      sx={{ color: "#D758BA", fontSize: "28px" }}
                    >
                      Locked
                    </Typography>
                  </Stack>
                )}
                {item.status === "Completed" && (
                  <Stack alignItems="center">
                    <LockIcon sx={{ color: "#D758BA", fontSize: "48px" }} />
                    <br />
                    <Typography
                      textAlign="center"
                      variant="h5"
                      mt="-15px"
                      sx={{ color: "#D758BA", fontSize: "28px" }}
                    >
                      Completed
                    </Typography>
                  </Stack>
                )}
              </div>
            )}

            <Typography
              variant="h3"
              className="docglitch"
              sx={{
                fontWeight: 600,
                color: "#E6C600",
                fontSize: "36px",
                fontFamily: "doctorglitch, sans-serif",
              }}
            >
              Stage {item.stage}
            </Typography>
            <Typography variant="h5" mt={1} sx={{ color: "white" }}>
              {item.stageName}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </div>
  );
};

export default Stages;
