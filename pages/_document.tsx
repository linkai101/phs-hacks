import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html className="scroll-smooth">
            <Head />
            <body>
                <Main />
                <NextScript />
                <script async src="https://cdn.splitbee.io/sb.js"></script>
            </body>
        </Html>
    );
}
