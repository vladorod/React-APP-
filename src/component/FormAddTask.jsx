import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';

const { TextArea } = Input;
class FormAddTask extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.addTask(values);
        this.props.showModalAddTask();
        this.props.form.resetFields();
        this.props.loadData('1');
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator('username', { rules: [{ required: true, message: 'Please input your username!' }], })(<Input
            prefix={<Icon type="user"
              style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="username"
            ref={e => this.userinput = e} />)
          }
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('email', { rules: [{ required: true, message: 'Please input your email!' }], })(<Input
            type="email"
            style={{ marginBottom: 30 + "px" }}
            placeholder="Email" />)
          }
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('text', { rules: [{ required: true, message: 'Please input your email!' }], })(<TextArea
            style={{ marginBottom: 30 + "px" }}
            placeholder="Text">
          </TextArea>)
          }
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" >Submit</Button>
        </Form.Item>
      </Form>
    )
  }
}

const formAddTask = Form.create({ name: 'add_task' })(FormAddTask);
export default formAddTask;