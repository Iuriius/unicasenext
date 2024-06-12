import Link from 'next/link'
import styles from "./page.module.css"
import Image from "next/image"
import call from "@/public/call.svg";
import mail from "@/public/mail.svg";
import schedule from "@/public/schedule.svg";
import thumbUp from "@/public/thumbUp.svg";
import locationCity from "@/public/locationCity.svg";

export default function Contacts() {
    return (
        <>
            <h2>НАШІ КОНТАКТИ</h2>
            <div className={styles.phoneandmail}>
                <div>
                    <h2>ТЕЛЕФОНУЙТЕ</h2>
                    <div className={styles.flexContactlink}>
                        <a className={styles.a} href="tel:%2B380935378674"><Image className={styles.maticon} src={call} alt="call" />+38 (093) 537 86 74</a>
                    </div>
                    <div className={styles.flexContactlink}>
                        <a className={styles.a} href="tel:%2B380679981718"><Image className={styles.maticon} src={call} alt="call" />+38 (067) 998 17 18</a>
                    </div>
                    <div className={styles.flexContactlink}>
                        <a className={styles.a} href="tel:%2B380673239927"><Image className={styles.maticon} src={call} alt="call" />+38 (067) 323 99 27</a>
                    </div>
                </div>
                <div>
                    <h2>АБО НАПИШІТЬ НАМ</h2>
                    <div className={styles.flexContactlink}>
                        <a className={styles.a} href="mailto:aounicase@gmail.com"><Image className={styles.maticon} src={mail} alt="mail" />на електронну пошту</a>
                    </div>
                </div>
            </div>

            <h2>ЧАС РОБОТИ ОФІСУ</h2>
            <Image className={styles.maticon} src={schedule} alt="schedule" />
            <p>Пн-Пт: 10:00–18:00</p>
            <p>Вихідні та святкові дні:</p>
            <p>За домовленістю</p>

            <Image className={styles.maticon} src={thumbUp} alt="thumbUp" />
            <h2>МИ В СОЦМЕРЕЖАХ</h2>
            <div className={styles.quickaccess}>
                <div>
                    <a className={styles.a} href="https://www.instagram.com/aounicase/" target="_blank">
                        <Image className={styles.icon} src="instagram.svg" alt="instagram" width={48} height={48} />
                    </a>
                </div>
                <div>
                    <a className={styles.a} href="https://t.me/%2B380935378674" target="_blank">
                        <Image className={styles.icon} src="telegram.svg" alt="telegram" width={48} height={48} />
                    </a>
                </div>
                <div className="vibermob">
                    <a className={styles.a} href="viber://add?number=%2B380935378674" target="_blank">
                        <Image className={styles.icon} src="viber.svg" alt="viber" width={48} height={48} />
                    </a>
                </div>
                <div className="viberdesk">
                    <a className={styles.a} href="viber://chat?number=%2B380935378674" target="_blank">
                        <Image className={styles.icon} src="viber.svg" alt="viber" width={48} height={48} />
                    </a>
                </div>
                <div>
                    <a className={styles.a} href="https://www.tiktok.com/@unicase_" target="_blank">
                        <Image className={styles.icon} src="tiktok.svg" alt="tiktok" width={48} height={48} />
                    </a>
                </div>
            </div>

            <Image className={styles.maticon} src={locationCity} alt="locationCity" />
            <h2>ЯК НАС ЗНАЙТИ?</h2>
            <div className={styles.flexcontacts}>
                <a className={styles.a} href="https://maps.app.goo.gl/Ws6oGK58aTAd3RXn6" target="_blank"><mat-icon fontIcon="location_on" />м. Київ,
                    проспект Берестейський, 93</a>
            </div>
            <br />
            <iframe className={styles.iframe}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.1940224695873!2d30.378006088744385!3d50.456111598348635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cd7fded78d39%3A0x225e02813505374e!2z0K7QvdGW0LrQtdC50YE!5e0!3m2!1sen!2sua!4v1716126277381!5m2!1sen!2sua"
                style={{ border: '0.5rem solid #FFD600' }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <hr />
            <div className={styles.buttonWrapper}>
                <Link href="/" className={styles.button}>
                    Повернутися на головну сторінку
                </Link>
            </div>
        </>
    )
}