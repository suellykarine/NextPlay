"use client";

import { queryClient } from "@/lib/react-query";
import StyledComponentsRegistry from "@/lib/styled-registry";
import { QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <QueryClientProvider client={queryClient}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </QueryClientProvider>
      </body>
    </html>
  );
}
