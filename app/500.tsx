'use client'
import React, { useState } from 'react'
import styles from './not-found.module.scss'
import Image from 'next/image'
import { Header } from '@/components/header/Header'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Footer } from '@/components/footer/Footer'
import Error505SVG from '@/svg/Error505SVG'
import Blockmodal from '@/components/ui/blockModal/blockmodal'

import {
    descriptionSmallShape,
    descriptionBigShape,
    offerShape,
    ErrorVector,
    ErrorVector2,
    ErrorVector3,
    Shape_,
} from '@/public/img'

export default function Custom500() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isMenu, setIsMenu] = useState(false)
    const [isMenuHeader, setIsMenuHeader] = useState(false)

    const router = useRouter()
    return (
        <>
            <Header
                isMenuHeader={isMenuHeader}
                setIsMenuHeader={setIsMenuHeader}
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
                <section className={styles.page__developsection}>
                    <div className={styles.page__developtitle}>
                        <h3 className={styles.page__title}>Ошибка 502</h3>
                        <p className={styles.page__titletext}>
                            Что-то сломалось, скоро все починим.  
                        </p>
                    </div>
                    <div className={styles.page__subtitlerobot}>
                        <Error505SVG />
                    </div>
                </section>

                <Image
                    className={styles.page__descriptionSmallShape}
                    src={descriptionSmallShape}
                    alt=""
                    priority={true}
                />
                <h2 className={styles.page__subtitle}>
                    Попробуйте следующие шаги:
                </h2>
                <Image
                    className={styles.page__Shape}
                    alt=""
                    src={Shape_}
                    width={546}
                    height={546}
                    priority={true}
                />
                <div className={styles.page__blockminiapps}>
                    <div className={styles.page__shoppingcart}>
                        <Image
                            src={ErrorVector}
                            alt=""
                            width={38}
                            height={37}
                            className={styles.page__icon}
                        />
                        <p className={styles.page__subtextlist}>
                            Проверьте подключение к интернету
                        </p>
                    </div>
                    <div className={styles.page__shoppingcart}>
                        <Image
                            src={ErrorVector2}
                            alt=""
                            width={38}
                            height={37}
                            className={styles.page__icon}
                        />
                        <p className={styles.page__subtextlist}>
                            Перезагрузите страницу
                        </p>
                    </div>
                    <div className={styles.page__shoppingcart}>
                        <Image
                            src={ErrorVector3}
                            alt=""
                            width={38}
                            height={37}
                            className={styles.page__icon}
                        />
                        <p className={styles.page__subtextlist}>
                            Откройте страницу через режим инкогнито
                        </p>
                    </div>
                </div>

                <Image
                    className={styles.page__descriptionBigShape}
                    src={descriptionBigShape}
                    alt=""
                    width={330}
                    height={330}
                    priority={true}
                />

                <Footer />
                <Image
                    className={styles.page__descriptionShape}
                    src={descriptionBigShape}
                    alt=""
                    width={330}
                    height={330}
                    priority={true}
                />
            </div>
        </>
    )
}
