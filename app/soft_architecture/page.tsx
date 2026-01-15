'use client'
import styles from './page.module.scss'
import Image from 'next/image'
import { Header } from '@/components/header/Header'
import { Button } from '@/components/ui/Button/Button'
import { useState } from 'react'
import { Footer } from '@/components/footer/Footer'
import SoftArchitectSVG from '@/svg/SoftArchitectSVG'
import Plus from '@/svg/PlusSVG'
import { faqDatasystems } from '@/data/datasystemsdev'
import Blockmodal from '@/components/ui/blockModal/blockmodal'
import { Frametwo } from '@/public/img'

import {
    descriptionSmallShape,
    offerShape,
    projectsShape,
    checkcircle,
    cognition,
    folder_open,
    grain,
    graph_5,
    lock,
    widgets,
} from '@/public/img'

export default function Deployment() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isMenu, setIsMenu] = useState(false)
    const [isMenuHeader, setIsMenuHeader] = useState(false)
    const [openQuestionId, setOpenQuestionId] = useState<number | null>(null) // Для отслеживания открытого вопроса

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

            <div className={styles.page}>
                <h1 className={styles.page__title}>
                    Проектирование <br /> IT-архитектуры программного <br />{' '}
                    обеспечения
                </h1>

                <section className={styles.page__developsection}>
                    <div className="">
                        <div className={styles.page__developtitle}>
                            <p className={styles.page__titletext}>
                                Создадим прочную основу для разработки
                                качественного программного продукта, который
                                будет соответствовать ожиданиям пользователей и
                                требованиям бизнеса.  
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
                        <SoftArchitectSVG />
                    </div>
                </section>
                <h2 className={styles.page__subtitle}>
                    Этапы проектирования <br /> IT-архитектуры:
                </h2>

                <div className={styles['page__advantages-block']}>
                    <div className={styles.page__advantage}>
                        <div className={styles['page__advantage-header']}>
                            <Image
                                className={styles.page__icon}
                                src={cognition}
                                alt=""
                                width={32}
                                height={32}
                                priority={true}
                            />
                        </div>
                        <div className={styles.page__subtitletext}>
                            <p className={styles.page__text}>
                                Сбор требований и анализ бизнес-процессов.
                            </p>
                        </div>
                    </div>
                    <div className={styles.page__advantage}>
                        <div className={styles['page__advantage-header']}>
                            <Image
                                className={styles.page__icon}
                                src={widgets}
                                alt=""
                                width={32}
                                height={32}
                                priority={true}
                            />
                        </div>
                        <div className={styles.page__subtitletext}>
                            <p className={styles.page__text}>
                                Определение основных компонентов системы.
                            </p>
                        </div>
                    </div>

                    <div className={styles.page__advantage}>
                        <div className={styles['page__advantage-header']}>
                            <Image
                                className={styles.page__icon}
                                src={grain}
                                alt=""
                                width={32}
                                height={32}
                                priority={true}
                            />
                        </div>
                        <div className={styles.page__subtitletext}>
                            <p className={styles.page__text}>
                                Выбор архитектурных паттернов и шаблонов.
                            </p>
                        </div>
                    </div>
                    <div className={styles.page__advantage}>
                        <div className={styles['page__advantage-header']}>
                            <Image
                                className={styles.page__icon}
                                src={graph_5}
                                alt=""
                                width={32}
                                height={32}
                                priority={true}
                            />
                        </div>
                        <div className={styles.page__subtitletext}>
                            <p className={styles.page__text}>
                                Разработка схем взаимодействия компонентов.
                            </p>
                        </div>
                    </div>
                    <div className={styles.page__advantage}>
                        <div className={styles['page__advantage-header']}>
                            <Image
                                className={styles.page__icon}
                                src={lock}
                                alt=""
                                width={32}
                                height={32}
                                priority={true}
                            />
                        </div>
                        <div className={styles.page__subtitletext}>
                            <p className={styles.page__text}>
                                Оценка производительности, безопасности и
                                надёжности системы.
                            </p>
                        </div>
                    </div>
                    <div className={styles.page__advantage}>
                        <div className={styles['page__advantage-header']}>
                            <Image
                                className={styles.page__icon}
                                src={folder_open}
                                alt=""
                                width={32}
                                height={32}
                                priority={true}
                            />
                        </div>
                        <div className={styles.page__subtitletext}>
                            <p className={styles.page__text}>
                                Создание технической документации.
                            </p>
                        </div>
                    </div>
                </div>
                <Image
                    className={styles.page__descriptionSmallShape}
                    src={descriptionSmallShape}
                    alt=""
                    priority={true}
                />

                <h2 className={styles.page__subtitle}>
                    Преимущества профессионального <br /> проектирования
                    IT-архитектуры
                </h2>
                <p className={styles.page__titletext}>
                    Обращаясь за проектированием в студию Entergen, вы:
                </p>
                <div className={styles['page__advantages-line']}>
                    <div className={styles['page__advantage-line']}>
                        <div className={styles['page__advantage-header']}>
                            <Image
                                className={styles.page__icon}
                                src={checkcircle}
                                alt=""
                                width={82}
                                height={82}
                                priority={true}
                            />
                        </div>
                        <div className={styles.page__subtitletext}>
                            <p className={styles.page__text}>
                                Снижаете риски и затраты на доработку системы в
                                процессе эксплуатации.
                            </p>
                        </div>
                    </div>
                    <div className={styles['page__advantage-line']}>
                        <div className={styles['page__advantage-header']}>
                            <Image
                                className={styles.page__icon}
                                src={checkcircle}
                                alt=""
                                width={82}
                                height={82}
                                priority={true}
                            />
                        </div>
                        <div className={styles.page__subtitletext}>
                            <p className={styles.page__text}>
                                Упрощаете процессы разработки и внедрения новых
                                функций
                            </p>
                        </div>
                    </div>
                    <div className={styles['page__advantage-line']}>
                        <div className={styles['page__advantage-header']}>
                            <Image
                                className={styles.page__icon}
                                src={checkcircle}
                                alt=""
                                width={82}
                                height={82}
                                priority={true}
                            />
                        </div>
                        <div className={styles.page__subtitletext}>
                            <p className={styles.page__text}>
                                Повышаете эффективность и производительность
                                системы.
                            </p>
                        </div>
                    </div>
                    <div className={styles['page__advantage-line']}>
                        <div className={styles['page__advantage-header']}>
                            <Image
                                className={styles.page__icon}
                                src={checkcircle}
                                alt=""
                                width={82}
                                height={82}
                                priority={true}
                            />
                        </div>
                        <div className={styles.page__subtitletext}>
                            <p className={styles.page__text}>
                                Обеспечиваете масштабируемость и гибкость
                                системы для адаптации к изменяющимся требованиям
                                бизнеса.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.page__subtitleblock}>
                    <Image
                        className={styles.page__projectsShape}
                        src={projectsShape}
                        alt=""
                        width={330}
                        height={330}
                        priority={true}
                    />
                </div>
                <div className={styles.page__faqblock}>
                    {/* <Image
                        className={styles.page__descriptionBigShape}
                        src={descriptionBigShape}
                        alt=""
                        width={330}
                        height={330}
                        priority={true}
                    /> */}
                    <h4 className={styles.page__subtitle}>Вопросы и ответы</h4>

                    <div className={styles.page__faqContainer}>
                        {faqDatasystems.map((item) => (
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
                        начать работу над вашим проектом.
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
