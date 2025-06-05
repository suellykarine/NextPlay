import { ApiResponse, RegisterData } from "@/types/register-user";

export async function registerUser(data: RegisterData): Promise<ApiResponse> {
  const response = await fetch("/api/user/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || "Erro ao registrar");
  }

  return result;
}
