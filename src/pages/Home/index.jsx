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
  constructor(props) {
    super(props)
    this.state = {
      isCollapsed: true
    }
  }

  toggleCollapsed = () => {
    this.setState({ isCollapsed: !this.state.isCollapsed })
  }
  
  render() {
    const {isCollapsed} = this.state
    return (
      <Layout style={{ height: "100vh" }}>
        <Header style={{ padding: "0" }} >
          <HeaderView isCollapsed={isCollapsed} toggleCollapsed={() => this.toggleCollapsed()}/>
        </Header >
        <Layout>
          <Sider collapsed={isCollapsed}>
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
