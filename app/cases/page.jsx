import Accordion from "@/components/accordion/page"
import styles from "./page.module.css"
import Link from "next/link"
import Image from "next/image";
/*
/**|======================================
/**| pics
/**|======================================
*/
import CallIcon from "@/public/call.svg";
/*
/**|======================================
/**| code
/**|======================================
*/

export default function Cases() {
    return (
        <>
            <CallIcon className={styles.maticon} />
            <h2>ЯК ВІДБУВАЄТЬСЯ НАША РОБОТА?</h2>
            <Accordion />
            <hr />
            <div className={styles.buttonWrapper}>
                <Link href="/" className={styles.button}>
                    Повернутися на головну сторінку
                </Link>
            </div>
        </>
    )
}
