'use client'
import Image from 'next/image'
import { Header } from '@/components/header/Header'
import { Footer } from '@/components/footer/Footer'
import styles from './page.module.scss'
import { useState } from 'react'

import {
    offerShape,
    // descriptionSmallShape,
    descriptionBigShape,
    // projectsShape,
} from '@/public/img'

export default function Cookie() {
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
            <div className={styles.cookie}>
                <div className={styles.cookie__shapes}>
                    <Image
                        className={styles.cookie__offerShape}
                        src={offerShape}
                        alt=""
                        // width={600}
                        // height={400}
                        priority={true}
                    />
                </div>
                <div className={styles.cookie__container}>
                    <div className={styles.cookie__content}>
                        <h1 className={styles.cookie__title}>
                            Согласие на обработку <br /> электронных
                            пользовательских <br />
                            данных (файлы cookie)
                        </h1>
                        <p className={styles.cookie__text}>
                            Согласие разработано в соответствии с Политикой
                            защиты и обработки персональных данных Entergen
                            <br />
                            <a className={styles.cookie__text__link} href="#">
                                ссылка на полное соглашение.
                            </a>
                        </p>
                        <p className={styles.cookie__text}>
                            Настоящим, своей волей и в своих интересах даю
                            согласие индивидуальному предпренимателю
                            «Кутибашвилли Илья Вахтангович» (ИНН 026108697408),
                            на смешанную (автоматизированную, не
                            автоматизированную) обработку электронных
                            пользовательских данных, включая: сведения о
                            местоположении, название и версия браузера, тип
                            устройства; история посещений и переходов, ip-адрес,
                            файлы cookie, в том числе с помощью сервисов
                            веб-аналитики Яндекс.Метрика, путем совершения
                            следующих действий: сбор, запись, систематизация,
                            накопление, хранение, уточнение (обновление,
                            изменение), извлечение, передача (предоставление,
                            доступ), использование, блокирование, удаление,
                            уничтожение.
                        </p>
                        <p className={styles.cookie__text}>
                            Обработка данных осуществляется в целях сбора
                            обратной связи, в том числе обработки запросов и
                            обращений, осуществления взаимодействия с Оператором
                            через сайты Оператора. Настоящее согласие действует
                            с момента его предоставления и в течение всего
                            периода использования сайта.
                        </p>
                        <p className={styles.cookie__text}>
                            В случае отказа от обработки данных я
                            проинформирован о необходимости прекратить
                            использование сайта или отключить файлы cookie в
                            настройках браузера.
                        </p>
                    </div>
                    <div className={styles.cookie__shapes}>                        
                        <Image
                            className={styles.cookie__descriptionBigShape}
                            src={descriptionBigShape}
                            alt=""
                            width={600}
                            height={400}
                            priority={true}
                        />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
