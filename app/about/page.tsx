import Image from 'next/image'
import styles from './page.module.scss'
import { LogoSVG } from '@/svg/LogoSVG'
import { Button } from '@/components/ui/Button/Button'
import { VkSVG } from '@/svg/VkSVG'
import { WhatsupSVG } from '@/svg/WhatsupSVG'
import { InSVG } from '@/svg/InSVG'
import { MailSVG } from '@/svg/MailSVG'
import { TgSVG } from '@/svg/TgSVG'
import { Footer } from '@/components/footer/Footer'

export default function Home() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.logo}>
                        <LogoSVG className={styles.logo__svg} />

                        <div className={styles.logoText}>
                            <p className={styles.logoList}>
                                <span>Entergen</span>
                                <span>Наши работы</span>
                                <span>О нас</span>
                                <span>Контакты</span>
                            </p>
                        </div>
                        <Button>Обсудить проект</Button>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.content__title}>
                        <p>
                            <b>Мы — Entergen</b>, команда разработчиков,
                            создающих цифровые продукты, которые упрощают
                            бизнес-процессы и повышают их эффективность.У нас
                            уже есть готовые решения, но мы также открыты к
                            новым задачам и готовы адаптироваться под
                            потребности вашего бизнеса.
                        </p>
                    </div>
                    <div className={styles.content__skills}>
                        <h3>Мы берем на себя</h3>
                        <ul>
                            <li>1. Разработку и поддержку веб-приложений</li>
                            <li>2. Интеграцию автоматизированных систем</li>
                            <li>3. Создание админ-панелей</li>
                            <li>4. Создание сервисов для работы с данными</li>
                        </ul>
                    </div>
                    <ul className={styles.content__details}>
                        <li>
                            <b>Наши продукты</b> помогают оптимизировать
                            процессы, автоматизировать рутину и обеспечивать
                            удобный пользовательский опыт.
                        </li>
                        <li>
                            <b>Мы внимательны к деталям</b>, соблюдаем сроки и
                            подходим к каждому проекту с глубоким пониманием
                            задач.
                        </li>
                        <li>
                            <b>Сотрудничая с компаниями</b> разного масштаба, мы
                            помогаем превращать идеи в работающие цифровые
                            решения.
                        </li>
                        <li>
                            <b>С нами легко работать</b> — мы ценим
                            прозрачность, удобство взаимодействия и нацелены на
                            результат.
                        </li>
                    </ul>
                </div>
                <Footer />
            </div>
        </div>
    )
}
