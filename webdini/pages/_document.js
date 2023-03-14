import NextDocument, {Head, Html, Main, NextScript} from 'next/document'

export default class Document extends NextDocument {
    render() {
        return (
            <Html style={{background: "#141414"}} lang="en">
                <Head>
                </Head>
                <body style={{overflowX: 'hidden'}}>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}
