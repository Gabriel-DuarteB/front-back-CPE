import styled from "styled-components"; // Biblioteca pra fazer a estilização (CSS) com JavaScript 
// Importa styled que usei pra criar componentes React 

export const TelaAmarela = styled.div` // Cria um componente chamado TelaAmarela que internamente e uma div(agrupar tags)
  border: solid;
  height: 90px; 
  width: 100%;
  background-color: yellow;
  display: flex;
  
  position: relative; 

  @media (max-width: 280px) {
 
  }
`;

export const TelaPreta = styled.div`
  position: relative;
  min-height: calc(100vh - 90px); 
  background-color: black;
  display: flex; /* Para centralizar */
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
`;

export const LogoIcone = styled.img`
  position: absolute;
  top: 20px; 
  left: 40px;
  height: 50px; 
  width: auto;
  z-index: 10;

  @media (max-width: 280px) {
    height: 40px; 
    top: 25px;    
    left: 25px;
  }
`;

export const IconeOpcoes = styled.div`
  position: absolute;
  top: 33px; 
  right: 16px;
  color: #000;
  cursor: pointer;
  z-index: 10;
`;

export const BotaoCadastro = styled.button`
  position: absolute; 
  top: 60px; 
  left: 50%;
  transform: translateX(-50%);
  font-size: 35px;
  color: yellow;
  border: none;
  background-color: transparent; 

  @media (max-width: 280px) {
    font-size: 20px;
    top: 30px;
  }
`;

export const CamposCentrais = styled.div`

  width: 100%; 
  max-width: 600px; 
  margin-top: 120px; 
`;

export const CamposInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const BotaoCriarConta = styled.button`
  margin-top: 15px;
  font-size: 25px;
  color: black;
  background-color: yellow;
  border: none;
  border-radius: 16px;
  padding: 10px 30px;
  font-weight: bold;
  font-family: 'Arial', sans-serif;
  cursor: pointer;

  @media (max-width: 280px) {
    font-size: 18px;
    padding: 8px 20px;
  }
`;

export const FraseLogin = styled.p`
  color: white;
  margin-top: 20px;
  font-size: 16px;
  text-align: center;
  font-family: 'Arial', sans-serif;

  @media (max-width: 280px) {
    font-size: 14px;
  }
`;

export const LoginDestaque = styled.span`
  color: yellow;
  text-decoration: none;
  cursor: pointer;
  font-style: normal;
  font-family: 'Arial', sans-serif;
`;

export const CampoWrapper = styled.div`
  margin: 13px 0;
  width: 100%; 


`;