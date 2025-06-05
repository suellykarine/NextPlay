import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  password: yup.string().min(6, "Mínimo 6 caracteres").required(),
});

export type LoginFormData = yup.InferType<typeof loginSchema>;
