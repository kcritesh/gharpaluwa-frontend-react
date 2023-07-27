import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axiosConfig from "src/config/axios.config";

const verifyEmail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = new URLSearchParams(location.search).get("token");
  const [verifyingEmail, setVerifyingEmail] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  React.useEffect(() => {
    setVerifyingEmail(true);
    if (token) {
      axiosConfig
        .post(`/api/auth/verify-email/${token}`)
        .then((res) => {
          setSuccess(true);
          navigate("/login");
        })
        .catch((err) => {
          setError(true);
          console.log(err.response.data);
        });
    }
  }, [token]);
  return (
    <div>
      {verifyingEmail && <h1>Verifying Email...</h1>}
      {error && <h1>Error</h1>}
      {success && <h1>Success</h1>}
    </div>
  );
};

export default verifyEmail;
