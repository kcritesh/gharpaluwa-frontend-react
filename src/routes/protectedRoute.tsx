import React from "react";

// Mui imports
import { Box } from "@mui/material";

// Thir party library
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

// Icon imports
import LoadingIcon from "../assets/images/loading.svg";

type ProtectedRouteProps = {
  fallbackPath: string;
};

// ================ Protected Route Components ============================= //
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  fallbackPath
} : ProtectedRouteProps) => {
  // Check if user is authenticated or not. If not then redirects to login page
  const { isAuthenticated, authLoading } = useSelector(
    (state: any) => state.auth
  );

  if (authLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
          backgroundColor: "#fff8f8"
        }}
      >
        <img src={LoadingIcon} alt="Loading...." />
      </Box>
    );
  }

  if (!authLoading && !isAuthenticated)
    return <Navigate to={fallbackPath} replace />;

  return <Outlet />;
};

export default ProtectedRoute;
