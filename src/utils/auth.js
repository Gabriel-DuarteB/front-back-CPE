
import axios from 'axios';

const TOKEN_KEY = 'authToken';
const USER_INFO_KEY = 'userInfo';
const API_URL = 'http://localhost:8000'; 

export const login = async (email, senha) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, senha });
    if (response.data && response.data.token && response.data.user) {
      localStorage.setItem(TOKEN_KEY, response.data.token);
      localStorage.setItem(USER_INFO_KEY, JSON.stringify(response.data.user));
      
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      return { success: true, user: response.data.user };
    }
    
    return { success: false, message: 'Resposta inesperada do servidor.' };
  } catch (error) {
    console.error("Erro na chamada de login:", error);
   
    const message = error.response?.data?.message || 'Erro ao tentar fazer login.';
    return { success: false, message };
  }
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_INFO_KEY);
 
  delete axios.defaults.headers.common['Authorization'];

};

export const isAuthenticated = () => {
  const token = localStorage.getItem(TOKEN_KEY);
 
  return !!token;
};

export const getUserInfo = () => {
  const userInfo = localStorage.getItem(USER_INFO_KEY);
  try {
    return userInfo ? JSON.parse(userInfo) : null;
  } catch (error) {
    console.error("Erro ao parsear userInfo do localStorage:", error);
    return null;
  }
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const isAdmin = () => {
  const userInfo = getUserInfo();
 
  return userInfo && userInfo.nivel === 'admin';
};


export const setupAxiosInterceptors = () => {
  const token = getToken();
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  
  axios.interceptors.response.use(
    response => response,
    error => {
      if (error.response && error.response.status === 401) {
    
      }
      return Promise.reject(error);
    }
  );
};