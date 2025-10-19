'use client'
import Image from 'next/image'
import { Header } from '@/components/header/Header'
import { Footer } from '@/components/footer/Footer'
import { StrelkaLeftSVG } from '@/svg/StrelkaLeftSVG'
import { StrelkaRightSVG } from '@/svg/StrelkaRightSVG'
import styles from './page.module.scss'
import { useState, useEffect, useCallback } from 'react'
import { projects } from '@/data/dataprojects'
import {
    descriptionSmallShape,
    descriptionBigShape,
    offerShape,
    projectsShape,
} from '@/public/img'
import { useRouter } from 'next/navigation' // Добавлен импорт useRouter

const ProjectsPage = () => {
    const [activeFilter, setActiveFilter] = useState('all')
    const [isMenu, setIsMenu] = useState(false)
    const [isMenuHeader, setIsMenuHeader] = useState(false)
    const router = useRouter() // Добавлен хук useRouter

    // Состояния для пагинации
    const [currentPage, setCurrentPage] = useState(1)
    const [projectsPerPage] = useState(6) // Количество проектов на странице

    const handlerButtonClick = () => {
        setIsMenuHeader(true)
        setIsMenu(true)
    }
    // Функция для перехода на страницу проекта
    const handleProjectClick = useCallback(
        (projectId: number) => {
            router.push(`/projects/${projectId}`)
        },
        [router]
    )

    // Фильтры меню
    const filters = [
        { key: 'all', label: 'Все проекты' },
        { key: 'site-dev', label: 'Разработка сайтов' },
        { key: 'app-dev', label: 'Разработка приложений' },
        { key: 'bot-dev', label: 'Разработка тг ботов' },
        { key: 'ai-assistant', label: 'AI-ассистенты' },
    ]

    // Фильтрация проектов с отладкой
    const filteredProjects =
        activeFilter === 'all'
            ? projects
            : projects.filter((project) => {
                  //   console.log(
                  //       `Checking project ${project.id}: category=${project.category}, filter=${activeFilter}, match=${project.category === activeFilter}`
                  //   )
                  return project.category === activeFilter
              })

    // Сброс пагинации при изменении фильтра
    useEffect(() => {
        setCurrentPage(1)
    }, [activeFilter])

    const handleFilterClick = useCallback(
        (filterKey: string) => {
            console.log(
                'Filter clicked:',
                filterKey,
                'Current active:',
                activeFilter
            )

            // Если кликаем на уже активный фильтр, ничего не делаем
            if (filterKey === activeFilter) {
                console.log('Same filter clicked, ignoring')
                return
            }

            setActiveFilter(filterKey)
        },
        [activeFilter]
    ) // Добавлена зависимость от activeFilte

    // Логика пагинации
    const indexOfLastProject = currentPage * projectsPerPage
    const indexOfFirstProject = indexOfLastProject - projectsPerPage
    const currentProjects = filteredProjects.slice(
        indexOfFirstProject,
        indexOfLastProject
    )
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)

    // Функции для изменения страницы
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const goToPage = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }

    // Генерация номеров страниц для отображения
    const getPageNumbers = () => {
        const pageNumbers = []
        const maxVisiblePages = 5 // Максимальное количество видимых номеров страниц

        let startPage = Math.max(
            1,
            currentPage - Math.floor(maxVisiblePages / 2)
        )
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

        // Корректируем startPage, если мы near the end
        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1)
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i)
        }

        return pageNumbers
    }
    // Отладочная информация при монтировании
    useEffect(() => {
        console.log('=== DEBUG PROJECTS DATA ===')
        console.log('Total projects:', projects.length)
        console.log('Projects by category:')
        filters.forEach((filter) => {
            if (filter.key === 'all') return
            const count = projects.filter(
                (p) => p.category === filter.key
            ).length
            console.log(`- ${filter.key}: ${count} projects`)
        })
        console.log('All categories in data:', [
            ...new Set(projects.map((p) => p.category)),
        ])
        console.log('======================')
    }, [])

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
                    <h2 className={styles.wrapper__pageTitleteem}>
                        Проекты, реализованные нашей командой
                    </h2>

                    {/* Отладочная информация */}
                    <div
                    // style={{
                    //     padding: '10px',
                    //     background: '#f5f5f5',
                    //     margin: '10px 0',
                    //     borderRadius: '4px',
                    //     fontSize: '14px',
                    // }}
                    >
                        {/* <strong>Отладка:</strong>
                        <br />
                        Активный фильтр:{' '}
                        <strong style={{ color: 'blue' }}>
                            {activeFilter}
                        </strong>
                        <br />
                        Всего проектов: {projects.length} | Показано:{' '}
                        {filteredProjects.length}
                        <br />
                        Категории:{' '} */}
                        {/* {filters
                            .filter((f) => f.key !== 'all')
                            .map(
                                (filter) =>
                                    `${filter.key}(${projects.filter((p) => p.category === filter.key).length})`
                            )
                            .join(', ')} */}
                    </div>

                    <div className={styles.wrapper__filterNav}>
                        {/* <Image
                            className={styles.wrapper__offerShape}
                            src={offerShape}
                            alt=""
                            priority={true}
                        />
                        <Image
                            className={styles.wrapper__descriptionSmallShape}
                            src={descriptionSmallShape}
                            alt=""
                            priority={true}
                        /> */}
                        <div className={styles.wrapper__filterRow}>
                            {filters.map((filter) => (
                                <button
                                    key={filter.key}
                                    type="button"
                                    className={styles.wrapper__filterButton}
                                    // className={`${styles.wrapper__filterButton} ${
                                    //     activeFilter === filter.key
                                    //         ? styles.active
                                    //         : ''
                                    // }`}
                                    onClick={() =>
                                        handleFilterClick(filter.key)
                                    }
                                >
                                    {filter.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                <div className={styles.wrapper__projectsGrid}>
                    {currentProjects.map((project) => (
                        <div
                            key={project.id}
                            className={styles.wrapper__projectCard}
                            onClick={() => handleProjectClick(project.id)}
                            style={{ cursor: 'pointer' }}
                        >
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
                        <p>Проекты не найдены для фильтра "{activeFilter}"</p>
                    </div>
                )}

                <Image
                    className={styles.wrapper__projectsShape}
                    src={projectsShape}
                    alt=""
                    priority={true}
                />
                <Image
                    className={styles.wrapper__descriptionBigShape}
                    src={descriptionBigShape}
                    alt=""
                    priority={true}
                />

                {/* Пагинация */}
                {filteredProjects.length > projectsPerPage && (
                    <div className={styles.wrapper__pagination}>
                        <button
                            className={`${styles.wrapper__paginationArrow} ${
                                currentPage === 1
                                    ? styles.wrapper__disabled
                                    : ''
                            }`}
                            onClick={prevPage}
                            disabled={currentPage === 1}
                        >
                            <StrelkaLeftSVG
                                className={styles.wrapper__strelkaLeft}
                            />
                        </button>

                        <div className={styles.wrapper__paginationNumbers}>
                            {getPageNumbers().map((pageNumber) => (
                                <button
                                    key={pageNumber}
                                    className={`${styles.wrapper__paginationNumber} ${
                                        currentPage === pageNumber
                                            ? styles.wrapper__active
                                            : ''
                                    }`}
                                    onClick={() => goToPage(pageNumber)}
                                >
                                    {pageNumber}
                                </button>
                            ))}
                        </div>

                        <button
                            className={`${styles.wrapper__paginationArrow} ${
                                currentPage === totalPages
                                    ? styles.wrapper__disabled
                                    : ''
                            }`}
                            onClick={nextPage}
                            disabled={currentPage === totalPages}
                        >
                            <StrelkaRightSVG
                                className={styles.wrapper__strelkaLeft}
                            />
                        </button>
                    </div>
                )}
                <Footer />
            </div>
        </>
    )
}

export default ProjectsPage
