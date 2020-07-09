import React from "react";
import * as LoginApi from "../../../api/login";
// import axios from 'axios'

import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { UserOutlined, LockOutlined, CodepenOutlined } from "@ant-design/icons";

const layout = {
  labelCol: { offset: 1, span: 22 },
  wrapperCol: { offset: 1, span: 22 },
};
const tailLayout = {
  wrapperCol: { offset: 1, span: 22 },
};

export default class Login extends React.Component {
  onSubmitHandle = () => {
    // axios.get('http://localhost:5000/user/login')
    LoginApi.login()
  };

  onFinish = (values) => {
    console.log("Success:", values);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    return (
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
          ]}
        >
          <Input
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

            <Col span={4} offset={1}>
              <Button type="danger">获取验证码</Button>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
            block
            onClick={this.onSubmitHandle}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
