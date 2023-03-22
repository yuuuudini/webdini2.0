import Sidebar from "@/components/Layout/sidebar";
import Footer from "@/components/Layout/footer";

export default function Layout({children}) {
    return (
        <div style={{display: 'flex', height: '99vh'}}>
            <Sidebar/>
            <div style={{display: 'flex', flexDirection:'column', flexGrow:1, flexShrink:1}}>
                <main style={{flexGrow:2}}>{children}</main>
                <Footer/>

            </div>
        </div>)
}