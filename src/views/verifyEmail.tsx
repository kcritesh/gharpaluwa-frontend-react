import { useNavigate, useParams } from "react-router-dom";

const verifyEmail = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  return <div>{token}</div>;
};

export default verifyEmail;
