'use client'
import styles from './page.module.scss'
import Image from 'next/image'
import { Header } from '@/components/header/Header'
import { Button } from '@/components/ui/Button/Button'
import { useState } from 'react'
import Developtitle from '@/svg/DeveloptitleSVG'
import Analitics from '@/svg/AnaliticsSVG'
import Proektir from '@/svg/ProektirSVG'
import Desine from '@/svg/DesineSVG'
import Develop from '@/svg/DevelopSVG'
import { Input } from '@/components/ui/input/Input'
import { Checkbox } from '@/components/ui/checkbox/Checkbox'
import { Footer } from '@/components/footer/Footer'
import Checkmark from '@/svg/CheckmarkSVG'
import Plus from '@/svg/PlusSVG'
import { TgSVG } from '@/svg/TgSVG'
import { faqData } from '@/data/data'
import Blockmodal from '@/components/ui/blockModal/blockmodal'
import { Frametwo } from '@/public/img'

import {
    descriptionSmallShape,
    descriptionBigShape,
    offerShape,
    projectsShape,
} from '@/public/img'

export default function Developmen() {
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

            <div className={styles.page}>
                <section className={styles.page__developsection}>
                    <div className={styles.page__developtitle}>
                        <h3 className={styles.page__title}>
                            Веб-разбработка: <br />
                            создание сайта под ключ
                        </h3>
                        <Image
                            className={styles.page__offerShape}
                            src={offerShape}
                            alt=""
                            priority={true}
                        />
                        <p className={styles.page__titletext}>
                            Веб-разработка представляет собой многогранный
                            процесс создания интерактивного веб-сайта, который
                            станет мощным инструментом для выхода бизнеса в
                            онлайн-пространство и привлечения целевой
                            аудитории.  Мы тщательно анализируем и прорабатывам
                            все аспекты проекта, обеспечивая его
                            функциональность, эргономичность и эстетическую
                            привлекательность. 
                        </p>
                    </div>
                    <div className={styles.page__proektstile}>
                        <Developtitle />
                    </div>
                </section>
                <Button
                    className={styles.page__button}
                    onClick={() => setIsModalOpen(true)}
                >
                    Заказать разработку
                </Button>
                <div className={styles.page__shape}>
                    <Image
                        className={`${styles.page__shape} ${styles['page__shape--descriptionSmallShape']}`}
                        src={descriptionSmallShape}
                        alt=""
                        priority={true}
                    />
                </div>

                <h4 className={styles.page__subtitle}>
                    Этапы разработки сайта с нуля
                </h4>
                <p className={styles['page__subtitle--text']}>
                    Разработка сайта от идеи до запуска включает <br /> в себя
                    несколько этапов:
                </p>
                <div className={styles.page__blockcontent}>
                    <section className={styles.page__developsection}>
                        <div className={styles.page__developtitle}>
                            <h5 className={styles.page__developsuptitle}>
                                01. Аналитика
                            </h5>
                            <p className={styles.page__textcontent}>
                                На этом этапе изучается целевая аудитория,
                                конкуренты, цели
                                <br /> и задачи проекта. <br /> Формулируются
                                конкретные цели, которых нужно достичь
                                <br /> с помощью сайта. Изучаются сайты
                                конкурентов, чтобы выявить <br />
                                их сильные и слабые стороны. Определяются
                                потребности,
                                <br /> предпочтения и ожидания целевой
                                аудитории.
                            </p>
                        </div>
                        <div className={styles.page__proektstile}>
                            <Analitics />
                        </div>
                    </section>
                    <section className={styles.page__developsectionback}>
                        <div className={styles.page__proektstile}>
                            <Proektir />
                        </div>

                        <div className={styles.page__developtitle}>
                            <h5 className={styles.page__developsuptitle}>
                                02. Проектирование
                            </h5>
                            <p className={styles.page__textcontent}>
                                На этапе проектирования создается структура
                                сайта,
                                <br /> разрабатывается прототип, создается
                                черновой вариант <br />
                                сайта, отображающий расположение элементов
                                <br /> и функциональность. Формулируются
                                требования <br /> к функциональности, дизайну и
                                другим аспектам сайта.
                            </p>
                        </div>
                    </section>
                    <section className={styles.page__developsection}>
                        <div className={styles.page__developtitle}>
                            <h5 className={styles.page__developsuptitle}>
                                03. Дизайн
                            </h5>
                            <p className={styles.page__textcontent}>
                                Создаются визуальные макеты всех страниц сайта,
                                <br />
                                определяющие цветовую схему, типографику,
                                расположение
                                <br /> элементов. 
                                <br /> Идет проработка пользовательского
                                интерфейса (UI),
                                <br /> определяется удобство использования
                                сайта, его навигация и взаимодействие с
                                пользователем. 
                            </p>
                        </div>
                        <div className={styles.page__proektstile}>
                            <Desine />
                        </div>
                    </section>
                    <section className={styles.page__developsectionback}>
                        <div className={styles.page__proektstile}>
                            <Develop />
                        </div>
                        <div className={styles.page__developtitle}>
                            <h5 className={styles.page__developsuptitle}>
                                04. Разработка
                            </h5>
                            <p className={styles.page__textcontent}>
                                На этапе разработки делается адаптивная <br />
                                вёрстка. Адаптивный сайт будет автоматически
                                корректно
                                <br /> отображаться на всех типах устройств и с
                                ним удобно будет взаимодействовать. <br />
                                Готовый сайт должен работать быстро и без сбоев.
                                <br /> Для этого на этапе разработки постоянно
                                производятся <br />
                                различные тестирования и ведутся работы по
                                оптимизации.
                            </p>
                        </div>
                    </section>
                </div>
                <div>
                    <div className={styles.page__shape}>
                        <Image
                            className={`${styles.page__shape} ${styles['page__shape--descriptionBigShape']}`}
                            src={descriptionBigShape}
                            alt=""
                            priority={true}
                        />
                    </div>
                    <h4 className={styles.page__subtitle}>Результаты</h4>

                    <p className={styles['page__subtitle--text']}>
                        Заказывая разработку сайта в EnterGen вы получите:
                    </p>
                    <div className={styles.page__advantages}>
                        <Checkmark className={styles.page__checkmark} />
                        <div className={styles.page__result}>
                            <h5 className={styles.page__developsuptitle}>
                                Коммерческие результаты
                            </h5>
                            <p className={styles.page__textcontent}>
                                При отсутствии предыдущего сайта - многократное
                                увеличение объема <br />
                                продаж. При наличии старого сайта - существенное
                                повышение
                                <br /> конверсии посетителей в покупателей.
                            </p>
                        </div>
                    </div>
                    <div className={styles.page__advantages}>
                        <Checkmark className={styles.page__checkmark} />
                        <div className={styles.page__result}>
                            <h5 className={styles.page__developsuptitle}>
                                Брендовые преимущества 
                            </h5>
                            <p className={styles.page__textcontent}>
                                Повысится узнаваемость бренда. Профессиональный
                                сайт создает
                                <br /> впечатление надежности и серьезности
                                бизнеса,
                                <br /> что повышает лояльность клиентов.
                            </p>
                        </div>
                    </div>

                    <div className={styles.page__advantages}>
                        <Checkmark className={styles.page__checkmark} />
                        <div className={styles.page__result}>
                            <h5 className={styles.page__developsuptitle}>
                                Конкурентные преимущества
                            </h5>
                            <p className={styles.page__textcontent}>
                                Новый сайт позволит укрепить позиций на рынке за
                                счет <br />
                                качественного онлайн-присутствия и более
                                эффективного <br />
                                взаимодействия с клиентами.
                            </p>
                        </div>
                    </div>

                    <Button
                        className={styles.page__button}
                        onClick={() => setIsModalOpen(true)}
                    >
                        Обсудить проект
                    </Button>
                </div>

                <div className={styles.page__faqblock}>
                    <h4 className={styles.page__subtitle}>Вопросы и ответы</h4>
                    <div className={styles.page__shape}>
                        <Image
                            className={`${styles.page__shape} ${styles['page__shape--projectsShape']}`}
                            src={projectsShape}
                            alt=""
                            priority={true}
                        />

                        <div className={styles.page__faqContainer}>
                            {faqData.map((item) => (
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
                                            <Plus
                                                className={styles.page__plus}
                                            />
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
                                    {/* {openQuestionId === item.id && ( */}
                                    {/* <div className={styles.page__faqAnswer}>
                                        <p className={styles.page__faqtext}>
                                            {item.answer}
                                        </p>
                                    </div> */}
                                    {/* )} */}
                                </div>
                            ))}
                        </div>
                    </div>
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
                <div className={styles.page__tgFixed}>
                    <TgSVG />
                </div>
                <Footer />
            </div>
        </>
    )
}
