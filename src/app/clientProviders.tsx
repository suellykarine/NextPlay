// src/app/ClientProviders.tsx (CLIENT COMPONENT)
"use client";

import { StyledComponentsRegistry } from "@/lib/styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </QueryClientProvider>
  );
}
