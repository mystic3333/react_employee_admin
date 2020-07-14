import React from "react";
import { Layout } from 'antd';

const {Header, Sider, Content} = Layout

// 组件
// import Sider from "./Sider";
// import Header from "./Header";
// import Content from "./Content";

export default class Home extends React.Component {
  render() {
    return (
      <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
    </Layout>
    );
  }
}
