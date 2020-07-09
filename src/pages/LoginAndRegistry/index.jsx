import React from "react";

import { Tabs } from "antd";
import Login from "./Login";
import Registry from "./Registry";

import "./style.less";

const { TabPane } = Tabs;



export default class LoginAndRegistry extends React.Component {

  
  callback = (key) => {
    console.log(key);
  }


  render() {
    return (
      <div className="login_wrapper">
        <div className="login_header"> 
          <Tabs defaultActiveKey="1" onChange={this.callback} centered size="large" tabBarGutter="30">
            <TabPane tab="登录" key="1">
              <Login />
            </TabPane> 
            <TabPane tab="注册" key="2">
              <Registry/>
            </TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}
