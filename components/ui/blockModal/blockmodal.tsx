import React, { useState, useEffect } from 'react'
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
    isOpen?: boolean
    onClose?: () => void
    mode?: 'modal' | 'inline'
    showImage?: boolean
    initialValues?: Partial<IFormData>
    className?: string
}

interface IFormData {
    name: string
    phone: string
    description: string
    isAgree: boolean
}

const Blockmodal: React.FC<ModalProps> = ({
    title,
    children,
    isOpen = true,
    onClose,
    mode = 'inline',
    showImage = true,
    initialValues = {},
    className = '',
}) => {
    const [form, setForm] = useState<IFormData>({
        description: '',
        name: '',
        phone: '',
        isAgree: false,
        ...initialValues,
    })

    const [load, setLoad] = useState(false)
    const [showThankYou, setShowThankYou] = useState(false)

    // Обработка закрытия по ESC только для модального режима
    useEffect(() => {
        if (mode !== 'modal') return

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && onClose) {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
            // Блокируем скролл только для модального окна
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen, mode, onClose])

    const handleField = <K extends keyof IFormData>(
        key: K,
        value: IFormData[K]
    ) => {
        setForm((prev) => ({ ...prev, [key]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault() // Добавлено предотвращение перезагрузки страницы
        
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
    if (mode === 'modal' && !isOpen) {
        return null
    }

    // Основной контент формы
    const formContent = (
        <div className={`${styles.modal} ${className}`}>
            <div className={styles.modal__container}>
                <div className={styles.modal__blockcontent}>
                    <div className={styles.modal__imagefr}>
                        <p className={styles.modal__title}>
                            Оставьте контакты, чтобы обсудить проект и условия
                            сотрудничества.
                        </p>
                        {/* <p
                            className={styles.formSubtitle}
                            // dangerouslySetInnerHTML={{ __html: subtitle.replace('<br />', '<br/>') }}
                        /> */}
                    </div>
                    <div>
                        <form
                            className={styles.modal__forminput}
                            onSubmit={handleSubmit}
                        >
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
                            <div className={styles.modal__checkboxContainer}>
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
                               
                            </div>
                            <Button
                                className={styles.modal__submitButton}
                                loading={load}
                                disabled={loadDisabled}
                                type="submit"
                            >
                                Отправить
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

            {showThankYou && (
                <div className={styles.modal__thankYouOverlay}>
                    <div className={styles.modal__thankYouContent}>
                        <p className={styles.modal__thankYouText}>
                            Спасибо за обращение к нам! С вами свяжутся в
                            течении часа для обсуждения вашего проекта.
                        </p>
                        <button
                            className={styles.modal__thankYouClose}
                            onClick={() => setShowThankYou(false)}
                        >
                            <CloseSVG />
                        </button>
                    </div>
                </div>
            )}
        </div>
    )

    // Рендерим в зависимости от режима
    if (mode === 'modal') {
        return (
            <div className={styles.modalOverlay} onClick={onClose}>
                <div
                    className={styles.modalContent}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        className={styles.modalCloseButton}
                        onClick={onClose}
                    >
                        <CloseSVG />
                    </button>
                    {formContent}
                </div>
            </div>
        )
    }

    // Inline режим
    return formContent
}

export default Blockmodal
