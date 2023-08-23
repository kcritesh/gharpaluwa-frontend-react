// Project Imports
import WithLayout from "src/components/WithLayout";
// import Main from "src/layouts/Main";
import AdminLayout from "src/layouts/Admin/DashboardLayout";
import OrdersComponent from "src/views/Admin/Orders/Orders.Component";

// ===================Orders Page============================//
const OrdersPage = () => {
  return <WithLayout layout={AdminLayout} component={OrdersComponent} />;
};

export default OrdersPage;
