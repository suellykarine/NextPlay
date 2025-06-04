"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { StyledComponentsRegistry } from "./lib/styled-components";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledComponentsRegistry>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </StyledComponentsRegistry>
    </QueryClientProvider>
  );
}
