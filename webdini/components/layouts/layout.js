import React from "react";
import Navbar from "../Navbar/Navbar";
import Head from "next/head";

const Layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            <main>{children}</main>
        </div>
    );
};
export default Layout;
