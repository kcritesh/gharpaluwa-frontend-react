// Project Imports
import WithLayout from "src/components/WithLayout";
import Main from "src/layouts/Main";
import verifyEmailComponent from "src/views/verifyEmail";

// ===================Verify Page============================//
const VerifyEmail = () => {
  return <WithLayout layout={Main} component={verifyEmailComponent} />;
};

export default VerifyEmail;
