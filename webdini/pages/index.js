import {Button, Card, Image} from "antd";
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.text} style={{
                marginTop: '50px',
                marginRight: '10rem',
                marginLeft: '10rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <p>Welcome to dini's Portfolio</p>
                <a className={styles.Font} href={'about'}>Click here to get started</a>
            </div>
            <div className={styles.image}>
                <Card style={{paddingBottom: '20px', borderRadius: 1, transform: "rotate(3deg)"}}>
                    <div style={{height: 450, width: 450, overflow: "hidden"}}>
                        <Image src={"me01.jpg"} preview={false}/>
                    </div>
                </Card>
                <p className={styles.ThisIsMe}>This is me</p>
            </div>
        </div>
    );
}

Home.getLayout = function getLayout(page) {
    return (
        <main>{page}</main>
    )
}