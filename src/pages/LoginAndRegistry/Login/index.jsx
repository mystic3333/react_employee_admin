import React from "react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { UserOutlined, LockOutlined, CodepenOutlined } from '@ant-design/icons';

const layout = {
  labelCol: { offset: 1, span: 22 },
  wrapperCol: { offset: 1, span: 22 },
};
const tailLayout = {
  wrapperCol: { offset: 1, span: 22 },
};

export default class Login extends React.Component {
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
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="username" />
        </Form.Item>

        <Form.Item
          name="password"
          
          rules={[{ required: true, message: "Please input your password!" }]}
        
        >
          <Input.Password 
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="password"
          />
        </Form.Item>

        <Form.Item
          name="code"
          rules={[{ required: true, message: "Please input code!" }]}
        >
          <Row>
            <Col span={14}>
              <Input
              prefix={<CodepenOutlined className="site-form-item-icon"/>}
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
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
