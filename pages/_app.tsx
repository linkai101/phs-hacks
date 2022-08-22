import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
    const theme = extendTheme({
        styles: {
            global: (props: any) => ({
                body: {
                    bg: "",
                },
            }),
        },
        colors: {
            yellow: {
                500: "#F6E05E",
            },
        },
    });
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
