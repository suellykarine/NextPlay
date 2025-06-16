"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./register.module.scss";
import { useRegisterUser } from "@/hooks/useRegisterUser";
import { Button } from "../button/button";
import { FormData, schema } from "./validation";

export const RegisterModal = ({
  onClose,
}: {
  onClose: () => void;
  onSwitchToLogin: () => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const mutation = useRegisterUser(() => {
    toast.success("Usuário cadastrado com sucesso!", {
      position: "top-right",
      autoClose: 2000,
    });
    reset();
    setTimeout(() => onClose(), 2000);
  });

  const onSubmit = (data: FormData) => {
    mutation.mutate({
      name: data.name,
      email: data.email,
      password: data.password,
    });
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
        <h2 className={styles.modalTitle}>Cadastre-se</h2>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Nome</label>
            <input
              type="name"
              id="name"
              placeholder="Seu nome"
              className={styles.input}
              {...register("name")}
            />
            {errors.name && (
              <span className={styles.errorText}>{errors.name.message}</span>
            )}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="seu@email.com"
              className={styles.input}
              {...register("email")}
            />
            {errors.email && (
              <span className={styles.errorText}>{errors.email.message}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Sua senha"
              className={styles.input}
              {...register("password")}
            />
            {errors.password && (
              <span className={styles.errorText}>
                {errors.password.message}
              </span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword">Confirmar senha</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirme sua senha"
              className={styles.input}
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <span className={styles.errorText}>
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <Button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? "Cadastrando..." : "Cadastrar"}
          </Button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};
