import axios from 'axios';

const TOKEN_KEY = 'authToken';
const USER_INFO_KEY = 'userInfo'; // Pra poder armazenar os dados do usuário
const API_URL = 'http://localhost:8000'; 

export const login = async (email, senha) => { // Função de login, ela que vai enviar o e-mail e a senha pro back
  try {
    const response = await axios.post(`${API_URL}/login`, { email, senha }); // Função login que na página de login eu importei
    // vai enviar os dados pro back com o método POST 
    if (response.data && response.data.token && response.data.user) { 
      // Se deu ra fazer o login, e o servidor gerou um token e os dados do usuário 
      localStorage.setItem(TOKEN_KEY, response.data.token); // Eu vou salvar esse token e esses dados 
      localStorage.setItem(USER_INFO_KEY, JSON.stringify(response.data.user));
      
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`; // Pro token ser enviado automaticamente nas próx requisições 
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

export const isAuthenticated = () => { // Pra verificar se o usuário está autenticado
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

export const isAdmin = () => { // Pra quando eu for fazer a parte de usuários, que aí só os admin´s vão poder usar 
  const userInfo = getUserInfo();
 
  return userInfo && userInfo.nivel === 'admin';
};


export const setupAxiosInterceptors = () => { // Novamente pra add o token nas requisições automaticamente 
  const token = getToken();
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  
  axios.interceptors.response.use( // Resposta dos erros 
    response => response,
    error => {
      if (error.response && error.response.status === 401) {
    
      }
      return Promise.reject(error);
    }
  );
};