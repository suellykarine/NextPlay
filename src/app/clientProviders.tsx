"use client";

import { StyledComponentsRegistry } from "@/lib/styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";

const queryClient = new QueryClient();

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </QueryClientProvider>
    </SessionProvider>
  );
}
