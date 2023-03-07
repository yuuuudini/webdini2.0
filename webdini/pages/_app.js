import "@/styles/globals.css";
import MyLayout from "@/components/layout";


export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <MyLayout pageProps={page}/>)

  return getLayout(<Component {...pageProps}/>)
 
}
