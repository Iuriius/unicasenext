import styles from "./page.module.css";

export default function Accordion() {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={`${styles.tab} ${styles.blue}`}>
                    <input id="tab-four" type="radio" name="tabs2" />
                    <label htmlFor="tab-four">1. Консультація</label>
                    <div className={styles.tabContent}>
                        <p>Ми ретельно аналізуємо всю інформацію, щоб надати Вам об'єктивну юридичну оцінку та рекомендації.</p>
                    </div>
                </div>
                <div className={`${styles.tab} ${styles.blue}`}>
                    <input id="tab-five" type="radio" name="tabs2" />
                    <label htmlFor="tab-five">2. Розробка стратегії</label>
                    <div className={styles.tabContent}>
                        <p>На основі отриманих від Вас даних ми розробляємо індивідуальну стратегію, спрямовану на досягнення Ваших цілей. Ми враховуємо всі можливі варіанти та ризики.</p>
                    </div>
                </div>
                <div className={`${styles.tab} ${styles.blue}`}>
                    <input id="tab-six" type="radio" name="tabs2" />
                    <label htmlFor="tab-six">3. Збір та подання документів</label>
                    <div className={styles.tabContent}>
                        <p>Наші досвідчені юристи виконають роботу відповідно до розробленої стратегії.</p>
                    </div>
                </div>
                <div className={`${styles.tab} ${styles.blue}`}>
                    <input id="tab-seven" type="radio" name="tabs2" />
                    <label htmlFor="tab-seven">4. Контроль справи</label>
                    <div className={styles.tabContent}>
                        <p>Систематичне відстеження та оновлення щодо ходу справи. Наш юрист забезпечує постійний моніторинг справи, веде документацію та виконує необхідні кроки для досягнення поставленої мети.</p>
                    </div>
                </div>
                <div className={`${styles.tab} ${styles.blue}`}>
                    <input id="tab-eight" type="radio" name="tabs2" />
                    <label htmlFor="tab-eight">5. Підтримка</label>
                    <div className={styles.tabContent}>
                        <p>Протягом усього процесу ми підтримуємо постійний контакт з Вами, надаємо звіти та консультації з усіх питань, пов'язаних із Вашою справою.</p>
                    </div>
                </div>
                <div className={`${styles.tab} ${styles.blue}`}>
                    <input id="tab-nine" type="radio" name="tabs2" />
                    <label htmlFor="tab-nine">6. Результат</label>
                    <div className={styles.tabContent}>
                        <p>Наша мета - досягнення успішного результату для кожного клієнта.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
