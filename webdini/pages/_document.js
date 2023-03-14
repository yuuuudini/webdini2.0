import {Head, Html, Main, NextScript} from 'next/document'
import Navbar from "@/components/Navbar/navbar";

export default function Document() {
    return (
        <Html style={{background: "#141414"}} lang="en">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body style={{overflowX:'hidden'}}>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
