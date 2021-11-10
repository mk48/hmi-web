import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import Designer from "./Components/Design/Designer";
import View from "./Components/View";
import Simulator from "./Components/Simulator/index";
import NavMenu from "./NavMenu";

const { Content } = Layout;

const Home = () => {
  return (
    <Layout>
      <Router>
        <NavMenu />
        <Content className="site-layout" style={{ padding: "0 50px", marginTop: 64 }}>
          <Switch>
            <Route exact path="/">
              <Designer />
            </Route>
            <Route path="/designer">
              <Designer />
            </Route>
            <Route path="/view">
              <View />
            </Route>
            <Route path="/simulator">
              <Simulator />
            </Route>
          </Switch>
        </Content>
      </Router>
    </Layout>
  );
};

export default Home;
