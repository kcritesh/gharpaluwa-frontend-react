// Project Imports
import WithLayout from "src/components/WithLayout";
// import Main from "src/layouts/Main";
import AdminLayout from "src/layouts/Admin/DashboardLayout";
import ProductsComponent from "src/views/Admin/Products";

// ===================Products Page============================//
const ProductsPage = () => {
  return <WithLayout layout={AdminLayout} component={ProductsComponent} />;
};

export default ProductsPage;
