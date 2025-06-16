"use client";
import { RegisterModal } from "@/components/registerModal";
import { useState } from "react";
import { LoginModal } from "../loginModal";
import styles from "./home.module.scss";

export const Home = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.playIcon} />
        <div className={styles.logoText}>NextPlay</div>
      </div>

      <div className={styles.authButtons}>
        <a className={styles.loginButton} onClick={() => setIsLoginOpen(true)}>
          Login
        </a>

        <a
          className={styles.signupButton}
          onClick={() => setIsRegisterOpen(true)}
        >
          Cadastre-se
        </a>
      </div>
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
    </div>
  );
};

export default Home;
