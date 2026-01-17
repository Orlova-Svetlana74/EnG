'use client'
import styles from './page.module.scss'
import Image from 'next/image'
import { Header } from '@/components/header/Header'
import { Button } from '@/components/ui/Button/Button'
import { useState } from 'react'
import { Footer } from '@/components/footer/Footer'
import BackendDevTopSVG from '@/svg/BackendDevTopSVG'
import Plus from '@/svg/PlusSVG'
import { faqDataback } from '@/data/databackend'
import Blockmodal from '@/components/ui/blockModal/blockmodal'
import { Frametwo } from '@/public/img'

import {
    descriptionSmallShape,
    offerShape,
    projectsShape,
    iconapplication,
    icondatabase,
    icondevices,
    icon_display,
    icontactic,
} from '@/public/img'

export default function Backdev() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isMenu, setIsMenu] = useState(false)
    const [isMenuHeader, setIsMenuHeader] = useState(false)
    const [openQuestionId, setOpenQuestionId] = useState<number | null>(null)

    const handlerButtonClick = () => {
        setIsMenuHeader(true)
        setIsMenu(true)
    }

    const toggleQuestion = (id: number) => {
        setOpenQuestionId(openQuestionId === id ? null : id)
    }

    return (
        <>
            <Header
                isMenuHeader={isMenuHeader}
                setIsMenuHeader={setIsMenuHeader}
                handlerButtonClick={handlerButtonClick}
            />
            <Blockmodal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                mode="modal"
            />
            <Image
                className={styles.page__offerShape}
                src={offerShape}
                alt=""
                priority={true}
            />
            <Image
                className={styles.page__descriptionSmallShape}
                src={descriptionSmallShape}
                alt=""
                priority={true}
            />

            <div className={styles.page}>
                <h1 className={styles.page__title}>Backend-разработка</h1>
                <section className={styles.page__developsection}>
                    <div className="">
                        <div className={styles.page__developtitle}>
                            <p className={styles.page__titletext}>
                                Мы предлагаем профессиональные услуги по
                                backend-разработке и поможем реализовать любые
                                идеи.
                            </p>
                        </div>
                        <Button
                            className={styles.page__button}
                            onClick={() => setIsModalOpen(true)}
                        >
                            Заказать проект
                        </Button>
                    </div>

                    <div className={styles.page__proektstile}>
                        <BackendDevTopSVG />
                    </div>
                </section>

                <h2 className={styles.page__subtitle}>Что мы делаем?</h2>
                <div className={styles['page__advantages-block']}>
                    <div className={styles.page__advantage}>
                        <div className={styles['page__advantage-header']}>
                            <Image
                                className={styles.page__icon}
                                src={icondevices}
                                alt=""
                                width={32}
                                height={32}
                                priority={true}
                            />
                        </div>
                        <div className={styles.page__subtitletext}>
                            <p className={styles.page__text}>
                                разрабатываем и настраиваем серверные
                                приложения;
                            </p>
                        </div>
                    </div>
                    <div className={styles.page__advantage}>
                        <div className={styles['page__advantage-header']}>
                            <Image
                                className={styles.page__icon}
                                src={icondatabase}
                                alt=""
                                width={32}
                                height={32}
                                priority={true}
                            />
                        </div>
                        <div className={styles.page__subtitletext}>
                            <p className={styles.page__text}>
                                работаем с различными базами данных;
                            </p>
                        </div>
                    </div>

                    <div className={styles.page__advantage}>
                        <div className={styles['page__advantage-header']}>
                            <Image
                                className={styles.page__icon}
                                src={iconapplication}
                                alt=""
                                width={32}
                                height={32}
                                priority={true}
                            />
                        </div>
                        <div className={styles.page__subtitletext}>
                            <p className={styles.page__text}>
                                обеспечиваем высокий уровень безопасности;
                            </p>
                        </div>
                    </div>
                    <div className={styles.page__advantage}>
                        <div className={styles['page__advantage-header']}>
                            <Image
                                className={styles.page__icon}
                                src={icon_display}
                                alt=""
                                width={32}
                                height={32}
                                priority={true}
                            />
                        </div>
                        <div className={styles.page__subtitletext}>
                            <p className={styles.page__text}>
                                интегрируем приложения с внешними сервисами;
                            </p>
                        </div>
                    </div>
                    <div className={styles.page__advantage}>
                        <div className={styles['page__advantage-header']}>
                            <Image
                                className={styles.page__icon}
                                src={icontactic}
                                alt=""
                                width={32}
                                height={32}
                                priority={true}
                            />
                        </div>
                        <div className={styles.page__subtitletext}>
                            <p className={styles.page__text}>
                                разрабатываем бизнес-логику приложения.
                            </p>
                        </div>
                    </div>
                </div>
                <h2 className={styles.page__subtitle}>
                    Почему вам стоит обратиться за Backend-разработкой в студию
                    Enterge?
                </h2>
                <div className={styles.page__subtitlecontent}>
                    <div>
                        <h5 className={styles.page__subtitleblock}>
                            • Современные языки программирования
                        </h5>
                        <p className={styles.page__text}>
                            Мы используем современные языки программирования:
                            Python, Java, PHP, C#, и актуальные фреймворки и
                            библиотеки, что позволяет ускорить разработку и
                            улучшить качество кода.
                        </p>
                    </div>
                    <div>
                        <h5 className={styles.page__subtitleblock}>
                            • Опытные backend-разработчики
                        </h5>
                        <p className={styles.page__text}>
                            Наша команда состоит из опытных
                            backend-разработчиков, которые имеют глубокие знания
                            и навыки в области серверной разработки.
                        </p>
                    </div>
                    <div>
                        <h5 className={styles.page__subtitleblock}>
                            • Безопасность
                        </h5>
                        <p className={styles.page__text}>
                            Мы уделяем особое внимание безопасности и защите
                            данных наших клиентов.
                        </p>
                    </div>
                    <div>
                        <h5 className={styles.page__subtitleblock}>
                            • Адаптация под ваши потребности
                        </h5>
                        <p className={styles.page__text}>
                            Мы готовы адаптироваться под ваши потребности и
                            предложить индивидуальные решения для вашего
                            бизнеса.
                        </p>
                    </div>
                </div>

                <div className={styles.page__faqblock}>
                    <Image
                        className={styles.page__projectsShape}
                        src={projectsShape}
                        alt=""
                        width={330}
                        height={330}
                        priority={true}
                    />
                    <h4 className={styles.page__subtitle}>Вопросы и ответы</h4>

                    <div className={styles.page__faqContainer}>
                        {faqDataback.map((item) => (
                            <div
                                key={item.id}
                                className={`${styles.page__faqItem} ${openQuestionId === item.id ? styles.page__faqItemOpen : ''}`}
                            >
                                <div
                                    className={styles.page__faqQuestion}
                                    onClick={() => toggleQuestion(item.id)}
                                >
                                    <p className={styles.page__faqtext}>
                                        {item.question}
                                    </p>
                                    <div className={styles.page__faqIcon}>
                                        <Plus className={styles.page__plus} />
                                    </div>
                                </div>
                                <div
                                    className={`${styles.page__faqAnswer} ${
                                        openQuestionId === item.id
                                    }`}
                                >
                                    <p className={styles.page__faqtext}>
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="">
                    <p className={styles.page__textblock}>
                        Свяжитесь с нами, чтобы узнать больше о наших услугах и
                        начать работу <br /> над вашим проектом.
                    </p>
                </div>

                <div className={styles.page__blockmodal}>
                    <p className={styles.page__blockmodaltext}>
                        Обсудить проект
                    </p>
                    <div className={styles.page__blockmodalform}>
                        <Blockmodal
                            mode="inline"
                            showImage={false}
                            className={styles.customFormStyle}
                        />
                        <div className={styles.page__imageSection}>
                            <Image
                                className={styles.page__formImage}
                                src={Frametwo}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
