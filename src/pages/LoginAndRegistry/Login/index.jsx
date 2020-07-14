import React from "react";
import { withRouter } from "react-router-dom";
import { isEmpty, fromPairs } from "lodash";
import * as LoginApi from "../../../api/login";

import { Form, Input, Button, Checkbox, Row, Col, message, Space } from "antd";
import { UserOutlined, LockOutlined, CodepenOutlined } from "@ant-design/icons";

const layout = {
  labelCol: { offset: 1, span: 22 },
  wrapperCol: { offset: 1, span: 22 },
};
const tailLayout = {
  wrapperCol: { offset: 1, span: 22 },
};

let timer = null;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "获取验证码",
      codeLoading: false,
      codeDisable: true,
      codeFail: false,
      loginParams: {
        username: "",
        password: "",
        code: "",
      },
      codeData: [],
    };
  }

  onFinish = (values) => {
    if (timer && timer !== null) {
      this.setState({
        codeDisable: true,
      });
    }
    const { username, password, code } = values;

    LoginApi.login(values)
    .then((res) => {
      if (res && res.data.type === 'success') {
        this.props.history.replace('/home')
      } else {
        message.warning(res.data.errMsg)
      }
    })
    // this.props.history.replace('/home')
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    if (timer && timer !== null) {
      this.setState({
        codeDisable: true,
      });
    }
  };

  onChangeHandle = (e) => {
    this.setState({
      loginParams: {
        username: e.target.value,
      },
    });
  };

  codeClickHandle = (e) => {
    console.log("code click");
    const { username, password } = this.state.loginParams;
    if (isEmpty(username)) {
      message.warning("用户名不能为空");
    } else {
      this.setState({
        buttonText: "发送中...",
        codeLoading: true,
        codeDisable: true,
      });

      LoginApi.getCode()
        .then((res) => {
          console.log(res)
          this.countDown();
          message.success(`验证码: ${res.data.data.uid}`)
        })
        .catch((e) => {
          this.setState({
            buttonText: "失败请重试",
            codeDisable: false,
          });
        });
    }
  };

  countDown = () => {
    let count = 60;

    this.setState({
      codeLoading: false,
    });

    timer = setInterval(() => {
      count--;
      if (count <= 0) {
        this.setState({
          buttonText: "重新获取",
          codeDisable: false,
        });
        clearInterval(timer);
        return false;
      }

      this.setState({
        buttonText: `发送成功${count}S`,
      });
    }, 1000);
  };

  componentWillUnmount() {
    clearInterval(timer);
  }

  render() {
    const { username, password } = this.state.loginParams;
    const _this = this;
    return (
      <Form.Provider onFormChange={this.onFormChange}>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[
              { required: true, message: "请输入要用户名" },
              { min: 6, message: "不能少于6位" },
              { max: 16, message: "不能超过16位" },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (value.length >= 6) {
                    _this.setState({
                      codeDisable: false,
                    });
                    return Promise.resolve();
                  } else {
                    return Promise.reject();
                  }
                },
              }),
            ]}
          >
            <Input
              onChange={this.onChangeHandle}
              name="username"
              value={username}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="username"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: "请输入密码" },
              { min: 6, message: "不能少于6位" },
              { max: 16, message: "不能超过16位" },
            ]}
          >
            <Input.Password
              name="password"
              value={password}
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="password"
            />
          </Form.Item>

          <Form.Item
            name="code"
            rules={[{ required: true, message: "请输入验证码" }]}
          >
            <Row>
              <Col span={14}>
                <Input
                  prefix={<CodepenOutlined className="site-form-item-icon" />}
                />
              </Col>

              <Col span={9} offset={1}>
                <Space>
                  <Button
                    loading={this.state.codeLoading}
                    type="danger"
                    onClick={this.codeClickHandle}
                    disabled={this.state.codeDisable}
                  >
                    {this.state.buttonText}
                  </Button>
                </Space>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Form.Provider>
    );
  }
}

export default withRouter(Login);
