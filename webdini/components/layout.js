import Navbar from "./Navbar/navbar";


export default function MyLayout({children}) {

    return (
        <>
            <main style={{marginTop: '10px'}}>
                {children}
            </main>
        </>
    );
}
