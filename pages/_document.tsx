import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html className="scroll-smooth">
            <Head />
            <body>
                <Main />
                <NextScript />
                <script async src="https://cdn.splitbee.io/sb.js"></script>
                <script
                    async
                    defer
                    src="https://analytics.umami.is/script.js"
                    data-website-id="e6178842-c84a-4a47-862c-c27c846b4757"
                ></script>
            </body>
        </Html>
    );
}
