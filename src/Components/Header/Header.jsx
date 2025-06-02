// src/components/Header/Header.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { logout, isAuthenticated, getUserInfo } from "../../utils/auth";
import logo from "../../assets/cpe_logo.svg";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #f5c518; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1000;
`;

const Logo = styled.img`
  height: 40px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: bold;
  color: #000;
`;

const SairButton = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const isAuth = isAuthenticated();
  const user = getUserInfo();

 
  if (location.pathname === "/login" || location.pathname === "/cadastro") {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo CPE" />
      {isAuth && (
        <UserInfo>
          {user?.nome && <span>Olá, {user.nome.split(" ")[0]}</span>}
          <SairButton onClick={handleLogout}>Sair</SairButton>
        </UserInfo>
      )}
    </HeaderContainer>
  );
}

export default Header;

