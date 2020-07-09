### 参考资料汇总

    create-react-app所有文档: https://github.com/facebook/create-react-app/tree/master/docusaurus/docs

    环境变量配置: https://www.html.cn/create-react-app/docs/adding-custom-environment-variables/

### 项目初始化

    npx create - react - app react_employee_admin

### 集成 antd

    安装:
        npm install--save antd babel - plugin -import

    配置 package.json 文件
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

module.exports =  function(app) {
    app.use(process.env.REACT_APP_API,
        createProxyMiddleware({
            target: process.env.REACT_APP_BASE_URL,
            changeOrigin: true
        })
    )
}

````


### 配置环境变量
参考资料
    https://www.html.cn/create-react-app/docs/adding-custom-environment-variables/

安装
    npm install --save-dev dotenv-cli

创建环境变量配置文件, 配置文件变量名以 REACT_APP_XXX 规范命名
    .env.development
        REACT_APP_API = "/devApi"
        REACT_APP_BASE_URL = "http://localhost:5000"
    .env.production
    .env.test

package.json文件scripts字段中加入以下配置
````

"build:dev": "dotenv -e .env.development react-app-rewired build"
"build:pro": "dotenv -e .env.production react-app-rewired build"
"build:test": "dotenv -e .env.test react-app-rewired build"

```

### axios使用
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
