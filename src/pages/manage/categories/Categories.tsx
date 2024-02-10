// Project Imports
import WithLayout from "src/components/WithLayout";
// import Main from "src/layouts/Main";
import AdminLayout from "src/layouts/Admin/DashboardLayout";
import CategoriesComponent from "src/views/Admin/Categories";

// ===================Dashboard Page============================//
const CategoriesPage = () => {
  return <WithLayout layout={AdminLayout} component={CategoriesComponent} />;
};

export default CategoriesPage;
