import React, { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import {
  BarraNavegacaoAmarela,
  Logo,
  TextNavLinks,
  NavLinkStyled,
  ConteudoPreto,
  CarouselWrapper,
  CarouselSlider,
  CarouselImageContainer,
  ImagemCarrossel,
  Arrow,
  InfoBarraAmarela,
  TextoInfoBarra,
  InfoBarraCinza,      // Item da lista de sessão
  ColunaInfoCinza,    // InfoBarraCinza
  NomePessoaText,     // Para o nome do membro
  CargoPessoaText,    // Para o cargo do membro
  StatusText,         // Exibir a chegada e o tempo ativo
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

// Dados para as três sessões ativas 
const sessoesAtivasExemploInicial = [
  {
    _id: "sessao1",
    id_usuario: { 
      nome: "Gabriel Duarte",
      cargo: "Webdev",
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 15 - 1000 * 30).toISOString(), // 15 min e 30 seg atrás
  },
  {
    _id: "sessao2",
    id_usuario: {
      nome: "Bernardo",
      cargo: "Desenvolvedor Backend", 
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 122 - 1000 * 45).toISOString(), // 2h 2min e 45 seg atrás
  },
  {
    _id: "sessao3",
    id_usuario: {
      nome: "Gustavo",
      cargo: "Desenvolvedor Frontend",
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 5 - 1000 * 10).toISOString(), // 5 min e 10 seg atrás
  },
];

// Função para formatar o tempo em HH:MM:SS 
const formatarTempoAtivo = (totalSegundos) => {
  const horas = Math.floor(totalSegundos / 3600);
  const minutos = Math.floor((totalSegundos % 3600) / 60);
  const segundos = Math.floor(totalSegundos % 60);
  const pad = (num) => String(num).padStart(2, '0');
  return `${pad(horas)}:${pad(minutos)}:${pad(segundos)}`;
};

function Home() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0); // Para o carrossel

  // Estado para as sessões ativas e lógica de atualização 
  const [sessoesAtivas, setSessoesAtivas] = useState(
    sessoesAtivasExemploInicial.map(sessao => {
      const inicio = new Date(sessao.createdAt).getTime();
      const agora = Date.now();
      const diffSegundos = Math.floor((agora - inicio) / 1000);
      return { ...sessao, tempoAtivoSegundos: diffSegundos };
    })
  );

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

  // Função para formatar a hora de chegada 
  const formatarHoraChegada = (dataString) => {
    const data = new Date(dataString);
    return data.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  };

  // Lógica do carrossel 
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
      <BarraNavegacaoAmarela>
        <Logo src={cpeLogo} alt="CPE Logo" />
        <TextNavLinks>
          <NavLinkStyled onClick={() => navigate("/")}>HOME</NavLinkStyled>
          <NavLinkStyled onClick={() => navigate("/perfil")}>PERFIL</NavLinkStyled>
          <NavLinkStyled onClick={() => navigate("/usuarios")}>USUÁRIOS</NavLinkStyled>
        </TextNavLinks>
      </BarraNavegacaoAmarela>

      <ConteudoPreto>
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

        <InfoBarraAmarela>
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