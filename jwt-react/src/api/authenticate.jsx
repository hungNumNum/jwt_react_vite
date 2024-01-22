import axios from 'axios';

let authToken = null;

const saveTokenToLocalStorage = (token) => {
  localStorage.setItem('jwtToken', token);
  authToken = token;
};

const extractUserInfoFromToken = (token) => {
  try {
    const jwtPayload = token.split(' ')[1];
    const decodedToken = atob(jwtPayload);
    const userInfo = JSON.parse(decodedToken);
    return userInfo;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const sendAuthenticatedRequest = async (url, method = 'GET', data = null) => {
  try {
    const token = localStorage.getItem('jwtToken');

    if (!token) {
      // Xử lý khi không có token
      // chuyển hướng về trang login, sử dụng <Link to="/login" />
      return null;
    }

    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    const response = await axios({
      url,
      method,
      headers,
      data,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem('jwtToken');
  authToken = null;
};

const userHasRole = (userInfo, requiredRole) => {
  return userInfo && userInfo.role === requiredRole;
};

// kiểm tra xem token có lưu trong localStorage không
const storedToken = localStorage.getItem('jwtToken');
if (storedToken) {
  authToken = storedToken;
}

export {
  saveTokenToLocalStorage,
  extractUserInfoFromToken,
  sendAuthenticatedRequest,
  logout,
  userHasRole,
};
