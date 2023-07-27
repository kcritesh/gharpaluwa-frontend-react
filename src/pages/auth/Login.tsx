
// Project Imports
import WithLayout from "src/components/WithLayout";
import Main from "src/layouts/Main";
import LoginView from "src/views/Auth/LoginView";

// ===================Main Login Page============================//
const login = () => {
  return <WithLayout layout={Main} component={LoginView} />;
};

export default login;
