'use client'
import styles from './page.module.scss'
import Image from 'next/image'
import { Header } from '@/components/header/Header'
import { Button } from '@/components/ui/Button/Button'
import { useState } from 'react'
import SystemsdevtitleSVG from '@/svg/SystemsdevtitleSVG'
import CMSComponentSVG from '@/svg/CMSComponentSVG'
import CRMComponentSVG from '@/svg/CRMComponentSVG'
import LMSComponentSVG from '@/svg/LMSComponentSVG'
import ERPComponentSVG from '@/svg/ERPComponentSVG'
import { Footer } from '@/components/footer/Footer'
import Plus from '@/svg/PlusSVG'
import { faqDatasystems } from '@/data/datasystemsdev'
import Blockmodal from '@/components/ui/blockModal/blockmodal'
import { Frametwo } from '@/public/img'

import {
    descriptionBigShape,
    offerShape,
    projectsShape,
    skillsShape,
} from '@/public/img'

export default function Systemsdev() {
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
                className={`${styles.page__shape} ${styles['page__shape--offerShape']}`}
                src={offerShape}
                alt=""
                priority={true}
            />
            <div className={styles.page}>
                <h1 className={styles.page__title}>
                    Разработка и модернизация <br /> программного обеспечения:
                    <br /> системы CRM, CMS, ERP, LMS
                </h1>

                <section className={styles.page__developsection}>
                    <div>
                        <p className={styles.page__titletext}>
                            Мы создаём и внедряем программное обеспечение,
                            ориентированное на автоматизацию и системность
                            бизнес-процессов.    
                        </p>
                        <div className={styles.page__shape}>
                            {/* <Image
                                className={`${styles.page__shape} ${styles['page__shape--descriptionSmallShape']}`}
                                src={descriptionSmallShape}
                                alt=""
                                priority={true}
                            /> */}
                        </div>
                        <Button
                            className={styles.page__button}
                            onClick={() => setIsModalOpen(true)}
                        >
                            Заказать проект
                        </Button>
                    </div>
                    <div className={styles.page__proektstile}>
                        <SystemsdevtitleSVG />
                    </div>
                </section>

                <h2 className={styles.page__subtitle}>
                    Система CRM — система управления <br /> взаимоотношениями с
                    клиентами.
                </h2>
                <p className={styles['page__subtitle--text']}>
                    Позволяет компании эффективно управлять контактами,
                    сделками,
                    <br /> задачами и другими аспектами взаимодействия с
                    клиентами. 
                </p>
                <div className={styles.page__blockcontent}>
                    <section className={styles.page__developsection}>
                        <div className={styles.page__developtitle}>
                            <h5 className={styles.page__developsuptitle}>
                                Этапы разработки CRM-системы:
                            </h5>
                            <p className={styles.page__textcontent}>
                                <li className={styles.page__textlist}>
                                    анализ потребностей компании и определение
                                    функциональных требований;
                                </li>
                                <li className={styles.page__textlist}>
                                    проектирование архитектуры системы;
                                </li>
                                <li className={styles.page__textlist}>
                                    разработка модулей и компонентов;
                                </li>
                                <li className={styles.page__textlist}>
                                    тестирование и отладка;
                                </li>
                                <li className={styles.page__textlist}>
                                    внедрение и настройка;
                                </li>
                                <li className={styles.page__textlist}>
                                    обучение пользователей.
                                </li>
                            </p>
                        </div>
                        <div className={styles.page__proektstile}>
                            <CRMComponentSVG />
                        </div>
                    </section>

                    <p className={styles.page__textcontent}>
                        Сложность разработки CRM-системы зависит от размера
                        компании, количества пользователей и специфики бизнеса.
                    </p>
                    <Image
                        className={`${styles.page__shape} ${styles['page__shape--skillsShape']}`}
                        src={skillsShape}
                        alt=""
                        priority={true}
                    />
                </div>

                <h2 className={styles.page__subtitle}>
                    Система CMS — система управления контентом.
                </h2>
                <p className={styles['page__subtitle--text']}>
                    Позволяет создавать, редактировать и публиковать контент на
                    цифровых площадках. Используется для создания блогов,
                    новостных сайтов и интернет-магазинов
                </p>
                <div className={styles.page__blockcontent}>
                    <section className={styles.page__developsection}>
                        <div className={styles.page__developtitle}>
                            <h5 className={styles.page__developsuptitle}>
                                Этапы разработки CMS-системы:
                            </h5>
                            <p className={styles.page__textcontent}>
                                <li className={styles.page__textlist}>
                                    выбор платформы и инструментов;
                                </li>
                                <li className={styles.page__textlist}>
                                    проектирование структуры сайта;
                                </li>
                                <li className={styles.page__textlist}>
                                    разработка шаблонов и компонентов;
                                </li>
                                <li className={styles.page__textlist}>
                                    интеграция с другими системами;
                                </li>
                                <li className={styles.page__textlist}>
                                    тестирование;
                                </li>
                                <li className={styles.page__textlist}>
                                    внедрение;
                                </li>
                                <li className={styles.page__textlist}>
                                    обучение администраторов и пользователей.
                                </li>
                            </p>
                        </div>
                        <div className={styles.page__proektstile}>
                            <CMSComponentSVG />
                        </div>
                    </section>
                    <p className={styles.page__textcontent}>
                        Сложность разработки CRM-системы зависит от размера
                        компании, количества пользователей и специфики бизнеса.
                    </p>
                </div>

                <h2 className={styles.page__subtitle}>
                    Система ERP — система планирования <br /> ресурсов
                    предприятия.
                </h2>
                <p className={styles['page__subtitle--text']}>
                    Объединяет в себе функции управления финансами,
                    производством,
                    <br /> закупками и продажами компании. Помогает
                    оптимизировать
                    <br /> коммерческие бизнес-процессы: повысить эффективность
                    управления
                    <br /> и снизить затраты.  
                </p>
                <div className={styles.page__blockcontent}>
                    <section className={styles.page__developsection}>
                        <div className={styles.page__developtitle}>
                            <h5 className={styles.page__developsuptitle}>
                                Этапы разработки ERP-системы:
                            </h5>
                            <p className={styles.page__textcontent}>
                                <li className={styles.page__textlist}>
                                    анализ бизнес-процессов компании;
                                </li>
                                <li className={styles.page__textlist}>
                                    определение функциональных требований;
                                </li>
                                <li className={styles.page__textlist}>
                                    проектирование архитектуры системы;
                                </li>
                                <li className={styles.page__textlist}>
                                    разработку модулей и компонентов;
                                </li>
                                <li className={styles.page__textlist}>
                                    интеграцию с другими системами;
                                </li>
                                <li className={styles.page__textlist}>
                                    тестирование;
                                </li>
                                <li className={styles.page__textlist}>
                                    внедрение;
                                </li>
                                <li className={styles.page__textlist}>
                                    обучение пользователей и администраторов.
                                </li>
                            </p>
                        </div>
                        <div className={styles.page__proektstile}>
                            <ERPComponentSVG />
                        </div>
                    </section>
                    <p className={styles.page__textcontent}>
                        Сложность разработки ERP-системы зависит от масштаба
                        бизнеса, количества модулей и компонентов и требований к
                        интеграциям.
                    </p>
                    <Image
                        className={`${styles.page__shape} ${styles['page__shape--descriptionBigShape']}`}
                        src={descriptionBigShape}
                        alt=""
                        priority={true}
                    />
                </div>

                <h2 className={styles.page__subtitle}>
                    Система LMS — система управления обучением.
                </h2>
                <p className={styles['page__subtitle--text']}>
                    Позволяет создавать и проводить онлайн-курсы, управлять
                    процессом обучения, отслеживать прогресс учащихся и
                    оценивать их знания. Используются для обучения сотрудников,
                    клиентов и партнёров.  
                </p>
                <div className={styles.page__blockcontent}>
                    <section className={styles.page__developsection}>
                        <div className={styles.page__developtitle}>
                            <h5 className={styles.page__developsuptitle}>
                                Этапы разработки LMS-системы:
                            </h5>
                            <p className={styles.page__textcontent}>
                                <li className={styles.page__textlist}>
                                    определение целей и задач обучения;
                                </li>
                                <li className={styles.page__textlist}>
                                    проектирование структуры курсов;
                                </li>
                                <li className={styles.page__textlist}>
                                    разработка учебных материалов и заданий;
                                </li>
                                <li className={styles.page__textlist}>
                                    создание интерфейса для учащихся и
                                    преподавателей;
                                </li>
                                <li className={styles.page__textlist}>
                                    интеграция с системами управления
                                    пользователями;
                                </li>
                                <li className={styles.page__textlist}>
                                    тестирование;
                                </li>
                                <li className={styles.page__textlist}>
                                    внедрение;
                                </li>
                                <li className={styles.page__textlist}>
                                    обучение преподавателей и администраторов.
                                </li>
                            </p>
                        </div>
                        <div className={styles.page__proektstile}>
                            <LMSComponentSVG />
                        </div>
                    </section>
                    <p className={styles.page__textcontent}>
                        Сложность разработки LMS-системы зависит от целей
                        обучения, количества курсов, обучающих материалов и
                        требований к функционалу.
                    </p>
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

                <Footer />
            </div>
        </>
    )
}
