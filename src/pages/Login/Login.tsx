import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Input, Space } from "antd";
import { LockOutlined, LoginOutlined, UserOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "redux/inerface";
import { isLoadingLogin, LoginDto, loginUser } from "redux/auth";
import { REGISTER_PATH } from "constants/path";

const Login = () => {
  const dispatch = useAppDispatch();
  
  const isLoading = useAppSelector(isLoadingLogin);
  
  const handleLogin = (data: LoginDto) => {
    dispatch(loginUser(data));
  };

  return <Form
    onFinish={handleLogin}
    style={{ width: 300, margin: "auto" }}
    layout="vertical"
  >
    <Form.Item
      name="email"
      label="email"
      rules={[
        {
          required: true,
          message: "Please input your email!",
        },
      ]}
    >
      <Input prefix={<UserOutlined />} placeholder="Enter your email" />
    </Form.Item>
    <Form.Item
      name="password"
      label="Password"
      rules={[
        {
          required: true,
          message: "Please input your Password!",
        },
        {
          min: 3,
          message: "The password must be between 6 and 20 characters.",
        },
        {
          max: 20,
          message: "The password must be between 6 and 20 characters.",
        },
      ]}
    >
      <Input prefix={<LockOutlined />} type="password" placeholder="Enter your password" />
    </Form.Item>
    <Form.Item>
      <Space size={8}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          <LoginOutlined />
          Log in
        </Button>
        <span>Or</span>
        <Link to={REGISTER_PATH}>register now!</Link>
      </Space>
    </Form.Item>
  </Form>;
};

export default Login;