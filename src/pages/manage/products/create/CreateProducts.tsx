// Project Imports
import WithLayout from "src/components/WithLayout";
// import Main from "src/layouts/Main";
import AdminLayout from "src/layouts/Admin/DashboardLayout";
import CreateProducts from "src/views/Admin/Products/create/CreateProducts.Component";
// ===================Products Page============================//
const ProductsPage = () => {
  return <WithLayout layout={AdminLayout} component={CreateProducts} />;
};

export default ProductsPage;
