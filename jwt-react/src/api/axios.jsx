import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8000/api/jbs/authenticate';

const authenticate = (username, password) => {
  return axios.post(REST_API_BASE_URL, { username, password });
};

export { authenticate };
