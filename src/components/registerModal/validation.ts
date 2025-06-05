import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  password: yup.string().min(6, "Mínimo 6 caracteres").required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Senhas não coincidem")
    .required("Campo obrigatório"),
});

export type FormData = yup.InferType<typeof schema>;
