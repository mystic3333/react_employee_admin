import React, { Fragment } from "react";
// 路由
import { Switch, Route } from "react-router-dom";

// 组件
import PrivateRouter from "../../../components/PrivateRouter";
// import User from "./User";
// import UserDefaultPage from "./User/Default";
// import UserAdd from "./User/Add";
// import UserList from "./User/List";
// import Control from "./Control";
// import Department from "./Department";
// import Position from "./Position";
// import NotFound from "../../NotFound";

// css
import "./style.less";


// utils
import Components from './components'



export default class ContentView extends React.Component {
  render() {
    return (
      <Switch>
          {
              Components.map((item, index) => {
                  return <PrivateRouter exact key={item.path} path={item.path} component={item.component}></PrivateRouter>
              })
          }

        {/* <PrivateRouter exact path="/home" component={Control}></PrivateRouter>
        <PrivateRouter exact path="/home/user" component={User}></PrivateRouter>
        <PrivateRouter
          exact
          path="/home/user/default"
          component={UserDefaultPage}
        ></PrivateRouter>
        <PrivateRouter
          exact
          path="/home/user/add"
          component={UserAdd}
        ></PrivateRouter>
        <PrivateRouter
          exact
          path="/home/user/list"
          component={UserList}
        ></PrivateRouter>
        <PrivateRouter
          exact
          path="/home/department"
          component={Department}
        ></PrivateRouter>
        <PrivateRouter
          exact
          path="/home/position"
          component={Position}
        ></PrivateRouter>
        <PrivateRouter path="*" component={NotFound}></PrivateRouter> */}
      </Switch>
    );
  }
}
