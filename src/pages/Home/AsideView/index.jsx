// react相关模块
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

// 路由表
import routes from "../../../router";

// css
import "./style.less";
// antd
import { Menu } from "antd";
import {
  PieChartOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

export default class AsideView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routes,
    };
  }

  routerMapNoChildren = (route) => {
    return (
      <Menu.Item key={route.path} icon={<PieChartOutlined />}>
        <Link to={route.path}>{route.name}</Link>
      </Menu.Item>
    );
  };

  routerMapHasChildren = (route) => {
    return (
      <SubMenu key={route.name} icon={<PieChartOutlined />} title={route.name}>
        {route.children.map((item, index) => {
          return item.children && item.children.length > 0
            ? this.routerMapNoChildren(item)
            : this.routerMapNoChildren(item);
        })}
      </SubMenu>
    );
  };

  render() {
    const { routes } = this.state;
    return (
      <div className="menu_wrapper">
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
        >
          {routes.map((route, index) => {
            return route.children && route.children.length > 0
              ? this.routerMapHasChildren(route)
              : this.routerMapNoChildren(route);
          })}
        </Menu>
      </div>
    );
  }
}
