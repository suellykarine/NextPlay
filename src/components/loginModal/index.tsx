"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

import {
  CloseButton,
  ErrorText,
  Form,
  Input,
  InputGroup,
  ModalContent,
  ModalOverlay,
  SwitchButton,
  SwitchText,
} from "./style";

import { LoginModalProps } from "@/types/auth";
import { Button } from "../ui/button";
import { LoginFormData, loginSchema } from "./validation";

export const LoginModal = ({
  onClose,
  onSwitchToRegister,
}: LoginModalProps) => {
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
            router.push("/");
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
      <ModalOverlay>
        <ModalContent>
          <CloseButton onClick={onClose}>✕</CloseButton>
          <h2>Login</h2>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputGroup>
              <label>E-mail</label>
              <Input
                type="email"
                {...register("email")}
                placeholder="seu@email.com"
              />
              {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
            </InputGroup>

            <InputGroup>
              <label>Senha</label>
              <Input
                type="password"
                {...register("password")}
                placeholder="Sua senha"
              />
              {errors.password && (
                <ErrorText>{errors.password.message}</ErrorText>
              )}
            </InputGroup>

            <Button type="submit">Entrar</Button>
          </Form>

          <SwitchText>
            Não tem uma conta?{" "}
            <SwitchButton
              onClick={() => {
                onClose();
                onSwitchToRegister();
              }}
            >
              Cadastre-se
            </SwitchButton>
          </SwitchText>
          <ToastContainer theme="colored" />
        </ModalContent>
      </ModalOverlay>
    </>
  );
};
