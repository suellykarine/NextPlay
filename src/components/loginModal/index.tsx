"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import styles from "./login.module.scss";
import { LoginModalProps } from "@/types/auth";
import { LoginFormData, loginSchema } from "./validation";
import { Button } from "../button/button";

const LoginModal = ({ onClose, onSwitchToRegister }: LoginModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: yupResolver(loginSchema) });

  const router = useRouter();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (res?.error) {
        toast.error("Erro no login. Verifique suas credenciais.", {
          autoClose: 3000,
        });
      } else {
        toast.success("Login efetuado com sucesso!", {
          autoClose: 3000,
          onClose: () => {
            onClose();
            router.push("/dashboardPage" as never);
          },
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro inesperado. Tente novamente.", { autoClose: 3000 });
    } finally {
    }
  };

  return (
    <>
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <button className={styles.closeButton} onClick={onClose}>
            ✕
          </button>
          <h2>Login</h2>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputGroup}>
              <label>E-mail</label>
              <input
                className={styles.input}
                type="email"
                {...register("email")}
                placeholder="seu@email.com"
              />
              {errors.email && (
                <span className={styles.errorText}>{errors.email.message}</span>
              )}
            </div>

            <div className={styles.inputGroup}>
              <label>Senha</label>
              <input
                type="password"
                {...register("password")}
                placeholder="Sua senha"
                className={styles.input}
              />
              {errors.password && (
                <span className={styles.errorText}>
                  {errors.password.message}
                </span>
              )}
            </div>

            <Button type="submit">Entrar</Button>
          </form>

          <p className={styles.switchText}>
            Não tem uma conta?{" "}
            <button
              className={styles.switchButton}
              onClick={() => {
                onClose();
                onSwitchToRegister();
              }}
            >
              Cadastre-se
            </button>
          </p>
          <ToastContainer theme="colored" />
        </div>
      </div>
    </>
  );
};
export default LoginModal;
