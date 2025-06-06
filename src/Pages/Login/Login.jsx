import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { login as authLogin } from "../../utils/auth"; 



import { // Importação dos componentes estilizados no Styles 
  TelaAmarela,
  TelaPreta,
  LogoIcone,
 
  BotaoLoginTitulo,
  CamposCentrais,
  CamposInputs,
  BotaoEntrar,
  FraseCadastro,
  CadastroDestaque
} from "./Styles"; 
import { Input } from "antd";

import logo from "../../assets/cpe_logo.svg"; 

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState(""); // Estados pra guardar as coisas digitadas nos campos 
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); 

  const from = location.state?.from?.pathname || "/"; 

  const handleLogin = async () => {
    if (!email || !senha) {
      setError("Por favor, preencha e-mail e senha.");
      return;
    }
    setLoading(true);
    setError(""); 

    try {
      const result = await authLogin(email.trim(), senha); // Chama a função de login que faz a requisição POST para o back 

      if (result.success) {
        alert("Login realizado com sucesso!");
        navigate(from, { replace: true }); // vai direcionar pra página home 
      } else {
        setError(result.message || "E-mail ou senha inválidos.");
      }
    } catch (err) { 
      console.error("Erro inesperado durante o login:", err);
      setError("Ocorreu um erro. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
     
      <TelaAmarela>
        <LogoIcone src={logo} alt="Logo CPE" />
       
      </TelaAmarela>
      <TelaPreta>
        <BotaoLoginTitulo>LOGIN</BotaoLoginTitulo>
        <CamposCentrais>
          <CamposInputs>
            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
            <Input
              placeholder="E-mail"
              className="campo-escrita" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              onPressEnter={!loading ? handleLogin : undefined}
            />
            <Input.Password
              placeholder="Senha"
              className="campo-escrita" 
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              disabled={loading}
              onPressEnter={!loading ? handleLogin : undefined}
            />
            <FraseCadastro>
              Ainda não tem uma conta?{" "}
              <CadastroDestaque onClick={() => navigate("/cadastro")}>
                Cadastre-se
              </CadastroDestaque>
              .
            </FraseCadastro>
            <BotaoEntrar onClick={handleLogin} disabled={loading}>
              {loading ? "Entrando..." : "ENTRAR"}
            </BotaoEntrar>
          </CamposInputs>
        </CamposCentrais>
      </TelaPreta>
    </div>
  );
}

export default Login;