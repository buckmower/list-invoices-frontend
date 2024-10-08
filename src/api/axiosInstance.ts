import axios from 'axios';

// Create an Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: 'https://altametrics-challenge-f9fb51c4a3db.herokuapp.com',  // http:localhost:3000/v1 Use environment variables for flexibility
  timeout: 5000,  // Set a timeout of 5 seconds for all requests
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',  // Default content type
  },
});

// Optional: Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Attach an Authorization header or any other custom headers if necessary
    const token = localStorage.getItem('token');  // Assuming token is stored in localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Optional: Add a response interceptor for handling errors globally
axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code within the range of 2xx triggers this function
    return response;
  },
  (error) => {
    // Any status codes outside the range of 2xx trigger this function
    if (error.response && error.response.status === 401) {
      // Unauthorized: For example, you could log out the user or redirect them to the login page
      console.log('Unauthorized access - logging out');
      // Redirect to login or clear session storage, etc.
    }
    return Promise.reject(error);  // Forward the error so it can be handled by the calling function
  }
);

export default axiosInstance;