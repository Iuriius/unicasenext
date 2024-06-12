import Accordion from "@/components/accordion/page"
import styles from "./page.module.css"
import Link from "next/link"
import Image from "next/image";
/*
/**|======================================
/**| pics
/**|======================================
*/
import call from "@/public/call.svg"
import gavel from "@/public/gavel.svg";
import military from "@/public/military.svg";
import handshake from "@/public/handshake.svg";
import fact from "@/public/fact.svg";
import diversity from "@/public/diversity.svg";
import reg from "@/public/reg.svg";
import balance from "@/public/balance.svg";
/*
/**|======================================
/**| code
/**|======================================
*/
export default function Cases() {
    return (
        <>
            <br />
            <Image src={call} />
            <h2>ЯК ВІДБУВАЄТЬСЯ НАША РОБОТА?</h2>
            <Accordion />

            <h2>ОТРИМАЙТЕ ЮРИДИЧНУ ДОПОМОГУ</h2>
            <div className={styles.cardscontainer}>
                <div className={styles.card}><Image src={military} />
                    <h3>ВІЙСЬКОВЕ ПРАВО</h3>
                    <p>оформлення відстрочок, підготовка військових процесуальних документів, вирішення спорів, захист в суді</p>
                </div>
                <div className={styles.card}><Image src={handshake} />
                    <h3>ЦИВІЛЬНЕ ПРАВО<br />ТА ПРОЦЕС</h3>
                    <p>вирішення спорів, укладення договорів тощо</p>
                </div>
                <div className={styles.card}><Image src={fact} />
                    <h3>ГОСПОДАРСЬКЕ ПРАВО<br />ТА ПРОЦЕС</h3>
                    <p>супровід господарської діяльності, вирішення спорів, процесуальна документація</p>
                </div>
                <div className={styles.card}><Image src={diversity} />
                    <h3>СІМЕЙНЕ ПРАВО</h3>
                    <p>процес розлучення, призначення аліментів, укладення договорів, шлюбного контракту</p>
                </div>
                <div className={styles.card}><Image src={gavel} />
                    <h3>КРИМІНАЛЬНЕ ПРАВО<br />ТА ПРОЦЕС</h3>
                    <p>супровід на слідчих розшукових діях, захист у суді, формування лінії захисту</p>
                </div>
                <div className={styles.card}><Image src={reg} />
                    <h3>ВИБОРЧЕ ПРАВО</h3>
                    <p>супровід виборчої компанії, формування стратегії</p>
                </div>
                <div className={styles.card}><Image src={balance} />
                    <h3>АДМІНІСТРАТИВНЕ ПРАВО<br />ТА ПРОЦЕС</h3>
                    <p>захист осіб, які притягаються до адміністративної відповідальності, вирішення спорів з органами публічної,
                        державної
                        влади, стягнення коштів з державного бюджету</p>
                </div>
            </div>
            <hr />
            <div className={styles.buttonWrapper}>
                <Link href="/" className={styles.button}>
                    Повернутися на головну сторінку
                </Link>
            </div>
        </>
    )
}
