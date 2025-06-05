"use client";
import { RegisterModal } from "@/components/registerModal";
import { useState } from "react";
import { LoginModal } from "../loginModal";
import {
  AuthButtons,
  Container,
  LoginButton,
  LogoContainer,
  LogoText,
  PlayIcon,
  SignupButton,
} from "./styles";

export const Home = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <Container>
      <LogoContainer>
        <PlayIcon />
        <LogoText>NextPlay</LogoText>
      </LogoContainer>

      <AuthButtons>
        <LoginButton onClick={() => setIsLoginOpen(true)}>Login</LoginButton>
        <SignupButton onClick={() => setIsRegisterOpen(true)}>
          Cadastre-se
        </SignupButton>
      </AuthButtons>
      {isRegisterOpen && (
        <RegisterModal
          onClose={() => setIsRegisterOpen(false)}
          onSwitchToLogin={() => {
            setIsRegisterOpen(false);
            setIsLoginOpen(true);
          }}
        />
      )}

      {isLoginOpen && (
        <LoginModal
          onClose={() => setIsLoginOpen(false)}
          onSwitchToRegister={() => {
            setIsLoginOpen(false);
            setIsRegisterOpen(true);
          }}
        />
      )}
    </Container>
  );
};

export default Home;
