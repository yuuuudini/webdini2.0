import styles from '../../styles/Navbar.module.css'

export default function MyMenu(){
    return(
        <div style={{float:'left', width:500, display:'flex', justifyContent:'space-between', alignItems:'center', verticalAlign:'bottom'}}>
            <div className={styles.item}><a href={'/about'}>about</a></div>
            <div className={styles.verticalDiv}></div>
            <div className={styles.item}><a href={'/works'}>works</a></div>
        </div>
    )
}