import React, { useState } from 'react'
import styles from './blockmodal.module.scss'
import { CloseSVG } from '@/svg/CloseSvg'
import { Input } from '../input/Input'
import { Checkbox } from '../checkbox/Checkbox'
import { Button } from '../Button/Button'
import { $host } from '@/api/axios'
import { message } from '../message/messageApi'
import Image from 'next/image'
import { Frametwo } from '@/img'

interface ModalProps {
    title?: string
    children?: React.ReactNode
}

interface IFrom {
    name: string
    phone: string
    description: string
    isAgree: boolean
}

const Blockmodal: React.FC<ModalProps> = ({ title, children }) => {
    const [form, setForm] = useState<IFrom>({
        description: '',
        name: '',
        phone: '',
        isAgree: false,
    })

    const [load, setLoad] = useState(false)
    const [showThankYou, setShowThankYou] = useState(false)

    const handleField = <K extends keyof IFrom>(key: K, value: IFrom[K]) => {
        setForm((prev) => ({ ...prev, [key]: value }))
    }

    const sendForm = async () => {
        setLoad(true)
        try {
            const res = await $host.post('profile', { name: form.phone })
            setShowThankYou(true)
            setForm({
                description: '',
                name: '',
                phone: '',
                isAgree: false,
            })
        } catch (error) {
            message.error('Что-то пошло не так')
        }
        setLoad(false)
    }

    const loadDisabled = !(
        form.description &&
        form.isAgree &&
        form.name &&
        form.phone &&
        !load
    )

    return (
        <div className={styles.modal}>
            <div className={styles.modal__container}>
                <div className={styles.modal__blockcontent}>
                    <div className={styles.modal__blockmodal} >
                        {/* <div> */}
                            <p className={styles.modal__title}>
                                Обсудить проект
                            </p>
                            <p className={styles.modal__subtitle}>
                                Оставьте контакты, чтобы обсудить проект <br />
                                и условия сотрудничества.
                            </p>
                        {/* </div> */}

                        <div>
                            <Input
                                className={styles.modal__inputform}
                                value={form.name}
                                disabled={load}
                                onChange={(e) =>
                                    handleField('name', e.currentTarget.value)
                                }
                                placeholder="Имя или организация"
                            />
                            <Input
                                className={styles.modal__inputform}
                                value={form.phone}
                                disabled={load}
                                onChange={(e) =>
                                    handleField('phone', e.currentTarget.value)
                                }
                                placeholder="Телефон или Email"
                            />
                            <Input
                                className={styles.modal__inputform}
                                value={form.description}
                                disabled={load}
                                onChange={(e) =>
                                    handleField(
                                        'description',
                                        e.currentTarget.value
                                    )
                                }
                                placeholder="Расскажите про проект"
                            />
                            <Checkbox
                                disabled={load}
                                checked={form.isAgree}
                                onChange={(e) =>
                                    handleField(
                                        'isAgree',
                                        e.currentTarget.checked
                                    )
                                }
                            />
                            <Button
                                className={styles.modal__buttonsend}
                                loading={load}
                                disabled={loadDisabled}
                                onClick={sendForm}
                            >
                                Отправить
                            </Button>
                        </div>
                    </div>

                    <div className={styles.modal__imagefr}>
                        <Image
                            className={styles.modal__frametwo}
                            src={Frametwo}
                            alt=""
                            // width={553}
                            // height={459}
                            // priority={true}
                        />
                    </div>
                </div>

                {showThankYou && (
                    <div className={styles.thankYouOverlay}>
                        <div className={styles.thankYouContent}>
                            <p className={styles.thankYouText}>
                                Спасибо за обращение к нам! С вами
                                свяжутся в течении часа для обсуждения
                                вашего проекта.
                            </p>
                            <button
                                className={styles.thankYouClose}
                                onClick={() => setShowThankYou(false)}
                            >
                                <CloseSVG />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Blockmodal
