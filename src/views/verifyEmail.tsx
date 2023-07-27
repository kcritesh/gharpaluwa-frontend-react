import { useLocation, useNavigate, useParams } from "react-router-dom";

const verifyEmail = () => {
  // const navigate = useNavigate();
  const location = useLocation();
  const token = new URLSearchParams(location.search).get("token");
  return (
    <div>
      <h1>Verify Email</h1>
      <p>Token: {token}</p>
    </div>
  );
};

export default verifyEmail;
