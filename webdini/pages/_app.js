import "@/styles/globals.css";
import Layout from '@/components/Layout/layout'

const MyApp = ({Component, pageProps, router}) => {
    return (<Layout><Component {...pageProps}/></Layout>)
}
export default MyApp
