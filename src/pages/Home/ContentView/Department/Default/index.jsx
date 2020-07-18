import React from "react";
// api
import * as depApi from '../../../../../api/department'

// antd
import { Form, Input, Button, Radio } from "antd";

export default class Add extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      departmentStatus: 1
    }
  }

  onDepartmentStatusChange = (e) => {
    this.setState({
      departmentStatus: e.target.value
    })
  }

  onFinish = (values) => {
    console.log(values)
    const {departmentStatus} = this.state
    const {name, members, description} = values
    depApi.add({name, members, description, status: departmentStatus})
    .then(data => {
      console.log(data)
    })
    
  }

  onFinishFailed = ({ values, errorFields, outOfDate }) => {
    console.log(errorFields)
  }


  render() {
    const {departmentStatus} = this.state
    return (
      <Form
        labelCol={{span: 2}}
        wrapperCol={{offset: 1}}
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}
      >
        <Form.Item label="部门名称" name="name">
          <Input ></Input>
        </Form.Item>
        <Form.Item label="人员数量" name="members">
          <Input ></Input>
        </Form.Item>
        <Form.Item label="禁启用">
          <Radio.Group value={departmentStatus}  onChange={this.onDepartmentStatusChange}>
            <Radio value={0}>禁用</Radio>
            <Radio value={1}>启用</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="描述" name="description">
          <Input.TextArea ></Input.TextArea>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 12 }}>
          <Button type="primary" htmlType="submit">增加</Button>
        </Form.Item>
      </Form>
    );
  }
}
