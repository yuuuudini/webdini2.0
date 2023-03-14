import "@/styles/globals.css";
import MyLayout from "@/components/layout";
import Navbar from "@/components/Navbar/navbar";


export default function MyApp({Component, pageProps}) {

        return (<>
        <Navbar/>
        <Component {...pageProps}/>
        </>)

}
