import { useState } from "react"; // Para armazenar os dados preenchidos no input 
import axios from "axios"; // Biblioteca axios (envia os dados do front pro back)
import {
  TelaAmarela,
  TelaPreta,
  LogoIcone,
  IconeOpcoes,
  BotaoCadastro,
  CamposCentrais,
  CamposInputs,
  BotaoCriarConta,
  FraseLogin,
  LoginDestaque,
  CampoWrapper
} from "./Styles";

import { Input } from "antd";
import { AiOutlineEllipsis } from "react-icons/ai";
import logo from "../../assets/cpe_logo.svg";
import { useNavigate } from "react-router-dom"; // Depois que cadastrar vai direcionar prapágina de login 

function Cadastro() {
  const navigate = useNavigate(); 

  const [nome, setNome] = useState(""); // Guarda oq a pessoa digita no campo 
  const [email, setEmail] = useState("");
  const [cargo, setCargo] = useState("");
  const [senha, setSenha] = useState("");
  const [repetirSenha, setRepetirSenha] = useState("");
  const [nivel, setNivel] = useState("");

  const handleCadastro = async () => { // Função pra enviar as coisas pro back 
    if (senha !== repetirSenha) {
      alert("As senhas não coincidem");
      return;
    }

    if (!nivel) {
      alert("Selecione um nível para o usuário.");
      return;
    }

    try {
      await axios.post("http://localhost:8000/usuarios", { // Requisição axios para a rota(URL que coloquei)
        // Posta oq coloco no front nessa rota
        nome: nome.trim(), 
        email: email.trim(), 
        cargo: cargo.trim(), 
        senha,
        nivel,
      });

      alert("Cadastro realizado com sucesso!"); // Se os dados preenchidos estiverem validos, o cadastro será realizados
      navigate("/login"); // E vai ser direcionado pra página de login 
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      
      alert("Erro ao cadastrar usuário: " + (error.response?.data?.message || ""));
    }
  };

  return ( // Interface da tela de cadastro
    <div>
      <TelaAmarela> {/* Seção da tela amarela  */}
        <LogoIcone src={logo} alt="Logo CPE" />
        <IconeOpcoes>
          <AiOutlineEllipsis size={24} />
        </IconeOpcoes>
      </TelaAmarela>

      <TelaPreta> {/* Seção da tela preta */}
        <BotaoCadastro>CADASTRO</BotaoCadastro>

        <CamposCentrais>
          <CamposInputs>
            <CampoWrapper>
              <Input
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </CampoWrapper>
            <CampoWrapper>
              <Input
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </CampoWrapper>
            <CampoWrapper>
              <Input
                placeholder="Cargo"
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
              />
            </CampoWrapper>

            <CampoWrapper>
              <select
                value={nivel}
                onChange={(e) => setNivel(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "8px",
                  border: "1px solid #d9d9d9",
                  fontSize: "16px"
                }}
              >
                <option value="">Selecione o nível</option>
                <option value="admin">Admin</option>
                <option value="membro">Membro</option>
              </select>
            </CampoWrapper>

            <CampoWrapper>
              <Input.Password
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </CampoWrapper>
            <CampoWrapper>
              <Input.Password
                placeholder="Repita sua senha"
                value={repetirSenha}
                onChange={(e) => setRepetirSenha(e.target.value)}
              />
            </CampoWrapper>

            <FraseLogin>
              Já tem uma conta? Faça o login{" "}
              <LoginDestaque onClick={() => navigate("/login")}>
                aqui
              </LoginDestaque>
              .
            </FraseLogin>

            <BotaoCriarConta onClick={handleCadastro}>
              CRIAR CONTA
            </BotaoCriarConta>
          </CamposInputs>
        </CamposCentrais>
      </TelaPreta>
    </div>
  );
}

export default Cadastro; // Pra eu poder exportar os componentes como padrão do arquivo 