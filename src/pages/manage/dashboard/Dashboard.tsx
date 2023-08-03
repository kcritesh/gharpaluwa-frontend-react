// Project Imports
import WithLayout from "src/components/WithLayout";
// import Main from "src/layouts/Main";
import AdminLayout from "src/layouts/Admin/DashboardLayout";
import DashboardComponent from "src/views/Admin/Dashboard";

// ===================Dashboard Page============================//
const DashboardPage = () => {
  return <WithLayout layout={AdminLayout} component={DashboardComponent} />;
};

export default DashboardPage;
