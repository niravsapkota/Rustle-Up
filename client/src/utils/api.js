import axios from 'axios';

// Function to check if service name resolves to an IP address
const isDocker = () => {
  try {
    // Attempt to resolve the service name
    const ip = new URL('http://backend:5000').hostname;
    // If resolution succeeds, return true (indicating Docker environment)
    return !!ip;
  } catch (error) {
    // If resolution fails, return false (indicating non-Docker environment)
    return false;
  }
};

// Set base URL based on environment
const baseURL = isDocker() ? 'http://backend:5000' : 'http://localhost:5000';

const instance = axios.create({
  baseURL: baseURL,
});

export default instance;
