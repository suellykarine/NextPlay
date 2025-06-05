// import React from "react";
// import { ServerStyleSheet } from "styled-components";

// export function StyledComponentsServerProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const sheet = new ServerStyleSheet();

//   try {
//     const html = sheet.collectStyles(<>{children}</>);
//     const styleTags = sheet.getStyleElement();

//     return (
//       <>
//         {html}
//         {styleTags}
//       </>
//     );
//   } finally {
//     sheet.seal();
//   }
// }
