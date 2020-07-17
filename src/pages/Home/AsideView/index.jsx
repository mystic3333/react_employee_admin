// react相关模块
import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";

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

class AsideView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routes,
      selectedKeys: [],
      openKeys: []
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
      <SubMenu key={route.path} icon={<PieChartOutlined />} title={route.name}>
        {route.children.map((item, index) => {
          return item.children && item.children.length > 0
            ? this.routerMapNoChildren(item)
            : this.routerMapNoChildren(item);
        })}
      </SubMenu>
    );
  };

  MenuClickHandle = ({ key, keyPath }) => {
    console.log(key, keyPath)
    this.setState({
      selectedKeys: [key],
      openKeys: [keyPath[keyPath.length - 1]]
    })
  }

  // default接口抽离, 店家下拉导航, 默认打开default页面
  onOpenChangeHandle = (openKeys) => {
    console.log(openKeys)
    this.props.history.push(`${openKeys[openKeys.length - 1]}/default`)
    this.setState({
      openKeys: [openKeys[openKeys.length - 1]],
      selectedKeys: [`${openKeys[openKeys.length - 1]}/default`]
    })
  }

  componentDidMount() {
    const pathname = this.props.location.pathname
    // const pathArr = pathname.split('/').length
    const openKey =  pathname.split('/').slice(0, 3).join('/')
    
    console.log(pathname, openKey)

    if (openKey) {
      this.setState({
        selectedKeys: [pathname],
        openKeys: [openKey]
      })
    }
  }

  render() {
    const { routes, selectedKeys, openKeys } = this.state;
    return (
      
      <div className="menu_wrapper">
        <Menu
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          mode="inline"
          theme="dark"
          onClick={this.MenuClickHandle}
          onOpenChange={this.onOpenChangeHandle}
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
export default withRouter(AsideView)