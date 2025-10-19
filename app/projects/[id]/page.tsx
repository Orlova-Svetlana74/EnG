'use client'

import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { projects } from '@/data/dataprojects'
import { Header } from '@/components/header/Header'
import { Footer } from '@/components/footer/Footer'
import Image from 'next/image'
import styles from './page.module.scss'
import { notFound, useRouter } from 'next/navigation'
import {
    descriptionSmallShape,
    descriptionBigShape,
    offerShape,
    projectsShape,
} from '@/public/img'

export default function ProjectDetailPage() {
    const params = useParams()
    const router = useRouter()
    const projectId = params.id as string

    const [project, setProject] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isMenuHeader, setIsMenuHeader] = useState(false)

    useEffect(() => {
        // Преобразуем string ID в number для поиска
        const numericId = parseInt(projectId, 10)

        // Если преобразование не удалось, показываем 404
        if (isNaN(numericId)) {
            setIsLoading(false)
            return
        }

        // Имитация загрузки данных
        const foundProject = projects.find((p) => p.id === numericId)

        if (foundProject) {
            setProject(foundProject)
        }

        setIsLoading(false)
    }, [projectId])

    const handlerButtonClick = () => {
        setIsMenuHeader(true)
    }

    if (isLoading) {
        return (
            <>
                <Header
                    isMenuHeader={isMenuHeader}
                    setIsMenuHeader={setIsMenuHeader}
                    handlerButtonClick={handlerButtonClick}
                />
                <div className="loading-container">
                    <p>Загрузка проекта...</p>
                </div>
                <Footer />
            </>
        )
    }

    if (!project) {
        notFound()
    }

    return (
        <>
            <Header
                isMenuHeader={isMenuHeader}
                setIsMenuHeader={setIsMenuHeader}
                handlerButtonClick={handlerButtonClick}
            />

            <div className={styles.project}>
                <div className={styles.project__container}>
                    <Image
                        className={styles.project__offerShape}
                        src={offerShape}
                        alt=""
                        priority={true}
                    />
                    {/* Заголовок */}
                    <h1 className={styles.project__title}>
                        {project.toptitle}
                    </h1>

                    {/* Изображение */}
                    {project.image && (
                        <div className={styles.project__image}>
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={1200}
                                height={600}
                                className={styles.project__image}
                            />
                        </div>
                    )}

                    <p className={styles.project__toptext}>{project.toptext}</p>

                    <div>
                        {/* Задачи */}
                        {project.tasks && project.tasks.length > 0 && (
                            <Section title="Задачи" items={project.tasks} />
                        )}
                        <Image
                            className={styles.project__descriptionSmallShape}
                            src={descriptionSmallShape}
                            alt=""
                            priority={true}
                        />

                        {/* Решения */}
                        {project.solutions && project.solutions.length > 0 && (
                            <Section
                                title="Решения"
                                items={project.solutions}
                            />
                        )}

                        {/* Результаты */}
                        {project.results && project.results.length > 0 && (
                            <Section
                                title="Результаты"
                                items={project.results}
                            />
                        )}
                        <Image
                            className={styles.project__projectsShape}
                            src={projectsShape}
                            alt=""
                            priority={true}
                        />
                    </div>
                </div>
                <Image
                    className={styles.project__descriptionBigShape}
                    src={descriptionBigShape}
                    alt=""
                    priority={true}
                />
                <Footer />
            </div>
        </>
    )
}

// Компонент для отображения секций
function Section({ title, items }: { title: string; items: string[] }) {
    return (
        <div className={styles.project__section}>
            <h2 className={styles.project__subtitle}>{title}</h2>
            <ul className={styles.project__toptext}>
                {items.map((item, index) => (
                    <li key={index}>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

// Вспомогательная функция для получения названия категории
function getCategoryLabel(categoryKey: string): string {
    const categoryMap: { [key: string]: string } = {
        all: 'Все проекты',
        'site-dev': 'Разработка сайтов',
        'app-dev': 'Разработка приложений',
        'bot-dev': 'Разработка Telegram ботов',
        'tech-projects': 'AI-ассистенты',
        'ai-assistant': 'AI-ассистенты',
    }
    return categoryMap[categoryKey] || categoryKey
}
