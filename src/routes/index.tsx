// Third party library
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// Pages imports
import Login from "../pages/auth/Login";
import Register from "src/pages/auth/Register";

// Project imports
import ProtectedRoute from "./protectedRoute";
import Dashboard from "src/pages/manage/dashboard";

import PublicRoute from "./PublicRoute";

import VerifyEmail from "src/pages/verifyEmail";
import OrdersPage from "src/pages/manage/orders/Orders";
import ProductsPage from "src/pages/manage/products/Products";
import CreateProductsPage from "src/pages/manage/products/create";
import ResetPasswordComponent from "src/views/Auth/ResetPassword/ResetPassword.Component";
const Router = () => {
  // Fallback path which will be redirected to
  const fallbackPath = "/login";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/404" replace={true} />} />
        <Route path="/404" element={<h1>404</h1>} />
        <Route path="/verify-email/" element={<VerifyEmail />} />
        <Route
          path="/"
          element={<Navigate to="/manage/dashboard" replace={true} />}
        />

        <Route path="/" element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPasswordComponent />} />
        </Route>
        <Route
          path="/"
          element={<ProtectedRoute fallbackPath={fallbackPath} />}
        >
          <Route path="/manage/dashboard" element={<Dashboard />} />
          <Route path="/manage/products" element={<ProductsPage />} />
          <Route path="/manage/products/add" element={<CreateProductsPage />} />
          <Route
            path="/manage/products/edit/:id"
            element={<CreateProductsPage />}
          />
          <Route path="/manage/orders" element={<OrdersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
