import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Header } = Layout;
const locationMapKeys = {
  "": "1",
  designer: "1",
  view: "2",
  simulator: "3",
};

const NavMenu = () => {
  const location = useLocation();
  const { pathname } = location;
  const selectedpath = pathname.split("/")[1];

  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" selectedKeys={[locationMapKeys[selectedpath]]}>
        <Menu.Item key="1">
          <Link to="/designer">Designer</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/view">Viewer</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/simulator">Simulator</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default NavMenu;
