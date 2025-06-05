export type RegisterData = {
  name: string;
  email: string;
  password: string;
};

export type ApiResponse = {
  message: string;
  userId?: string;
  error?: string;
};
