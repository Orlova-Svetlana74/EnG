'use client'

import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { projects } from '@/data/dataprojects'
import { Header } from '@/components/header/Header'
import { Footer } from '@/components/footer/Footer'
import Image from 'next/image'
import { notFound, useRouter } from 'next/navigation'

// Тип для параметров
// interface ProjectParams {
//     id: number
// }

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

            <div className="project-detail">
                <div className="project-detail__container">
                    {/* Кнопка назад */}
                    <button
                        onClick={() => window.history.back()}
                        className="project-detail__back-button"
                    >
                        ← Назад к проектам
                    </button>

                    {/* Заголовок */}
                    <h1 className="project-detail__title">{project.title}</h1>

                    {/* Изображение */}
                    {project.image && (
                        <div className="project-detail__image">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={1200}
                                height={600}
                                className="project-detail__image-img"
                            />
                        </div>
                    )}

                    {/* Описание */}
                    <div className="project-detail__description">
                        {project.description.includes('**') ? (
                            <>
                                <strong>
                                    {project.description.split('**')[1]}
                                </strong>
                                {project.description.split('**')[2]}
                            </>
                        ) : (
                            project.description
                        )}
                    </div>
                    <div style={{ display: 'grid', gap: '2rem', marginBottom: '2rem' }}>
                        {/* Задачи */}
                        {project.tasks && project.tasks.length > 0 && (
                            <Section title="Задачи" items={project.tasks} />
                        )}

                        {/* Решения */}
                        {project.solutions && project.solutions.length > 0 && (
                            <Section title="Решения" items={project.solutions} />
                        )}

                        {/* Результаты */}
                        {project.results && project.results.length > 0 && (
                            <Section title="Результаты" items={project.results} />
                        )}
                    </div>

                    {/* Дополнительная информация */}
                    <div className="project-detail__meta">
                        <div className="project-detail__category">
                            <strong>Категория:</strong>{' '}
                            {getCategoryLabel(project.category)}
                        </div>
                        {project.technologies && (
                            <div className="project-detail__technologies">
                                <strong>Технологии:</strong>{' '}
                                {project.technologies.join(', ')}
                            </div>
                        )}
                        {project.link && (
                            <div className="project-detail__link">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-detail__link-button"
                                >
                                    Посмотреть проект →
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

// Компонент для отображения секций
function Section({ title, items }: { title: string; items: string[] }) {
    return (
        <div style={{
            background: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            border: '1px solid #e0e0e0'
        }}>
            <h2 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '1rem',
                color: '#333',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
            }}>
                <span style={{
                    display: 'inline-block',
                    width: '4px',
                    height: '1.5rem',
                    background: '#0070f3',
                    borderRadius: '2px'
                }}></span>
                {title}
            </h2>
            <ul style={{ 
                listStyle: 'none',
                padding: 0,
                margin: 0
            }}>
                {items.map((item, index) => (
                    <li key={index} style={{
                        padding: '0.75rem 0',
                        borderBottom: index < items.length - 1 ? '1px solid #f0f0f0' : 'none',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                        lineHeight: '1.5'
                    }}>
                        <span style={{
                            color: '#0070f3',
                            fontWeight: 'bold',
                            flexShrink: 0,
                            marginTop: '0.125rem'
                        }}>•</span>
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


