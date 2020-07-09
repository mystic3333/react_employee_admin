import React from "react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { UserOutlined, LockOutlined, CodepenOutlined } from "@ant-design/icons";

const layout = {
  labelCol: { offset: 1, span: 22 },
  wrapperCol: { offset: 1, span: 22 },
};
const tailLayout = {
  wrapperCol: { offset: 1, span: 22 },
};

export default class Registry extends React.Component {
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
            { required: true, message: "请输入用户名" },
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
          hasFeedback
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
          name="repassword"
          hasFeedback
          rules={[
            { required: true, message: "请输入确认密码" },
            { min: 6, message: "不能少于6位" },
            { max: 16, message: "不能超过16位" },
            ({getFieldValue}) => ({
                validator(rule, value) {
                    const pasword  = getFieldValue('password')
                    if (pasword == value) {
                        return Promise.resolve()
                    } else {
                        return Promise.reject('两次密码不一致, 请重新输入')
                    }
                }
            })
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="repassword"
          />
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
