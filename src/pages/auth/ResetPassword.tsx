// Project Imports
import WithLayout from "src/components/WithLayout";
import Main from "src/layouts/Main";
import ResetPasswordComponent from "src/views/Auth/ResetPassword/ResetPassword.Component";

// ===================Reset Password Page============================//
const register = () => {
  return <WithLayout layout={Main} component={ResetPasswordComponent} />;
};

export default register;
