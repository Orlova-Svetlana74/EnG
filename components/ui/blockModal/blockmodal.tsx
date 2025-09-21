import React, { useState } from 'react'
import styles from './blockmodal.module.scss'
import { CloseSVG } from '@/svg/CloseSvg'
import { Input } from '../input/Input'
import { Checkbox } from '../checkbox/Checkbox'
import { Button } from '../Button/Button'
import { $host } from '@/api/axios'
import { message } from '../message/messageApi'

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

    const handleField = <K extends keyof IFrom>(key: K, value: IFrom[K]) => {
        setForm((prev) => ({ ...prev, [key]: value }))
    }

    const [showThankYou, setShowThankYou] = useState(false)

    const sendForm = async () => {
        setLoad(true)
        try {
            const res = await $host.post('profile', { name: form.phone })
            setShowThankYou(true) // Показываем блок благодарности

            // Очистка формы после успешной отправки
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
                <div>
                    <p className={styles.modal__subtitle}>
                        Свяжитесь с нами, чтобы узнать больше <br /> о наших
                        услугах и начать работу <br /> над вашим проектом.
                    </p>
                </div>
                <div>
                    <p className={styles.modal__title}>Обсудить проект</p>
                    <Input
                        className={styles.modal__input}
                        value={form.name}
                        disabled={load}
                        onChange={(e) =>
                            handleField('name', e.currentTarget.value)
                        }
                        placeholder="Имя или организация"
                    />
                    <Input
                        className={styles.modal__input}
                        value={form.phone}
                        disabled={load}
                        onChange={(e) =>
                            handleField('phone', e.currentTarget.value)
                        }
                        placeholder="Телефон или Email"
                    />
                    <Input
                        className={styles.modal__input}
                        value={form.description}
                        disabled={load}
                        onChange={(e) =>
                            handleField('description', e.currentTarget.value)
                        }
                        placeholder="Расскажите про проект"
                    />
                    <Checkbox
                        disabled={load}
                        checked={form.isAgree}
                        onChange={(e) =>
                            handleField('isAgree', e.currentTarget.checked)
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
                    {showThankYou && (
                        <div
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                zIndex: 1000,
                            }}
                        >
                            <div
                                style={{
                                    padding: '50px',
                                    background: '#BADAFE',
                                    borderRadius: '21.48px',
                                    textAlign: 'left',
                                    position: 'relative',
                                    // boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                                }}
                            >
                                <p
                                    style={{
                                        fontSize: '27px',
                                    }}
                                >
                                    Спасибо за обращение к нам! <br /> С вами свяжутся
                                    в течении часа <br /> для обсуждения вашего
                                    проекта.
                                </p>
                                <button
                                    onClick={() => setShowThankYou(false)}
                                    style={{
                                        position: 'absolute',
                                        top: '15px',
                                        right: '15px',
                                        background: 'none',
                                        border: 'none',
                                        fontSize: '50px',
                                        cursor: 'pointer',
                                        color: '#004577',
                                        padding: '5px',
                                    }}
                                >
                                    ×
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Blockmodal
