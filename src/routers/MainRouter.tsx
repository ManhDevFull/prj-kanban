import { Layout } from "antd";
import HomeScreen from "../screens/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InventoryScreen, ManagerStoreScreen, OrdersScreen, ReportScreen, SuppliersScreen } from "../screens";
import { HeaderComponent, SiderComponent } from "../components";

const { Content, Footer } = Layout;
const MainRouter = () => {
  return (

    <BrowserRouter>
     <Layout>
      <SiderComponent />
      <Layout>
        <HeaderComponent />
        <Content className="mb-2 mt-3 container bg-white" style={{
          borderRadius: 5
        }}>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/inventory' element={<InventoryScreen />} />
            <Route path='/report' element={<ReportScreen />} />
            <Route path='/suppliers' element={<SuppliersScreen />} />
            <Route path='/orders' element={<OrdersScreen />} />
            <Route path='/manage-store' element={<ManagerStoreScreen />} />
          </Routes>
        </Content>
        <Footer />
      </Layout>
    </Layout>
    </BrowserRouter>
   
  );
};

export default MainRouter;
