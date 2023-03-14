import styles from "@/styles/Navbar.module.css";
import {useState} from "react";

export default function HamburgerIcon(){
    const [hamburgerView, setHamburgerView] = useState(true)

    return (
        <div className={styles.container} onClick={() => setHamburgerView(!hamburgerView)}>
            <div className={hamburgerView ? styles.bar1 : styles.bar1after}></div>
            <div className={hamburgerView ? styles.bar2 : styles.bar2after}></div>
            <div className={hamburgerView ? styles.bar3 : styles.bar3after}></div>
        </div>
    )
}