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

    const sendForm = async () => {
        setLoad(true)
        try {
            const res = await $host.post('profile', { name: form.phone })
            message.success('Форма успешно отправлена')
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
                        Свяжитесь с нами, чтобы узнать больше <br /> о наших услугах и
                        начать работу <br /> над вашим проектом.
                    </p>
                </div>
                <div>
                    <p className={styles.modal__title}>Обсудить проект</p>
                    <Input className={styles.modal__input}
                        value={form.name}
                        disabled={load}
                        onChange={(e) =>
                            handleField('name', e.currentTarget.value)
                        }
                        placeholder="Имя или организация"
                    />
                    <Input className={styles.modal__input}
                        value={form.phone}
                        disabled={load}
                        onChange={(e) =>
                            handleField('phone', e.currentTarget.value)
                        }
                        placeholder="Телефон или Email"
                    />
                    <Input className={styles.modal__input}
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
                    <Button className={styles.modal__buttonsend}
                        loading={load}
                        disabled={loadDisabled}
                        onClick={sendForm}
                    >
                        Отправить
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Blockmodal
