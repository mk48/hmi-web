import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import Designer from "./Components/Designer";
import View from "./Components/View";

const { Header, Content } = Layout;

const Home = () => {
  return (
    <Layout>
      <Router>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/designer">Designer</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/view">Viewer</Link>
            </Menu.Item>
          </Menu>
        </Header>

        <Content className="site-layout" style={{ padding: "0 50px", marginTop: 64 }}>
          <Switch>
            <Route path="/designer">
              <Designer />
            </Route>
            <Route path="/view">
              <View />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Content>
      </Router>
    </Layout>
  );
};

export default Home;