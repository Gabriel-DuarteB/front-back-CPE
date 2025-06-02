import { useState } from "react";
import axios from "axios";
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
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cargo, setCargo] = useState("");
  const [senha, setSenha] = useState("");
  const [repetirSenha, setRepetirSenha] = useState("");
  const [nivel, setNivel] = useState("");

  const handleCadastro = async () => {
    if (senha !== repetirSenha) {
      alert("As senhas não coincidem");
      return;
    }

    if (!nivel) {
      alert("Selecione um nível para o usuário.");
      return;
    }

    try {
      await axios.post("http://localhost:8000/usuarios", {
        // .trim() remove espaços em branco
        nome: nome.trim(), 
        email: email.trim(), 
        cargo: cargo.trim(), 
        senha,
        nivel,
      });

      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      
      alert("Erro ao cadastrar usuário: " + (error.response?.data?.message || ""));
    }
  };

  return (
    <div>
      <TelaAmarela>
        <LogoIcone src={logo} alt="Logo CPE" />
        <IconeOpcoes>
          <AiOutlineEllipsis size={24} />
        </IconeOpcoes>
      </TelaAmarela>

      <TelaPreta>
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

export default Cadastro;