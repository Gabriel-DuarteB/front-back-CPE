import React, { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom"; // Hook (pra navegar entre as páginas )

import { logout } from '../../utils/auth'; 
import {  // Importação dos componentes estilizados no Styles.js - Faço isso pelo Styles Components 
  BarraNavegacaoAmarela, // header 
  Logo,
  TextNavLinks, // Link pras páginas (HOME, PÉRFIL, USUÁRIOS)
  NavLinkStyled, // Pra poder estilizar cada página
  BotaoSair, 
  ConteudoPreto,
  CarouselWrapper,
  CarouselSlider,
  CarouselImageContainer,
  ImagemCarrossel,
  Arrow,
  InfoBarraAmarela,
  TextoInfoBarra,
  InfoBarraCinza,     
  ColunaInfoCinza,   
  NomePessoaText,    
  CargoPessoaText,   
  StatusText,       
} from "./Styles";

import cpeLogo from "../../assets/cpe_logo.svg";
import valorEspiritoEngenheiro from "../../assets/valorEspiritoEngenheiro.jpg";
import valorExcelencia from "../../assets/valorExcelencia.jpg";
import valorResponsabilidadeSocial from "../../assets/valorResponsabilidadeSocial.jpg";

const carouselImages = [
  { src: valorEspiritoEngenheiro, alt: "Valor Espírito Engenheiro" },
  { src: valorExcelencia, alt: "Valor Excelência" },
  { src: valorResponsabilidadeSocial, alt: "Valor Responsabilidade Social" },
];

const sessoesAtivasExemploInicial = [ // Sessões, mostrar pro Bernardo pra ver se pode 
  {
    _id: "sessao1",
    id_usuario: { 
      nome: "Gabriel Duarte",
      cargo: "Webdev",
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 15 - 1000 * 30).toISOString(),
  },
  {
    _id: "sessao2",
    id_usuario: {
      nome: "Bernardo",
      cargo: "Desenvolvedor Backend", 
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 122 - 1000 * 45).toISOString(),
  },
  {
    _id: "sessao3",
    id_usuario: {
      nome: "Gustavo",
      cargo: "Desenvolvedor Frontend",
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 5 - 1000 * 10).toISOString(),
  },
];

const formatarTempoAtivo = (totalSegundos) => { // Calculo do tempo que as sessoas estão ativas 
  const horas = Math.floor(totalSegundos / 3600);
  const minutos = Math.floor((totalSegundos % 3600) / 60);
  const segundos = Math.floor(totalSegundos % 60);
  const pad = (num) => String(num).padStart(2, '0');
  return `${pad(horas)}:${pad(minutos)}:${pad(segundos)}`;
};

function Home() {
  const navigate = useNavigate(); // Hook ( redirecionar as páginas )
  const [currentIndex, setCurrentIndex] = useState(0); 

  const [sessoesAtivas, setSessoesAtivas] = useState(
    sessoesAtivasExemploInicial.map(sessao => {
      const inicio = new Date(sessao.createdAt).getTime();
      const agora = Date.now();
      const diffSegundos = Math.floor((agora - inicio) / 1000);
      return { ...sessao, tempoAtivoSegundos: diffSegundos };
    })
  );

  
  const handleLogout = () => { // Função pra quando eu clicar em sair, o usuário ser deslogado 
    logout(); // limpa o token/sessão do usuário 
    navigate('/login'); // direcionado pra página de login 
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSessoesAtivas(prevSessoes =>
        prevSessoes.map(sessao => {
          const inicio = new Date(sessao.createdAt).getTime();
          const agora = Date.now();
          const diffSegundos = Math.floor((agora - inicio) / 1000);
          return { ...sessao, tempoAtivoSegundos: diffSegundos };
        })
      );
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formatarHoraChegada = (dataString) => {
    const data = new Date(dataString);
    return data.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? carouselImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === carouselImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <BarraNavegacaoAmarela> {/* Componente estilizado pra parte amarela de cima */}
        <Logo src={cpeLogo} alt="CPE Logo" onClick={() => navigate('/')} />
        <TextNavLinks>
          {/* Lik pras páginas que serão direcionadas */}
          <NavLinkStyled onClick={() => navigate("/")}>HOME</NavLinkStyled>
          <NavLinkStyled onClick={() => navigate("/perfil")}>PERFIL</NavLinkStyled>
          <NavLinkStyled onClick={() => navigate("/usuarios")}>USUÁRIOS</NavLinkStyled>
        </TextNavLinks>
        
        <BotaoSair onClick={handleLogout}>SAIR</BotaoSair>
        {/* Chama a função logout que vai deslogar a pessoa */}
      </BarraNavegacaoAmarela>

      <ConteudoPreto> {/* Componente estilizado pra parte preta */}
        <CarouselWrapper>
          <Arrow direction="left" onClick={goToPrevious}>&#10094;</Arrow>
          <CarouselSlider style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {carouselImages.map((image, index) => (
              <CarouselImageContainer key={index}>
                <ImagemCarrossel src={image.src} alt={image.alt} />
              </CarouselImageContainer>
            ))}
          </CarouselSlider>
          <Arrow direction="right" onClick={goToNext}>&#10095;</Arrow>
        </CarouselWrapper>

        <InfoBarraAmarela> {/* Componente estilizado pra linha amarela */}
          <TextoInfoBarra>MEMBRO</TextoInfoBarra>
          <TextoInfoBarra>CHEGADA</TextoInfoBarra>
          <TextoInfoBarra>TEMPO</TextoInfoBarra> 
        </InfoBarraAmarela>

        
        {sessoesAtivas.map((sessao) => (
          <InfoBarraCinza key={sessao._id} style={{ marginBottom: '10px' }}> 
            <ColunaInfoCinza>
              <NomePessoaText>{sessao.id_usuario.nome}</NomePessoaText>
              <CargoPessoaText>{sessao.id_usuario.cargo}</CargoPessoaText>
            </ColunaInfoCinza>
            <ColunaInfoCinza>
              <StatusText>{formatarHoraChegada(sessao.createdAt)}</StatusText>
            </ColunaInfoCinza>
            <ColunaInfoCinza>
              <StatusText>{formatarTempoAtivo(sessao.tempoAtivoSegundos)}</StatusText>
            </ColunaInfoCinza>
          </InfoBarraCinza>
        ))}
      </ConteudoPreto>
    </>
  );
}

export default Home;