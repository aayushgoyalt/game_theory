import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

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

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hardcoded credentials for demonstration
  const validUsername = "ccsadmin";
  const validPassword = "12345678";

  useEffect(() => {
    // Check if the user is already authenticated
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    if (isAuthenticated) {
      navigate("/"); // Redirect to home if already authenticated
    }
  }, [navigate]);

  const handleLogin = () => {
    if (username === validUsername && password === validPassword) {
      localStorage.setItem("isAuthenticated", "true"); // Save authentication state
      navigate("/"); // Redirect to the home page on successful login
    } else {
      setError("Invalid username or password");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default form submission
      handleLogin(); // Call the login function on Enter key press
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="relative flex justify-center items-center min-h-full">
        <div className="flex justify-center items-center gap-20">
          <div className="flex justify-center items-center gap-10 flex-col">
            <h1 className="text-6xl font-semibold text-[#5b5b5d]">
              GAME THEORY
            </h1>
          </div>
          <div className="flex-col flex justify-center items-center gap-4">
            <h1 className="text-5xl text-white mb-10">Log In</h1>
            <TextField
              label="Username"
              variant="outlined"
              color="primary"
              sx={{ width: "300px" }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={handleKeyPress} // Add key press handler
            />
            <TextField
              label="Password"
              variant="outlined"
              color="primary"
              type="password"
              sx={{ width: "300px" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress} // Add key press handler
            />
            {error && (
              <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
            )}
            <Button
              variant="contained"
              sx={{ width: "300px", height: "43px", marginTop: "12px" }}
              onClick={handleLogin}
            >
              SUBMIT
            </Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Login;
