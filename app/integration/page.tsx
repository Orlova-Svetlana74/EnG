'use client'
import styles from './page.module.scss'
import Image from 'next/image'
import { Header } from '@/components/header/Header'
import { Footer } from '@/components/footer/Footer'
import { Button } from '@/components/ui/Button/Button'
import { useState } from 'react'
import Integrationtitle from '@/svg/IntegrationSVG'
import Analitics from '@/svg/AnaliticsSVG'
import Proektir from '@/svg/ProektirSVG'
import Desine from '@/svg/DesineSVG'
import Develop from '@/svg/DevelopSVG'
import { Input } from '@/components/ui/input/Input'
import { Checkbox } from '@/components/ui/checkbox/Checkbox'
import Checkmark from '@/svg/CheckmarkSVG'
import Plus from '@/svg/PlusSVG'
import Minus from '@/svg/MinusSVG'
import { faqDataintegration } from '@/data/dataintegration'
import Blockmodal from '@/components/ui/blockModal/blockmodal'
import { Frametwo } from '@/public/img'

import {
    icon1,
    icon2,
    icon3,
    icon4,
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

            <div className={styles.page}>
                <section className={styles.page__developsection}>
                    <div className={styles.page__developtitle}>
                        <h3 className={styles.page__title}>
                            Интеграция сайта с системами 1C, amoCRM, Bitrix,
                            эквайрингами и другими сервисами
                        </h3>
                        <Image
                            className={styles.page__offerShape}
                            src={offerShape}
                            alt=""
                            priority={true}
                        />
                        <p className={styles.page__titletext}>
                            Мы оказываем услуги по интеграции с различными
                            популярными сервисами для автоматизации работы.
                            Подберем готовое решение для интеграции, адаптируем
                            стандартные механизмы или создадим уникальный обмен
                            данными. Поможем в настройке интеграции с
                            веб-сайтами, внешними сервисами, банковскими
                            системами и другими сервисами.
                        </p>
                    </div>
                    <div className={styles.page__proektstile}>
                        <Integrationtitle />
                    </div>
                </section>
                <Button className={styles.page__button}>
                    Заказать интеграцию
                </Button>
                <Image
                    className={styles.page__descriptionSmallShape}
                    src={descriptionSmallShape}
                    alt=""
                    priority={true}
                />
                <h2 className={styles.page__subtitle}>
                    Какие задачи решает интеграция?
                </h2>
                <div className={styles['page__advantages-block']}>
                    <div className={styles.page__blocktitle}>
                        <Image
                            className={styles['page__shape--bigshape']}
                            src={descriptionBigShape}
                            alt=""
                            width={330}
                            height={330}
                            priority={true}
                        />
                    </div>

                    <div className={styles['page__advantages-list1']}>
                        <div className={styles.page__advantage}>
                            <div className={styles['page__advantage-header']}>
                                <Image
                                    className={styles.page__icon}
                                    src={icon2}
                                    alt=""
                                    width={71}
                                    height={62}
                                    priority={true}
                                />
                                <h4 className={styles.page__subtitle}>
                                    Опыт
                                    <br /> и профессионализм
                                </h4>
                            </div>
                            <div className={styles.page__subtitletext}>
                                <p className={styles.page__text}>
                                    Наша команда состоит из опытных
                                    разработчиков, дизайнеров и тестировщиков.
                                    Мы знаем, как создать сайт, который будет
                                    соответствовать вашим потребностям и целям,
                                    а также понравится аудитории.
                                </p>
                            </div>
                        </div>
                        <div className={styles.page__advantage}>
                            <div className={styles['page__advantage-header']}>
                                <Image
                                    className={styles.page__icon}
                                    src={icon1}
                                    alt=""
                                    width={71}
                                    height={62}
                                    priority={true}
                                />
                                <h4 className={styles.page__subtitle}>
                                    Индивидуальный <br /> подход
                                </h4>
                            </div>
                            <div className={styles.page__subtitletext}>
                                <p className={styles.page__text}>
                                    Мы не предлагаем готовые решения, мы
                                    разрабатываем уникальные сайты и приложения,
                                    которые учитывают особенности вашего бизнеса
                                    и целевую аудиторию.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles['page__advantages-list2']}>
                        <div className={styles.page__advantage}>
                            <div className={styles['page__advantage-header']}>
                                <Image
                                    className={styles.page__icon}
                                    src={icon3}
                                    alt=""
                                    width={71}
                                    height={62}
                                    priority={true}
                                />
                                <h4 className={styles.page__subtitle}>
                                    Современные
                                    <br /> технологии
                                </h4>
                            </div>
                            <div className={styles.page__subtitletext}>
                                <p className={styles.page__text}>
                                    Мы используем современные технологии и
                                    инструменты для создания сайтов и
                                    приложений, которые соответствуют последним
                                    тенденциям в веб-разработке.
                                </p>
                            </div>
                        </div>
                        <div className={styles.page__advantage}>
                            <div className={styles['page__advantage-header']}>
                                <Image
                                    className={styles.page__icon}
                                    src={icon4}
                                    alt=""
                                    width={71}
                                    height={62}
                                    priority={true}
                                />
                                <h4 className={styles.page__subtitle}>
                                    Комплексный <br /> подход
                                </h4>
                            </div>
                            <div className={styles.page__subtitletext}>
                                <p className={styles.page__text}>
                                    Помимо разработки, мы предлагаем услуги по
                                    интеграции с популярными сервисами, пишем
                                    боты для Telegram, VK, WhatsApp, Mini App.
                                    Пишем системы автоматизации для бизнеса и
                                    многое другое.
                                </p>
                            </div>

                            {/* <Image
                                className={styles['page__shape--projects']}
                                src={projectsShape}
                                alt=""
                                width={330}
                                height={330}
                                priority={true}
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2>Зачем бизнесу нужны интеграции? </h2>
                <p>
                    Интеграция веб-ресурса с такими системами, как 1C, amoCRM,
                    Bitrix, платёжные шлюзы и другие, позволяет:
                </p>
                <li>• автоматизировать рутинные процессы;</li>
                <li>• повысить эффективность работы;</li>
                <li>• улучшить взаимодействие с клиентами;</li>
                <li>• оптимизировать продажи и управление данными.</li>
            </div>

            <div>
                <h2>
                    Почему за интеграцией лучше обращаться к специалистам?  
                </h2>
                <p>Доверив интеграцию вашего веб-ресурса нам, вы получите:</p>
                <li>качественное и надёжное решение</li>
                <li>
                    гарантию соответствия интеграции потребностям вашего бизнеса
                </li>
                <li>профессиональную поддержку и обслуживание</li>
            </div>

            <div className={styles.page__faqblock}>
                <h4 className={styles.page__subtitle}>Вопросы и ответы</h4>

                <div className={styles.page__faqContainer}>
                    {faqDataintegration.map((item) => (
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

            <div className={styles.page__blockmodal}>
                <p className={styles.page__blockmodaltext}>Обсудить проект</p>
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
        </>
    )
}
