'use client'
import Image from 'next/image'
import { Header } from '@/components/header/Header'
import { Footer } from '@/components/footer/Footer'
import styles from './page.module.scss'
// import { Button } from '@/components/ui/Button/Button'
import { useState } from 'react'
// import Link from 'next/link'
import { projects } from '@/data/dataprojects'

// import {
//     projectKitchenImg,
//     // offerShape,
//     // projectsShape,
//     // skillsShape,
//     // descriptionBigShape,
//     // icongear,
//     // Frametwo,
// } from '@/public/img'

const ProjectsPage = () => {
    const [activeFilter, setActiveFilter] = useState('all')

    const [isMenu, setIsMenu] = useState(false)
    const [isMenuHeader, setIsMenuHeader] = useState(false)
    const handlerButtonClick = () => {
        setIsMenuHeader(true)
        setIsMenu(true)
    }

    // Фильтры меню
    const filters = [
        { key: 'all', label: 'Все проекты' },
        { key: 'site-dev', label: 'Разработка сайтов' },
        { key: 'app-dev', label: 'Разработка приложений' },
        { key: 'design', label: 'Дизайны' },
        { key: 'services', label: 'Сервисы' },
        { key: 'backend', label: 'Backend разработка' },
        { key: 'tech-projects', label: 'Технические проекты' },
        { key: 'bot-dev', label: 'Разработка ботов' },
    ]

    // Фильтрация проектов
    const filteredProjects =
        activeFilter === 'all'
            ? projects
            : projects.filter((project) => project.category === activeFilter)

    const handleFilterClick = (filterKey: string) => {
        setActiveFilter(filterKey)
    }

    return (
        <>
            <Header
                isMenuHeader={isMenuHeader}
                setIsMenuHeader={setIsMenuHeader}
                handlerButtonClick={handlerButtonClick}
            />
            <div className={styles.wrapper}>
                <section className={styles.wrapper__project}>
                    <h1 className={styles.wrapper__pageTitle}>Проекты</h1>
                    <div className={styles.wrapper__filterNav}>
                        {filters.map((filter) => (
                            <nav
                                key={filter.key}
                                className={`${styles.wrapper__filterButton} ${
                                    activeFilter === filter.key
                                        ? styles.active
                                        : ''
                                }`}
                                onClick={() => handleFilterClick(filter.key)}
                            >
                                {filter.label}
                            </nav>
                        ))}
                    </div>
                </section>

                {/* <div className={styles.wrapper__divider}></div> */}

                {/* Сетка проектов */}
                <div className={styles.wrapper__projectsGrid}>
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className={styles.wrapper__projectCard}
                        >
                            {/* Заголовок раздела (если есть) */}
                            {/* {project.section && (
                                <div className={styles.wrapper__projectSection}>
                                    <span>Раздел:</span>
                                    <p>{project.section}</p>
                                </div>
                            )} */}

                            {/* Карточка проекта */}
                            <div className={styles.wrapper__cardContent}>
                                <div className={styles.wrapper__projectImage}>
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={616} 
                                            height={300} 
                                            className={styles.wrapper__image}                                            
                                        />
                                    ) : (
                                        <div
                                            className={
                                                styles.wrapper__imagePlaceholder
                                            }
                                        >
                                            📁
                                        </div>
                                    )}
                                </div>

                                <div className={styles.wrapper__projectInfo}>
                                    <div
                                        className={
                                            styles.wrapper__projectHeader
                                        }
                                    >
                                        <h3
                                            className={
                                                styles.wrapper__projectTitle
                                            }
                                        >
                                            {project.title}
                                        </h3>
                                    </div>

                                    <div
                                        className={
                                            styles.wrapper__projectDescription
                                        }
                                    >
                                        {project.description.includes('**') ? (
                                            <>
                                                <strong>
                                                    {
                                                        project.description.split(
                                                            '**'
                                                        )[1]
                                                    }
                                                </strong>
                                                {
                                                    project.description.split(
                                                        '**'
                                                    )[2]
                                                }
                                            </>
                                        ) : (
                                            project.description
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Сообщение, если нет проектов */}
                {filteredProjects.length === 0 && (
                    <div className={styles.wrapper__noProjects}>
                        <p>Проекты не найдены</p>
                    </div>
                )}
                <Footer />
            </div>
        </>
    )
}

export default ProjectsPage
