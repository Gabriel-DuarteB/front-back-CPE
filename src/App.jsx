import "./App.css";
import { Input } from "antd"; // Importar coisas da biblioteca ant designer que instalei 
import logo from "./cpe_logo.svg";

import { AiOutlineEllipsis } from "react-icons/ai"; // Importar ícone do react icons 

function App() {

  return (

    <div>

      <div className="tela-amarela"> 

      < img src={logo} alt="Logo CPE" className="logo-icone" />

      <div className="icone-opcoes">
    <AiOutlineEllipsis size={24} />
  </div>
      
      </div>
      
      <div className="tela-preta">
        
      <button className="cadastro-botao">CADASTRO</button>

      <div className="campos-centrais"> 
      <div className="campos-inputs">  
        <Input
    type="nome"
    placeholder="Nome"
    className="campo-escrita"
  />
  <Input
    type="email"
    placeholder="E-mail"
    className="campo-escrita"
  />
  <Input  
    type="cargo"
    placeholder="Cargo"
    className="campo-escrita"
  />
  <Input.Password
    type="senha"
    placeholder="Senha"
    className="campo-escrita"
  />
  <Input
    type="repitasenha"
    placeholder="Repita sua senha"
    className="campo-escrita"
  />

<p className="frase-login">
  Já tem uma conta? Faça o login <span className="login-destaque">aqui</span>.
</p>

<button className="botao-criar-conta">CRIAR CONTA</button>

       </div>
       </div>
      </div>

      

    </div>
  );
}

export default App;
