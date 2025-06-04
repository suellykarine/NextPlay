// src/app/layout.tsx (SERVER COMPONENT)
import ClientProviders from "./clientProviders";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
