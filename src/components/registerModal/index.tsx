"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";

import {
  CloseButton,
  ErrorText,
  Form,
  Input,
  InputGroup,
  ModalContent,
  ModalOverlay,
  ModalTitle,
} from "./styles";

import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { Button } from "../ui/button";

type RegisterData = {
  name: string;
  email: string;
  password: string;
};

type ApiResponse = {
  message: string;
  userId?: string;
  error?: string;
};

const schema = yup.object({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  password: yup.string().min(6, "Mínimo 6 caracteres").required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Senhas não coincidem")
    .required("Campo obrigatório"),
});

type FormData = yup.InferType<typeof schema>;

export const RegisterModal = ({
  onClose,
}: // onSwitchToLogin,
{
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

  const mutation: UseMutationResult<ApiResponse, Error, RegisterData> =
    useMutation({
      mutationFn: async (data: RegisterData) => {
        const response = await fetch("/api/user/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Erro ao registrar");
        }

        return result;
      },
      onSuccess: () => {
        toast.success("Usuário cadastrado com sucesso!", {
          position: "top-right",
          autoClose: 2000,
        });
        reset();
        setTimeout(() => onClose(), 2000);
      },
      onError: (err: Error) => {
        toast.error(err.message, {
          position: "top-right",
          autoClose: 3000,
        });
      },
    });

  const onSubmit = (data: FormData) => {
    console.log("data", data);
    mutation.mutate({
      email: data.email,
      password: data.password,
      name: data.name,
    });
    console.log("mutation", mutation);
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>✕</CloseButton>
        <ModalTitle>Cadastre-se</ModalTitle>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <label htmlFor="name">Nome</label>
            <Input type="name" id="name" {...register("name")} />
            {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
          </InputGroup>
          <InputGroup>
            <label htmlFor="email">E-mail</label>
            <Input type="email" id="email" {...register("email")} />
            {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          </InputGroup>

          <InputGroup>
            <label htmlFor="password">Senha</label>
            <Input type="password" id="password" {...register("password")} />
            {errors.password && (
              <ErrorText>{errors.password.message}</ErrorText>
            )}
          </InputGroup>

          <InputGroup>
            <label htmlFor="confirmPassword">Confirmar senha</label>
            <Input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <ErrorText>{errors.confirmPassword.message}</ErrorText>
            )}
          </InputGroup>

          <Button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? "Cadastrando..." : "Cadastrar"}
          </Button>
        </Form>

        {/* <SwitchButton type="button" onClick={onSwitchToLogin}>
          Já tem conta? <SwitchText>Entrar</SwitchText>
        </SwitchButton> */}

        <ToastContainer />
      </ModalContent>
    </ModalOverlay>
  );
};
