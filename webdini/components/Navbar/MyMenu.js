import styles from '../../styles/Navbar.module.css'

export default function MyMenu(){
    return(
        <div className={styles.menuStyle}>
            <div className={styles.item}><a href={'/about'}>about</a></div>
            <div className={styles.verticalDiv}></div>
            <div className={styles.item}><a href={'/works'}>works</a></div>
        </div>
    )
}