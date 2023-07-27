// Third party library
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// Pages imports
import Login from "../pages/auth/Login";
import Register from "src/pages/auth/Register";

// Project imports
import ProtectedRoute from "./protectedRoute";
// import Dashboard from "../pages/manage/dashboard";

import PublicRoute from "./PublicRoute";
// import CreateBank from "../pages/manage/settings/bank/create";
// import EditBank from "src/pages/manage/settings/bank/edit";

const Router = () => {
  // Fallback path which will be redirected to
  const fallbackPath = "/login";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/manage/dashboard" replace={true} />} />
        
        <Route path="/" element={<PublicRoute />} >
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/" element={<ProtectedRoute fallbackPath={fallbackPath} />}>
          {/* <Route path="/manage/dashboard" element={<Dashboard />} /> */}
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
