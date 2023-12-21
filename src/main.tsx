import { theme } from "@chakra-ui/pro-theme";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

const proTheme = extendTheme(theme);
const extension = {
  colors: { ...proTheme.colors, ...proTheme.colors.blue },
};

const aiGeneratorTheme = extendTheme(extension);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={aiGeneratorTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
