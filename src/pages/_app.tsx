import { theme } from "@chakra-ui/pro-theme";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

const proTheme = extendTheme(theme);
const extension = {
  colors: { ...proTheme.colors, ...proTheme.colors.blue },
};

const aiGeneratorTheme = extendTheme(extension);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={aiGeneratorTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
