import { ReactNode } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
interface LayoutProps {
    children?: ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <>
            <Head>
                <title>poolesville_hacks</title>
                <meta
                    name="description"
                    content="Join us for poolesville_hacks 2 IN PERSON! A free 24-hour hackathon for high school students in the DC area."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                ></meta>
                <meta
                    name="keywords"
                    content="poolesville, hacks, poolesvillehacks, poolesville hacks, poolesville high school, poolesville_hacks, phs hacks, hackathon, high school hackathon, highschool"
                />

                <meta key="og_locale" property="og:locale" content="en_US" />
                <meta key="og_type" property="og:type" content="website" />
                <meta
                    key="og_site"
                    property="og:site_name"
                    content="poolesville_hacks"
                />

                <link rel="favicon" type="image/svg+xml" href="/wird.svg" />
                <link
                    rel="shortcut icon"
                    type="image/svg+xml"
                    href="/wird.svg"
                />
                <link rel="icon" type="image/svg+xml" href="/wird.svg" />
            </Head>
            <Navbar />
            <main className="overflow-x-hidden">{children}</main>
            <Footer/>
        </>
    );
}

export default Layout;
