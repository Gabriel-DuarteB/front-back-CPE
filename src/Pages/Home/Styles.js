import styled from "styled-components";


export const BarraNavegacaoAmarela = styled.div`
  border: solid;
  height: 90px;
  width: 100%;
  background-color: yellow;
  display: flex;
  align-items: center;
  
  padding: 0 35px; 
  box-sizing: border-box;
  position: relative; 

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
`;

export const Logo = styled.img`
  height: 50px;

`;

// (HOME, PERFIL, USUÁRIOS)
export const TextNavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 260px; // Espaçamento entre HOME, PERFIL, USUÁRIOS

  position: absolute; 
  left: 50%; 
  top: 50%; 
  transform: translate(-50%, -50%); 

  @media (max-width: 768px) {
    position: static; 
    transform: none; 
    flex-direction: column; 
    gap: 15px; 
    
  }
`;


export const NavLinkStyled = styled.span`
  font-size: 1.3em;
  color: black;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// Tela preta
export const ConteudoPreto = styled.div`
  position: relative;
  min-height: calc(100vh - 90px);
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 20px; 
  box-sizing: border-box;
`;

// Carrossel
export const CarouselWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  max-width: 90%;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(255, 255, 0, 0.2);
  margin-bottom: 25px; 

  @media (max-width: 480px) {
    width: 300px;
    height: 300px;
  }
`;

export const CarouselSlider = styled.div`
  display: flex;
  height: 100%;
  transition: transform 0.5s ease-in-out;
`;

export const CarouselImageContainer = styled.div`
  min-width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export const ImagemCarrossel = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: yellow;
  color: black;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  z-index: 10;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #e6e600;
  }

  ${(props) => (props.direction === "left" ? "left: 10px;" : "right: 10px;")}
`;

// Barra amarela (MEMBRO, CHEGADA, TEMPO)
export const InfoBarraAmarela = styled.div`
  background-color: yellow;
  padding: 12px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border-radius: 8px;
  width: 480px;
  max-width: 95%;
  box-sizing: border-box;
  margin-bottom: 5px; // Espaço para a barra cinza abaixo

  @media (max-width: 480px) {
    width: 340px;
    gap: 20px;
    padding: 10px 15px;
  }
`;

export const TextoInfoBarra = styled.span`
  font-size: 1.3em;
  color: black;
  font-weight: bold;
  text-align: center;
  flex: 1; // Para que cada item o mesmo espaço e o gap funcione bem
`;

// Barra cinza
export const InfoBarraCinza = styled.div`
  background-color: #e0e0e0; 
  padding: 15px 20px; 
  display: flex;
  justify-content: center; // Alinha as colunas com a barra amarela
  align-items: flex-start; // Alinha o topo das colunas
  gap: 30px; 
  border-radius: 8px;
  width: 480px; 
  max-width: 95%;
  box-sizing: border-box;

  @media (max-width: 480px) {
    width: 340px;
    gap: 20px;
    padding: 12px 15px;
    
  }
`;

export const ColunaInfoCinza = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1; 
  min-width: 0; 
`;

export const NomePessoaText = styled.p`
  font-size: 1.1em;
  color: #2c3e50; 
  font-weight: bold;
  margin: 0 0 3px 0; 
  line-height: 1.3;
`;

export const CargoPessoaText = styled.p`
  font-size: 0.95em;
  color: #34495e; 
  margin: 0;
  line-height: 1.3;
`;

export const StatusText = styled.p`
  font-size: 1.1em;
  color: #2c3e50;
  font-weight: bold;
  margin: 0;
  line-height: 1.3; 
`; 