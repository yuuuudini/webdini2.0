import styles from '../../styles/Navbar.module.css'
import HamburgerIcon from "@/components/Navbar/HamburgerIcon";
import {useEffect, useState} from "react";
import Clock from 'react-live-clock'
import MyMenu from "@/components/Navbar/MyMenu";

export default function Navbar() {
    const size = useWindowSize()
    return (
        <div className={styles.body}>
            {size.width < 650 ? <HamburgerIcon/> : <MyMenu/>}
            <div className={styles.logoContainer}>
                <Clock className={styles.clock} format={'HH:mm:ss'} ticking={true} blinking={'all'} noSsr={true} timezone={'Berlin'}/>
                <div className={styles.logo}>Webdini</div>
                <img height={'70px'} src={'logodark.png'}/>
            </div>
        </div>
    )

}

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}