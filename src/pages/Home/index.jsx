import React from "react";
// less
import "./style.less";

// 组件
import AsideView from "./AsideView";
import ContentView from "./ContentView";
import HeaderView from "./HeaderView";

// antd
import { Layout } from "antd";

const { Sider, Header, Content } = Layout;

export default class Home extends React.Component {
  render() {
    return (
      <Layout style={{ height: "100vh" }}>
        <Header style={{ padding: "0" }}>
          <HeaderView />
        </Header>
        <Layout>
          <Sider>
            <AsideView />
          </Sider>
          <Content>
            <ContentView />
          </Content>
        </Layout>
      </Layout>
    );
  }
}
