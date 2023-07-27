
// Project Imports
import WithLayout from "src/components/WithLayout";
import Main from "src/layouts/Main";
import RegisterComponent from "src/views/Auth/RegisterView/Register.Component";

// ===================Main Login Page============================//
const register = () => {
  return <WithLayout layout={Main} component={RegisterComponent} />;
};

export default register;
