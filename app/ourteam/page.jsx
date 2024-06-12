import Image from 'next/image';
import Link from 'next/link';
import styles from "./page.module.css";
import Olga from "@/public/Olga_Musienko.webp"
import Olexii from "@/public/Olexii_Strashnyi.webp"
import Alina from "@/public/Alina_Svyrydenko.webp"

export default function OurTeam() {
    return (
        <div>
            <div className={styles.flexItemsCenter}>
                <h2 className={styles.h2} >НАША КОМАНДА</h2>
            </div>
            <hr className={styles.hr} />
            <div className={styles.photoAndDescr}>
                <Image src={Olga} alt="Olga_Musienko" className={styles.photo} />
                <div className={styles.description}>
                    <h3 className={styles.h3}>Мусієнко<br />Ольга Вікторівна</h3>
                    <h4 className={styles.h4}>Старший партнер<br />Адвокат</h4>
                    <h5 className={styles.h5}>
                        Освіта вища юридична, спеціальність правознавство; вища економічна, спеціальність економіка підприємства.
                        Досвід юридичної роботи у державних та приватних структурах складає понад 10 років. Спеціалізується на
                        адміністративних та цивільних відносинах, є фахівцем із вирішення господарських спорів та з питань захисту
                        бізнесу. Адвокатська практика з 2018 року.
                    </h5>
                </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.photoAndDescrRev}>
                <Image src={Olexii} alt="Olexii_Strashnyi" className={styles.photo} />
                <div className={styles.description}>
                    <h3 className={styles.h3}>Страшний<br />Олексій Олександрович</h3>
                    <h4 className={styles.h4}>Керуючий партнер<br />Адвокат</h4>
                    <h5 className={styles.h5}>
                        Освіта вища юридична, спеціальність правознавство. Спеціалізується на цивільних правовідносинах, виборчому
                        праві та процесі. Є консультантом депутата Київської міської
                        ради з юридичних питань. Діяльність у сфері права становить більше 10 років.
                        Має позитивний досвід роботи з правоохоронними органами та органами державної виконавчої служби в інтересах
                        клієнтів.
                        В 2018 році отримав свідоцтво на право зайняття адвокатською діяльністю.
                        Веде активну громадську діяльність.
                    </h5>
                </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.photoAndDescr}>
                <Image src={Alina} alt="Alina_Svyrydenko" className={styles.photo} />
                <div className={styles.description}>
                    <h3 className={styles.h3}>Свириденко<br />Аліна Олександрівна</h3>
                    <h4 className={styles.h4}>Помічник адвоката</h4>
                    <h5 className={styles.h5}>
                        З відзнакою закінчила Інститут права Київського національного університету імені Тараса
                        Шевченка за спеціалізацією - кримінальне судочинство. Активно просуває знання права в соцмережах та здійснює
                        публікації статей у профільних виданнях на актуальну тематику. Регулярно
                        підвищує свій рівень знань зокрема на базі V Школи адвокатури та адвокації від Ліги студентів АПУ та
                        Кримінально-правового форуму «Золотий Дюк» від Асоціації адвокатів України.
                    </h5>
                </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.buttonWrapper}>
                <Link href="/" className={styles.button}>
                    Повернутися на головну сторінку
                </Link>
            </div>
        </div>
    );
}