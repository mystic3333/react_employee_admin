### 参考资料汇总

    create-react-app所有文档: https://github.com/facebook/create-react-app/tree/master/docusaurus/docs

    环境变量配置: https://www.html.cn/create-react-app/docs/adding-custom-environment-variables/

### 项目初始化

    npx create - react - app react_employee_admin

### 集成 antd

    安装:
        npm install--save antd babel - plugin -import

    配置 package.json 文件
    ```
        "babel": {
            "presets": [
            "react-app"
            ],
            "plugins": [
            [
                "import",
                {
                "libraryName": "antd",
                "libraryDirectory": "es",
                "style": "css"
                }
            ]
            ]
        }
    ```

### 集成 less

    安装:
        npm install less less - loader--save - dev

    拉取配置文件
        npm run eject
        提示: .git 文件引起的冲突删除后在试

    修改 config / webpack.config.js 配置

    ```
        const lessRegex = /\.less\$/;

        const lessModuleRegex = /\.module\.less\$/;

        {
            test: lessRegex,
            exclude: lessModuleRegex,
            use: getStyleLoaders(
            {
                importLoaders: 3,
                sourceMap: isEnvProduction && shouldUseSourceMap,
            },
            'less-loader'
            ),
            // Don't consider CSS imports dead code even if the
            // containing package claims to have no side effects.
            // Remove this when webpack adds a warning or an error for this.
            // See https://github.com/webpack/webpack/issues/6571
            sideEffects: true,
        },
        {
            test: lessModuleRegex,
            use: getStyleLoaders(
            {
                importLoaders: 3,
                sourceMap: isEnvProduction && shouldUseSourceMap,
                modules: {
                getLocalIdent: getCSSModuleLocalIdent,
                },
            },
            'less-loader'
            ),
        },

    ```

### 初始化 css 样式

```
@charset "gb2312";
/_ CSS Document _/
html,body,h1,h2,h3,h4,h5,h6,div,dl,dt,dd,ul,ol,li,p,blockquote,pre,hr,figure,table,caption,th,td,form,fieldset,legend,input,button,textarea,menu{margin:0;padding:0;}
body{padding:0; margin:0; background:black;}
html,body,fieldset,img,iframe,abbr{border:0;}
li{list-style:none;}
textarea{overflow:auto;resize:none;}
a,button{cursor:pointer;}
h1,h2,h3,h4,h5,h6,em,strong,b{font-weight:bold;}
a,a:hover{text-decoration:none;}
body,textarea,input,button{
color:#62a1c9;
}

html,body{
width:100%;
min-height: 930px;
height: auto;
}

.hide{
display: none;
}

.text-shadow (@string: 0 1px 3px rgba(0, 0, 0, 0.25)) {
text-shadow: @string;
}
.box-shadow (@string) {
-webkit-box-shadow: @string;
-moz-box-shadow: @string;
box-shadow: @string;
}
.drop-shadow (@x: 0, @y: 1px, @blur: 2px, @spread: 0, @alpha: 0.25) {
-webkit-box-shadow: @x @y @blur @spread rgba(0, 0, 0, @alpha);
-moz-box-shadow: @x @y @blur @spread rgba(0, 0, 0, @alpha);
box-shadow: @x @y @blur @spread rgba(0, 0, 0, @alpha);
}
.inner-shadow (@x: 0, @y: 1px, @blur: 2px, @spread: 0, @alpha: 0.25) {
-webkit-box-shadow: inset @x @y @blur @spread rgba(0, 0, 0, @alpha);
-moz-box-shadow: inset @x @y @blur @spread rgba(0, 0, 0, @alpha);
box-shadow: inset @x @y @blur @spread rgba(0, 0, 0, @alpha);
}

.box-sizing (@type: border-box) {
-webkit-box-sizing: @type;
-moz-box-sizing: @type;
box-sizing: @type;
}

.border-radius (@radius: 5px) {
-webkit-border-radius: @radius;
-moz-border-radius: @radius;
border-radius: @radius;

    -moz-background-clip:    padding;
    -webkit-background-clip: padding-box;
    background-clip:         padding-box;

}
.border-radiuses (@topright: 0, @bottomright: 0, @bottomleft: 0, @topleft: 0) {
-webkit-border-top-right-radius: @topright;
-webkit-border-bottom-right-radius: @bottomright;
-webkit-border-bottom-left-radius: @bottomleft;
-webkit-border-top-left-radius: @topleft;

    -moz-border-radius-topright:        @topright;
    -moz-border-radius-bottomright:     @bottomright;
    -moz-border-radius-bottomleft:      @bottomleft;
    -moz-border-radius-topleft:         @topleft;

    border-top-right-radius:            @topright;
    border-bottom-right-radius:         @bottomright;
    border-bottom-left-radius:          @bottomleft;
    border-top-left-radius:             @topleft;

    -moz-background-clip:    padding;
    -webkit-background-clip: padding-box;
    background-clip:         padding-box;

}

.opacity (@opacity: 0.5) {
@tempOpacity: @opacity \* 100;
-webkit-opacity: @opacity;
-moz-opacity: @opacity;
opacity: @opacity;
filter:alpha(opacity=@tempOpacity);
}

.gradient (@startColor: #eee, @endColor: white) {
background-color: @startColor;
background: -webkit-gradient(linear, left top, left bottom, from(@startColor), to(@endColor));
background: -webkit-linear-gradient(top, @startColor, @endColor);
background: -moz-linear-gradient(top, @startColor, @endColor);
background: -ms-linear-gradient(top, @startColor, @endColor);
background: -o-linear-gradient(top, @startColor, @endColor);
}
.horizontal-gradient (@startColor: #eee, @endColor: white) {
background-color: @startColor;
background-image: -webkit-gradient(linear, left top, right top, from(@startColor), to(@endColor));
background-image: -webkit-linear-gradient(left, @startColor, @endColor);
background-image: -moz-linear-gradient(left, @startColor, @endColor);
background-image: -ms-linear-gradient(left, @startColor, @endColor);
background-image: -o-linear-gradient(left, @startColor, @endColor);
background-image: linear-gradient(left, @startColor, @endColor);
}

.animation (@name, @duration: 300ms, @delay: 0, @ease: ease) {
-webkit-animation: @name @duration @delay @ease;
-moz-animation: @name @duration @delay @ease;
-ms-animation: @name @duration @delay @ease;
animation: @name @duration @delay @ease;
}

.transition (@transition) {
-webkit-transition: @transition;
-moz-transition: @transition;
-ms-transition: @transition;
-o-transition: @transition;
transition: @transition;
}
.transform(@string){
-webkit-transform: @string;
-moz-transform: @string;
-ms-transform: @string;
-o-transform: @string;
transform: @string;
}
.scale (@factor) {
-webkit-transform: scale(@factor);
-moz-transform: scale(@factor);
-ms-transform: scale(@factor);
-o-transform: scale(@factor);
transform: scale(@factor);
}
.rotate (@deg) {
-webkit-transform: rotate(@deg);
-moz-transform: rotate(@deg);
-ms-transform: rotate(@deg);
-o-transform: rotate(@deg);
transform: rotate(@deg);
}
.skew (@deg, @deg2) {
-webkit-transform: skew(@deg, @deg2);
-moz-transform: skew(@deg, @deg2);
-ms-transform: skew(@deg, @deg2);
-o-transform: skew(@deg, @deg2);
transform: skew(@deg, @deg2);
}
.translate (@x, @y:0) {
-webkit-transform: translate(@x, @y);
-moz-transform: translate(@x, @y);
-ms-transform: translate(@x, @y);
-o-transform: translate(@x, @y);
transform: translate(@x, @y);
}
.translate3d (@x, @y: 0, @z: 0) {
-webkit-transform: translate3d(@x, @y, @z);
-moz-transform: translate3d(@x, @y, @z);
-ms-transform: translate3d(@x, @y, @z);
-o-transform: translate3d(@x, @y, @z);
transform: translate3d(@x, @y, @z);
}
.perspective (@value: 1000) {
-webkit-perspective: @value;
-moz-perspective: @value;
-ms-perspective: @value;
perspective: @value;
}
.transform-origin (@x:center, @y:center) {
-webkit-transform-origin: @x @y;
-moz-transform-origin: @x @y;
-ms-transform-origin: @x @y;
-o-transform-origin: @x @y;
transform-origin: @x @y;
}

.keyframes(@name, @frames) {
@-webkit-keyframes @name { @frames(); }
@-moz-keyframes @name { @frames(); }
@-ms-keyframes @name { @frames(); }
@-o-keyframes @name { @frames(); }
@keyframes @name { @frames(); }
}

.animation(@arg){
-moz-animation:@arg;
-webkit-animation:@arg;
-o-animation:@arg;
-ms-animation:@arg;
animation:@arg;
}

```

### 跨域处理

    插件安装
        npm install http-proxy-middleware --save

    src目录下创建setupProxy.js文件

    注意:
        setupProxy.js文件名称如果更改在config/path.js文件下的proxySetup文件夹一定要对应, 字段配置如下
        proxySetup: resolveApp('src/setupProxy.js'),

```

// setupProxy.js 文件配置如下
const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(createProxyMiddleware('/api', {
            target: 'http://localhost:5000',
            changeOrigin: true,
            pathRewrite: {
                "/api": ""
            }
        })
    )
}
```

### 配置环境变量

参考资料
https://www.html.cn/create-react-app/docs/adding-custom-environment-variables/

安装
npm install --save-dev dotenv-cli

创建环境变量配置文件, 配置文件变量名以 REACT_APP_XXX 规范命名

```
    .env.development
        REACT_APP_API = "/devApi"
        REACT_APP_BASE_URL = "http://localhost:5000"
    .env.production
    .env.test
```

package.json 文件 scripts 字段中加入以下配置

```
"build:dev": "dotenv -e .env.development react-app-rewired build"
"build:pro": "dotenv -e .env.production react-app-rewired build"
"build:test": "dotenv -e .env.test react-app-rewired build"

```

### axios 使用

    安装
        npm install --save axios

    封装请求和响应拦截 创建utils/request.js文件

```
import axios from 'axios'

const http = axios.create({
    baseUrl: process.env.REACT_APP_API,
    timeout: 5000
})

// Add a request interceptor
http.interceptors.request.use(function (config) {
    console.log(process.env.NODE_ENV)
    return config;
}, function (error) {
    return Promise.reject(error);
});

// Add a response interceptor
http.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default http
```

### rem 自适应布局配置代码

在 public/index.html 中加入这段代码

```
<script>
    (function (width) {
    var doc = width.document,
        element = doc.documentElement,
        i = 750,
        d = i / 100,
        o = "orientationchange" in width ? "orientationchange" : "resize",
        a = function () {
        var width = element.clientWidth || 320;
        width > 750 && (width = 750);
        element.style.fontSize = width / d + "px"
        };
    doc.addEventListener && (width.addEventListener(o, a, !1), doc.addEventListener("DOMContentLoaded", a, !1))
    })(window);
</script>
```

### nodemon 服务器代码热更新

安装
npm install -g nodemon
npm install --save nodemon

使用
package.json 中修改 scripts 启动命令

```
"scripts": {
    "start": "nodemon ./server.js"
}
```

### [server 端] body-parser 使用

安装:
npm install --save body-parser

在 server.js 入口文件全局引用

```
const bodyParser = require('body-parser')
app.use(bodyParser.json())
```

### [vscode 开发技巧] 快速定位文件方法

Ctrl + p 打开搜索框, 输入需要定位的文件名称, 即可快速定位, 提高开发效率

### [前端] 组件状态切换

```

```

### [git 操作] 创建新的分支并推送代码

```
git add .
git commmit -m ''
git checkout -b newBranch
git push --set-upstream newBranch
```

### [react] 组件的分类

无状态组件
有状态组件
ui 组件
容器组件
高阶组件
回调渲染

### [javascript] 倒计时逻辑

```
 countDown = () => {
    let timer = null;
    let count = 60;

    this.setState({
      codeLoading: false
    })

    timer = setInterval(() => {

      count--;
      if (count <= 0) {
        this.setState({
          buttonText: "重新获取",
          codeDisable: false,
        });
        clearInterval(timer);
        return false
      }

      this.setState({
        buttonText: `发送成功${count}S`,
      });
    }, 1000);
  };
```

### 私有化组件

src/components/PrivateRouter

```
import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRouter = ({component: Component, ...rest}) => {
  return (
      <Route
        {...rest}
        render = {(routeProps) => (
            true ? <Component {...routeProps} /> : <Redirect to="/" />
        )}
      ></Route>
  )
};

export default PrivateRouter
```

./App.jsx

```
import React from "react";
import { Switch, HashRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import LoginAndRegistry from './pages/LoginAndRegistry'
import PrivateRouter from "./components/PrivateRouter";

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/" component={LoginAndRegistry}></Route>
            <PrivateRouter path="/home" component={Home} ></PrivateRouter>
          </Switch>
        </Router>
      </div>
    );
  }
}

```

### 签发 jwt, 解码 jwt

安装
npm install --save jsonwebtoken jwt-decode

```
const jwt = require('jsonwebtoken')
const jwtDecode = require('jwt-decode')

function signToken(payload, secret) {
    const token = jwt.sign(payload, secret, {
        expiresIn: 60 * 60
    })
    return token
}

function decode(token) {
    return jwtDecode(token)
}

module.exports = {
    signToken,
    decode
}
```

### jwt 校验请求头配置

客户端每次请求的时候都会携带 token 进行请求

```
import axios from 'axios'

const http = axios.create({
    baseUrl: '/api',
    timeout: 5000
})

// Add a request interceptor
http.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token')
    if (token) {
    config.headers.authorization = `mystic ${token}`

    } else {
        config.headers.authorization = ''
    }

    return config;
}, function (error) {
    return Promise.reject(error);
});

// Add a response interceptor
http.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default http
```

### 判断登录状态进行 login 和 dashboard 页面切换

```
import React from "react";
import {
  Switch,
  HashRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import LoginAndRegistry from "./pages/LoginAndRegistry";
import PrivateRouter from "./components/PrivateRouter";
import Login from "./pages/LoginAndRegistry/Login";

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              component={() => {
                return (
                  localStorage.getItem('token') ? <Home/> : <LoginAndRegistry />
                )
              }}
            ></Route>
            <PrivateRouter path="/home" component={Home}></PrivateRouter>
          </Switch>
        </Router>
      </div>
    );
  }
}

```

### Dashboard layout 布局

```
import React from "react";
// less
import "./style.less";

// 组件
import Aside from "./Aside";

// antd
import { Layout } from "antd";

const { Sider, Header, Content } = Layout;

export default class Home extends React.Component {
  render() {
    return (
      <Layout style={{ height: '100vh' }}>
        <Header>header</Header>
        <Layout>
          <Sider style={{ width: "238"}}>
            <Aside />
          </Sider>
          <Content>content</Content>
        </Layout>
      </Layout>
    );
  }
}

```

### 路由表

```
import {
    ControlOutlined,
    UserOutlined,
    OrderedListOutlined,
    UserAddOutlined,
    TagOutlined,
    WalletOutlined
} from '@ant-design/icons'

const routes = [
    {
        path: '/home',
        name: '控制台',
        icon:  ControlOutlined,
        component: ''
    },
    {
        path: '/home/user',
        name: '用户管理',
        icon: UserOutlined,
        component: '',
        children: [
            {
                path: '/home/user/list',
                name: '用户列表',
                icon:  OrderedListOutlined,
                component: ''
            },
            {
                path: '/home/user/add',
                name: '添加用户',
                icon:  UserAddOutlined,
                component: ''
            },
        ]
    },
    {
        path: '/home/department',
        name: '部门管理',
        icon:  TagOutlined,
        component: ''
    },
    {
        path: '/home/position',
        name: '职位管理',
        icon: '',
        component:  WalletOutlined
    }
]

export default routes

```

### 根据路由表自动生成左侧菜单

```
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

```

### RouterView 路由内容切换

```
import React, {Fragment} from 'react'
// 路由
import {Switch, Route} from 'react-router-dom'

// 组件
import PrivateRouter from '../../../components/PrivateRouter'
import User from './User'
import UserAdd from './User/UserAdd'
import UserList from './User/UserList'
import Control from './Control'
import Department from './Department'
import Position from './Position'
import NotFound from '../../NotFound'

// css
import './style.less'

export default class ContentView extends React.Component {
    render() {
        return (
            <Switch>
                <PrivateRouter exact path="/home" component={Control}></PrivateRouter>
                <PrivateRouter exact path="/home/user" component={User}></PrivateRouter>
                <PrivateRouter exact path="/home/user/add" component={UserAdd}></PrivateRouter>
                <PrivateRouter exact path="/home/user/list" component={UserList}></PrivateRouter>
                <PrivateRouter exact path="/home/department" component={Department}></PrivateRouter>
                <PrivateRouter exact path="/home/position" component={Position}></PrivateRouter>
                <PrivateRouter path="*" component={NotFound}></PrivateRouter>
            </Switch>
        )
    }
}
```

### [antd Menu 组件使用] 导航菜单页面刷新的时候根据请求路径高亮显示按钮

```
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
```

### 导航菜单的显示隐藏

```
- home.jsx文件

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


- HeaderView.jsx文件
import React, { Fragment } from "react";

// icon
import {
  MenuFoldOutlined
} from '@ant-design/icons'

// css
import "./style.less";

export default class HeaderView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isCollapsed: props.isCollapsed
    }
  }

  onCollapseIconClick = () => {
    this.props.toggleCollapsed()
  }

  componentWillReceiveProps(props) {
    const {isCollapsed} = props
    this.setState({isCollapsed})
  }

  render() {
    const {isCollapsed} = this.state
    return (
      <div className="header_container">
        <div className={isCollapsed ? 'close' : 'logo'}>
          <div className="logo_img">logo</div>
        </div>
        <div className="header_content">
            <MenuFoldOutlined onClick={this.onCollapseIconClick} style={{fontSize: '24px', marginLeft: '10px'}}/>
            header
        </div>
      </div>
    );
  }
}

```
