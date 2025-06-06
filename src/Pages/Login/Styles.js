// src/Pages/Login/Styles.js
import styled, { createGlobalStyle } from "styled-components";

export const TelaAmarela = styled.div`
  border: solid;
  height: 90px; /* Mantida a altura original */
  width: 100%;
  background-color: yellow;
  display: flex;
  /* justify-content: center; e gap: 15%; não afetam elementos position:absolute */
  position: relative; /* Para o posicionamento absoluto dos filhos */

  @media (max-width: 280px) {
    /* A media query pode precisar de ajustes se o layout dos itens absolutos mudar drasticamente */
  }
`;

export const TelaPreta = styled.div`
  position: relative;
  min-height: calc(100vh - 90px); /* Ajustado para a altura da TelaAmarela de 90px */
  background-color: black;
  display: flex; /* Para centralizar CamposCentrais */
  flex-direction: column; /* Para centralizar CamposCentrais */
  justify-content: center; /* Para centralizar CamposCentrais */
  align-items: center; /* Para centralizar CamposCentrais */
`;

export const LogoIcone = styled.img`
  position: absolute;
  top: 20px; /* (90px_barra - 50px_logo) / 2 */
  left: 40px;
  height: 50px; /* Altura do logo */
  width: auto;
  z-index: 10;

  @media (max-width: 280px) {
    height: 40px; /* Logo um pouco menor */
    top: 25px;    /* (90px_barra - 40px_logo) / 2 */
    left: 25px;
  }
`;

export const BotaoLoginTitulo = styled.button`
  position: absolute; /* Relativo à TelaPreta */
  top: 60px; /* Espaçamento do topo da TelaPreta */
  left: 50%;
  transform: translateX(-50%);
  font-size: 35px;
  color: yellow;
  border: none;
  background-color: transparent; /* Fundo transparente pois está sobre TelaPreta */

  @media (max-width: 280px) {
    font-size: 20px;
    top: 30px;
  }
`;

export const CamposCentrais = styled.div`
  width: 100%; /* Para ocupar a largura e permitir centralização dos inputs */
  max-width: 300px; /* Largura máxima dos campos de login */
  margin-top: 120px; /* Espaço para o BotaoLoginTitulo que está em top: 60px */
`;

export const CamposInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px; /* Espaçamento entre os inputs e outros elementos */
  width: 100%;
`;

export const BotaoEntrar = styled.button`
  margin-top: 15px; /* Pode ajustar ou remover se o gap de CamposInputs for suficiente */
  font-size: 25px;
  color: black;
  background-color: yellow;
  border: none;
  border-radius: 16px;
  padding: 10px 30px;
  font-weight: bold;
  font-family: 'Arial', sans-serif;
  cursor: pointer;
  width: 100%; /* Para ocupar a largura de CamposCentrais */

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 280px) {
    font-size: 18px;
    padding: 8px 20px;
  }
`;

export const FraseCadastro = styled.p`
  color: white;
  margin-top: 20px; /* Pode ajustar ou remover se o gap de CamposInputs for suficiente */
  font-size: 16px;
  text-align: center;
  font-family: 'Arial', sans-serif;

  @media (max-width: 280px) {
    font-size: 14px;
  }
`;

export const CadastroDestaque = styled.span`
  color: yellow;
  text-decoration: none;
  cursor: pointer;
  font-style: normal;
  font-family: 'Arial', sans-serif;
`;

export const EstiloCampoInput = createGlobalStyle`
  .campo-escrita {
    width: 100% !important; /* Forçar a ocupar 100% do wrapper */
    height: 40px;
    font-size: 16px;
    border-radius: 6px !important; /* Para inputs da Ant Design */
  }

  /* .ant-input-affix-wrapper { // Para o Input.Password
    border-radius: 6px !important;
    width: 100% !important;
  } */

  /* @media (max-width: 280px) { // Não mais necessário se o pai controla a largura
    .campo-escrita {
      width: 230px; 
    }
  } */
`;