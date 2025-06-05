import { ApiResponse, RegisterData } from "@/types/register-user";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../services/user";

export function useRegisterUser(onSuccessCallback: () => void) {
  return useMutation<ApiResponse, Error, RegisterData>({
    mutationFn: registerUser,
    onSuccess: () => {
      onSuccessCallback();
    },
  });
}
