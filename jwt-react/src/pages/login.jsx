import React, { useState } from 'react';
import { authenticate } from '../api/axios'; 
import { saveTokenToLocalStorage, logout } from '../api/authenticate'; 
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await authenticate(username, password);

      // Lưu token vào localStorage 
      saveTokenToLocalStorage(response.data.token);

      // Xử lý kết quả từ server (response)
      console.log('Đăng nhập thành công:', response);
    } catch (error) {
      // Xử lý lỗi
      console.error('Đăng nhập thất bại:', error);
    }
  };

  const handleLogout = async () => {
    logout();
    //sau thành công chuyển hướng về trang chủ
  };
  return (
    <div>
      <h1>Login</h1>
      <label>Username:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Login;
