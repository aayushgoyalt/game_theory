import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Settings from "./Pages/Settings";
import withProtectedRoute from "./Components/withProtectedRoute"; // Import the HOC
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for Toastify
import { ToastContainer } from "react-toastify"; // Import the ToastContainer
import Rules from "./Pages/Rules";

const ProtectedHome = withProtectedRoute(Home);
const ProtectedSettings = withProtectedRoute(Settings);
const ProtectedRules = withProtectedRoute(Rules);

const App = () => {
  return (
    <div className="bg-[#050925] w-full h-[100vh]">
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
            path="/settings"
            element={
              <>
                <ProtectedSettings />
              </>
            }
          />
          <Route
            path="/rules"
            element={
              <>
                <ProtectedRules />
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
