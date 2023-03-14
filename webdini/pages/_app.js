import "@/styles/globals.css";
import MyLayout from "@/components/layouts/layout";
import Navbar from "@/components/Navbar/Navbar";
import Layout from "@/components/layouts/layout";


const MyApp = ({Component, pageProps})  => {

    const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)

    return getLayout(<Component {...pageProps} />)
}
export default MyApp
