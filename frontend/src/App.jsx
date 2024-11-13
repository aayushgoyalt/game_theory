import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import withProtectedRoute from "./Components/withProtectedRoute"; // Import the HOC
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for Toastify
import { ToastContainer } from "react-toastify"; // Import the ToastContainer
import LeaderBoard from "./Pages/LeaderBoard";
import rulebook from "./Pages/rulebook";
import Homee from "./Pages/Homee";
import Stages from "./Pages/Stages";

import "./index.css";

const ProtectedHome = withProtectedRoute(Homee);
const ProtectedLeaderboard = withProtectedRoute(LeaderBoard);
const ProtectedRulebook = withProtectedRoute(rulebook);
const ProtectedStages = withProtectedRoute(Stages);

const App = () => {
  return (
    <div className="bg-[#050925] w-full h-[100vh] select-none">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        theme="dark"
      />

      <Router>
        <Routes>
          {/* Login without a default area */}
          <Route path="/login" element={<Login />} />

          {/* Paths that require the sidebar */}
          <Route
            path="/"
            element={
              <>
                <ProtectedHome />
              </>
            }
          />
          <Route
            path="/stages"
            element={
              <>
                <ProtectedStages />
              </>
            }
          />
          <Route
            path="/rulebook"
            element={
              <>
                <ProtectedRulebook />
              </>
            }
          />
          <Route
            path="/leaderboard"
            element={
              <>
                <ProtectedLeaderboard />
              </>
            }
          />
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  );
};

export default App;
