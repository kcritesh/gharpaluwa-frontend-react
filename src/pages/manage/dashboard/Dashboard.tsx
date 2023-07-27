// Project Imports
import WithLayout from "src/components/WithLayout";
import Main from "src/layouts/Main";
import DashboardComponent from "src/views/Admin/Dashboard";

// ===================Dashboard Page============================//
const DashboardPage = () => {
  return <WithLayout layout={Main} component={DashboardComponent} />;
};

export default DashboardPage;
