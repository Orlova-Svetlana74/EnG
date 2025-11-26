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
// import Minus from '@/svg/MinusSVG'
import { TgSVG } from '@/svg/TgSVG'
import { faqDataintegration } from '@/data/dataintegration'
import Blockmodal from '@/components/ui/blockModal/blockmodal'
import { Frametwo } from '@/public/img'

import {
    settingsalert,
    icon1,
    icon2,
    icon3,
    icon4,
    descriptionSmallShape,
    descriptionBigShape,
    offerShape,
    projectsShape,
    webhook,
    workspacepremium,
    sync,
    group,
    handyman,
    paymentarrowdown,
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
            <Image
                className={styles.page__offerShape}
                src={offerShape}
                alt=""
                priority={true}
            />

            <div className={styles.page}>
                <h3 className={styles.page__title}>
                    Интеграция сайта с системами 1C, <br /> amoCRM, Bitrix,
                    эквайрингами и <br /> другими сервисами
                </h3>

                <section className={styles.page__developsection}>
                    <div className={styles.page__developtitle}>
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
                <Button className={styles.page__button} onClick={() => setIsModalOpen(true)}>
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
                    {/* <div className={styles.page__blocktitle}></div> */}

                    <div className={styles['page__advantages-list1']}>
                        <div className={styles.page__advantage}>
                            <div className={styles['page__advantage-header']}>
                                <Image
                                    className={styles.page__icon}
                                    src={sync}
                                    alt=""
                                    width={82}
                                    height={82}
                                    priority={true}
                                />
                                <h4 className={styles.page__subtitletext}>
                                    Синхронизация данных
                                </h4>
                            </div>
                            <div className={styles.page__subtitletext}>
                                <p className={styles.page__text}>
                                    Интеграция сайта, например, с 1C
                                    обеспечивает автоматическое обновление
                                    информации о товарах, клиентах, заказах и
                                    других данных между веб-ресурсом и учётной
                                    системой.
                                </p>
                            </div>
                        </div>
                        <div className={styles.page__advantage}>
                            <div className={styles['page__advantage-header']}>
                                <Image
                                    className={styles.page__icon}
                                    src={group}
                                    alt=""
                                    width={82}
                                    height={82}
                                    priority={true}
                                />
                                <h4 className={styles.page__subtitletext}>
                                    Управление клиентами
                                </h4>
                            </div>
                            <div className={styles.page__subtitletext}>
                                <p className={styles.page__text}>
                                    АmoCRM и другие CRM-системы позволяют
                                    эффективно управлять клиентской базой:
                                    отслеживать взаимодействие с клиентом и
                                    повышать качество обслуживания, выявлять
                                    точки роста.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles['page__advantages-list2']}>
                        <div className={styles.page__advantage}>
                            <div className={styles['page__advantage-header']}>
                                <Image
                                    className={styles.page__icon}
                                    src={handyman}
                                    alt=""
                                    width={82}
                                    height={82}
                                    priority={true}
                                />
                                <h4 className={styles.page__subtitletext}>
                                    Гибкость и функциональность
                                </h4>
                            </div>
                            <div className={styles.page__subtitletext}>
                                <p className={styles.page__text}>
                                    Интеграция сайта с Bitrix и другими
                                    платформами расширяет возможности вашего
                                    веб-сайта, добавляя новые функции и
                                    инструменты.
                                </p>
                            </div>
                        </div>
                        <div className={styles.page__advantage}>
                            <div className={styles['page__advantage-header']}>
                                <Image
                                    className={styles.page__icon}
                                    src={paymentarrowdown}
                                    alt=""
                                    width={82}
                                    height={82}
                                    priority={true}
                                />
                                <h4 className={styles.page__subtitletext}>
                                    Онлайн-платежи
                                </h4>
                            </div>
                            <div className={styles.page__subtitletext}>
                                <p className={styles.page__text}>
                                    Подключение сайта к платёжным системам
                                    обеспечивает возможность проведения
                                    онлайн-платежей, что упрощает процесс
                                    покупки для клиентов и способствует
                                    увеличению продаж.
                                </p>
                            </div>
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
                    <h2 className={styles.page__subtitle}>
                        Зачем бизнесу нужны интеграции? 
                    </h2>
                    <p className={styles.page__titletext}>
                        Интеграция веб-ресурса с такими системами, как 1C,
                        amoCRM, Bitrix, платёжные шлюзы и другие, позволяет:
                    </p>
                    <li className={styles.page__list}>
                        автоматизировать рутинные процессы;
                    </li>
                    <li className={styles.page__list}>
                        повысить эффективность работы;
                    </li>
                    <li className={styles.page__list}>
                        улучшить взаимодействие с клиентами;
                    </li>
                    <li className={styles.page__list}>
                        оптимизировать продажи и управление данными.
                    </li>
                </div>

                <div className={styles.page__subtitleblock}>
                    <h2 className={styles.page__subtitle}>
                        Почему за интеграцией лучше обращаться к специалистам?  
                    </h2>
                    <p className={styles.page__titletext}>
                        Доверив интеграцию вашего веб-ресурса нам, вы получите:
                    </p>
                    <div className={styles.page__iconblock}>
                        <Image
                            className={styles.page__icon}
                            src={workspacepremium}
                            alt=""
                            width={71}
                            height={62}
                            priority={true}
                        />
                        <p className={styles.page__list}>
                            качественное и надёжное решение
                        </p>
                    </div>
                    <div className={styles.page__iconblock}>
                        <Image
                            className={styles.page__icon}
                            src={webhook}
                            alt=""
                            width={71}
                            height={62}
                            priority={true}
                        />
                        <p className={styles.page__list}>
                            гарантию соответствия интеграции потребностям вашего
                            бизнеса
                        </p>
                    </div>
                    <div className={styles.page__iconblock}>
                        <Image
                            className={styles.page__icon}
                            src={settingsalert}
                            alt=""
                            width={71}
                            height={62}
                            priority={true}
                        />
                        <p className={styles.page__list}>
                            профессиональную поддержку и обслуживание
                        </p>
                    </div>
                </div>

                <div className={styles.page__faqblock}>
                    <Image
                        className={styles.page__descriptionBigShape}
                        src={descriptionBigShape}
                        alt=""
                        width={330}
                        height={330}
                        priority={true}
                    />
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
