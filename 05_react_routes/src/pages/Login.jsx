// src/pages/Login.jsx
import React from 'react';
import { Form, Input, Button, Typography, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import LoginInfo from '../data/useList';
import '../App.css'; // 确保你有一个全局样式文件

const { Title } = Typography;

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (values) => {
    const user = LoginInfo.find(u => u.username === values.username && u.password === values.password);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/');
    } else {
      alert('账号或密码错误');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5' }}>
      <Card style={{ width: 300, padding: 20, borderRadius: 10, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Title level={3} style={{ textAlign: 'center', marginBottom: 24 }}>Login</Title>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={handleLogin}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;