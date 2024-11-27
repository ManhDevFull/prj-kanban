import { Layout, Menu, MenuProps, Typography } from "antd";
import { Link } from "react-router-dom";
import { CiViewList } from "react-icons/ci";
import { MdOutlineInventory } from "react-icons/md";
import { Box, Chart, Home2, ProfileCircle } from "iconsax-react";
import { appInfo } from "../constants/appInfos";
import { color } from "../constants/color";

const { Sider } = Layout;
const {Text}  = Typography
type MenuItem = Required<MenuProps>["items"][number];
const SiderComponent = () => {
  const items: MenuItem[] = [
    {
      key: "dashboard",
      label: <Link to={"/"}>Dashboard</Link>,
      icon: <Home2 size={20} />,
    },
    {
      key: "inventory",
      label: <Link to={"/inventory"}>Inventory</Link>,
      icon: <MdOutlineInventory size={20} />,
    },
    {
      key: "report",
      label: <Link to={"/report"}>Report</Link>,
      icon: <Chart size={20} />,
    },
    {
      key: "suppliers",
      label: <Link to={"/suppliers"}>Suppliers</Link>,
      icon: <ProfileCircle size={20} />,
    },
    {
      key: "orders",
      label: <Link to={"/orders"}>Orders</Link>,
      icon: <Box size={20} />,
    },
    {
      key: "manage-store",
      label: <Link to={"/manage-store"}>Manage Store</Link>,
      icon: <CiViewList size={20} />,
    },
  ];
  return (
    <Sider width={250} theme="light" style={{height: '100vh'}}>
      <div className="p-2 d-flex">
        <img
          src={appInfo.appLogo}
          alt={appInfo.title}
          width={45}
        />
        <Text style={{
            fontWeight: 'bold',
            fontSize: '1.5rem',
            color: color.primary500,
            margin: 0,
            marginTop: 3
        }}>{appInfo.title}</Text>
      </div>
      <Menu items={items} theme="light" />
    </Sider>
  );
};
export default SiderComponent;
