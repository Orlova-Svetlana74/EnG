'use client'
import Image from 'next/image'
import styles from './page.module.scss'
import LogoSVG from '@/svg/LogoSVG'
import { Button } from '@/components/ui/Button/Button'
import {
    descriptionBigShape,
    descriptionSmallShape,
    mainShape,
    offerShape,
    projectFoodImg,
    projectKitchenImg,
    projectMandarinaImg,
    projectRukalineImg,
    projectsShape,
} from '@/img'
import { MenuSVG } from '@/svg/MenuSVG'
import { useState } from 'react'
import clsx from 'clsx'
import { Footer } from '@/components/footer/Footer'
import { Frametwo } from '@/img'
import Blockmodal from '@/components/ui/blockModal/blockmodal'
import { Header } from '@/components/header/Header'
import { StarSVG } from '@/svg/StarSVG'
import { ArrowSVG } from '@/svg/ArrowSVG'
import { DesktopSVG } from '@/svg/DesktopSVG'
import { PaletteSVG } from '@/svg/PaletteSVG'
import { PhoneSVG } from '@/svg/PhoneSVG'
import { Star2SVG } from '@/svg/Star2SVG'
import { SuitcaseSVG } from '@/svg/SuitcaseSVG'
import { PipelineSVG } from '@/svg/PipelineSVG'
import { GearSVG } from '@/svg/GearSVG'
import { OverlapSVG } from '@/svg/OverlapSVG'
import { TgSVG } from '@/svg/TgSVG'
import { CookieBanner } from '@/components/ui/CookieBanner/CookieBanner'

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isMenu, setIsMenu] = useState(false)
    const [isMenuHeader, setIsMenuHeader] = useState(false)

    const handlerButtonClick = () => {
        setIsMenuHeader(true)
        setIsMenu(true)
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
                <div className={styles.container}>
                    <CookieBanner />
                    <div className={styles.container__tgFixed}>
                        <TgSVG />
                    </div>
                    <Image
                        className={styles.page__mainShape}
                        src={mainShape}
                        alt=""
                    />

                    <div className={styles.container__actionUs}>
                        <p>
                            Здесь ваши идеи превращаются
                            <br />в цифровую реальность и обретают код.
                        </p>
                        <Button onClick={() => setIsMenu(true)}>
                            Напишите нам
                        </Button>
                    </div>
                    <p className={styles.container__header__title}>
                        <b>Entergen</b> — команда профессионалов,
                        <br /> которая занимается разработкой качественных
                        <br /> и функциональных сайтов, программного
                        <br /> обеспечения и приложений.
                    </p>
                    <div className={styles.container__description}>
                        <h4>Как мы работаем?</h4>
                        Мы берём ваш проект под ключ, чтобы все задачи целиком
                        <br /> решались одной командой, в одной системе
                        координат.
                        <br /> Мы за то, чтобы все механизмы в проекте работали
                        слаженно
                        <br /> и правильно. EnterGen – внедрит часть нашего кода
                        навсегда
                        <br /> в ваш проект.
                    </div>
                    <div className={styles.container__reality}>
                        <div className={styles.container__reality__text}>
                            <b>
                                Не упустите возможность реализовать идею,
                                <br /> которая будет работать на ваш успех.
                                <br />
                            </b>
                            Свяжитесь с нами сегодня, чтобы узнать больше
                            <br /> о наших услугах и начать сотрудничество.
                        </div>
                        <Image
                            className={styles.container__reality__bigImg}
                            src={descriptionBigShape}
                            alt=""
                        />
                        <Image
                            className={styles.container__reality__smallImg}
                            src={descriptionSmallShape}
                            alt=""
                        />
                        <Button onClick={() => setIsModalOpen(true)}>
                            Хочу проект!
                        </Button>
                    </div>
                    <div className={styles.container__takeUs}>
                        <h3>Почему выбирают нас?</h3>
                        <div className={styles.container__takeUs__container}>
                            <div className={styles.container__takeUs__block1}>
                                <div className={styles.container__takeUs__item}>
                                    <div
                                        className={
                                            styles.container__takeUs__header
                                        }
                                    >
                                        <h5>
                                            Опыт
                                            <br /> и профессионализм
                                        </h5>
                                        <StarSVG />
                                    </div>
                                    <p>
                                        Наша команда состоит из опытных
                                        разработчиков, дизайнеров, менеджеров и
                                        программистов. Мы знаем, как создать
                                        сайт, который будет соответствовать
                                        вашим потребностям и целям.
                                    </p>
                                </div>
                                <div className={styles.container__takeUs__item}>
                                    <div
                                        className={
                                            styles.container__takeUs__header
                                        }
                                    >
                                        <h5>
                                            Индивидуальный
                                            <br />
                                            подход
                                        </h5>
                                        <StarSVG />
                                    </div>
                                    <p>
                                        Мы не предлагаем готовые решения — мы
                                        разрабатываем уникальные сайты и
                                        приложения, которые учитывают
                                        особенности вашего бизнеса и целевую
                                        аудиторию.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.container__takeUs__block2}>
                                <div className={styles.container__takeUs__item}>
                                    <div
                                        className={
                                            styles.container__takeUs__header
                                        }
                                    >
                                        <h5>
                                            Современные
                                            <br /> технологии
                                        </h5>
                                        <StarSVG />
                                    </div>
                                    <p>
                                        Мы используем современные технологии и
                                        инструменты для создания сайтов и
                                        приложений, которые соответствуют
                                        последним тенденциям в веб-разработке.
                                    </p>
                                </div>
                                <div className={styles.container__takeUs__item}>
                                    <div
                                        className={
                                            styles.container__takeUs__header
                                        }
                                    >
                                        <h5>
                                            Комплексный
                                            <br /> подход
                                        </h5>
                                        <StarSVG />
                                    </div>
                                    <p>
                                        Помимо разработки, мы предлагаем услуги
                                        по интеграции с популярными сервисами,
                                        пишем боты для Telegram, VK, WhatsApp,
                                        Mini App, пишем системы автоматизации
                                        для бизнеса и многое другое.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.container__services}>
                        <p>
                            С полным списком наших скиллов вы можете
                            <br /> ознакомиться на странице услуги
                        </p>
                        <Button>
                            <p>Показать все услуги</p>
                            <ArrowSVG />
                        </Button>
                    </div>

                    <div className={styles.container__offers}>
                        <h3>Что мы предлагаем:</h3>
                        <ul>
                            <li>
                                <DesktopSVG />
                                <p>Разработка сайтов любой сложности</p>
                            </li>
                            <li>
                                <PaletteSVG />
                                <p>Адаптивный дизайн</p>
                            </li>
                            <li>
                                <Star2SVG />
                                <p>Интеграция с популярными сервисами</p>
                            </li>
                            <li>
                                <PhoneSVG />
                                <p>Разработка мобильных приложений</p>
                            </li>
                            <li>
                                <SuitcaseSVG />
                                <p>Аутстаффинг IT-специалистов</p>
                            </li>
                            <Image
                                className={styles.container__offers__img}
                                src={offerShape}
                                alt=""
                            />
                        </ul>
                        <Button>
                            <p>Показать все услуги</p>
                            <ArrowSVG />
                        </Button>
                    </div>

                    <div className={styles.container__projects__header}>
                        <h3>Проекты, реализованные нами</h3>
                        <Button>
                            <p>Все проекты</p>
                        </Button>
                    </div>

                    <div className={styles.container__projects}>
                        <div className={styles.container__projects__item}>
                            <div
                                className={styles.container__projects__shareImg}
                            >
                                <Image src={projectKitchenImg} alt="f" />
                            </div>
                            <p>
                                текст текст текст текст текст текст текст текст
                            </p>
                        </div>
                        <div className={styles.container__projects__item}>
                            <div
                                className={styles.container__projects__shareImg}
                            >
                                <Image src={projectRukalineImg} alt="f" />
                            </div>
                            <p>
                                текст текст текст текст текст текст текст текст
                            </p>
                        </div>
                        <div className={styles.container__projects__item}>
                            <div
                                className={styles.container__projects__shareImg}
                            >
                                {' '}
                                <Image src={projectFoodImg} alt="f" />
                            </div>
                            <p>
                                текст текст текст текст текст текст текст текст
                            </p>
                        </div>
                        <div className={styles.container__projects__item}>
                            <div
                                className={styles.container__projects__shareImg}
                            >
                                <Image src={projectMandarinaImg} alt="f" />
                            </div>
                            <p>
                                текст текст текст текст текст текст текст текст
                            </p>
                        </div>

                        <Image
                            className={styles.container__projects__img}
                            src={projectsShape}
                            alt=""
                        />
                    </div>

                    <div className={styles.container__skills}>
                        <h3>Наши 3 кита в работе с клиентами</h3>
                        <ul>
                            <li>
                                <PipelineSVG />
                                <h5>Адаптивность </h5>
                                <p>
                                    У нас уже есть готовые
                                    <br /> решения, но мы также
                                    <br /> открыты к новым задачам <br />и
                                    готовы адаптироваться
                                    <br /> под ваши потребности.
                                </p>
                            </li>
                            <li>
                                <GearSVG />
                                <h5>Внедрение</h5>
                                <p>
                                    Мы берем на себя
                                    <br /> полное погружение
                                    <br /> и обслуживание вашего
                                    <br /> проекта от разработки <br />
                                    до дизайна и тестировки.
                                </p>
                            </li>
                            <li>
                                <OverlapSVG />
                                <h5>Детализация</h5>
                                <p>
                                    Мы внимательны <br /> к деталям, соблюдаем{' '}
                                    <br /> сроки и подходим <br /> к каждому
                                    проекту <br /> с глубоким пониманием.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <Footer />
                </div>
            </div>
        </>
    )
}
