"use client";

import React from "react";
import { StyleSheetManager } from "styled-components";

export function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  if (typeof window !== "undefined") {
    // No cliente só renderiza as crianças direto
    return <>{children}</>;
  }

  // No servidor envolve para styled-components capturar estilos
  return <StyleSheetManager>{children}</StyleSheetManager>;
}
