import styled from "styled-components";

export const TelaAmarela = styled.div`
  border: solid;
  height: 90px;
  width: 100%;
  background-color: yellow;
  display: flex;
  justify-content: center;
  gap: 15%;

  @media (max-width: 280px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const TelaPreta = styled.div`
  position: relative;
  height: 100vh;
  background-color: black;
`;

export const LogoIcone = styled.img`
  position: absolute;
  top: 30px;
  left: 40px;
  width: 215px;
  height: auto;
  z-index: 10;

  @media (max-width: 280px) {
    width: 150px;
    top: 37px;
    left: 25px;
  }
`;

export const IconeOpcoes = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  color: #000;
  cursor: pointer;
`;

export const BotaoLoginTitulo = styled.button`
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 35px;
  color: yellow;
  border: none;
  background-color: black;

  @media (max-width: 280px) {
    font-size: 20px;
    top: 30px;
  }
`;

export const CamposCentrais = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const CamposInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  gap: 15px; 
`;

export const BotaoEntrar = styled.button`
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

export const FraseCadastro = styled.p`
  color: white;
  margin-top: 20px;
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

import { createGlobalStyle } from "styled-components";

export const EstiloCampoInput = createGlobalStyle`
  .campo-escrita {
    margin-bottom: 16px;
    width: 300px;
    height: 40px;
    font-size: 16px;
  }

  @media (max-width: 280px) {
    .campo-escrita {
      width: 230px;
    }
  }
`;
