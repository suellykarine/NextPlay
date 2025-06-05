"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

import { useRegisterUser } from "@/hooks/useRegisterUser";
import { Button } from "../ui/button";
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

        <ToastContainer />
      </ModalContent>
    </ModalOverlay>
  );
};
