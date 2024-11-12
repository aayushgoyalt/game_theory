import React from "react";
import { Navigate } from "react-router-dom";

// Higher Order Component for protected routes
const withProtectedRoute = (WrappedComponent) => {
  return (props) => {
    // Replace this with your actual authentication logic
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

    // If the user is not authenticated, redirect to login
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    // If authenticated, render the wrapped component
    return <WrappedComponent {...props} />;
  };
};

export default withProtectedRoute;
