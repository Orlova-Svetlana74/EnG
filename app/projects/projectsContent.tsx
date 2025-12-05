'use client'
import styles from './page.module.scss'
import Image from 'next/image'
import { Header } from '@/components/header/Header'
import { Footer } from '@/components/footer/Footer'
import StrelkaLeftSVG from '@/svg/StrelkaLeftSVG'
import StrelkaRightSVG from '@/svg/StrelkaRightSVG'
import { useState, useEffect, useCallback } from 'react'
import { projects } from '@/data/dataprojects'
import {
    mainShape,
    descriptionSmallShape,
    descriptionBigShape,
    projectsShape,
    offerShape,
} from '@/public/img'
import { useRouter, useSearchParams } from 'next/navigation' // Добавлен импорт useRouter

export function ProjectsContent() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const urlFilter = searchParams.get('filter') || 'all'
    const urlPage = searchParams.get('page') || '1'

    const [activeFilter, setActiveFilter] = useState('all')
    const [isMenu, setIsMenu] = useState(false)
    const [isMenuHeader, setIsMenuHeader] = useState(false)

    const [currentPage, setCurrentPage] = useState(parseInt(urlPage))
    const [projectsPerPage] = useState(6)

    const handlerButtonClick = () => {
        setIsMenuHeader(true)
        setIsMenu(true)
    }

    const updateQueryParams = useCallback(
        (filter: string, page: number) => {
            const params = new URLSearchParams()
            if (filter !== 'all') {
                params.set('filter', filter)
            }
            if (page !== 1) {
                params.set('page', page.toString())
            }

            const queryString = params.toString()
            const newUrl = queryString
                ? `/projects?${queryString}`
                : '/projects'

            router.replace(newUrl, { scroll: false })
        },
        [router]
    )

    const handleProjectClick = useCallback(
        (projectId: number) => {
            router.push(`/projects/${projectId}`)
        },
        [router]
    )

    const filters = [
        { key: 'all', label: 'Все проекты' },
        { key: 'site-dev', label: 'Разработка сайтов' },
        { key: 'app-dev', label: 'Разработка приложений' },
        { key: 'bot-dev', label: 'Разработка тг ботов' },
        { key: 'ai-assistant', label: 'AI-ассистенты' },
    ]

    const filteredProjects =
        activeFilter === 'all'
            ? projects
            : projects.filter((project) => project.category === activeFilter)

    useEffect(() => {
        const filter = searchParams.get('filter') || 'all'
        const page = parseInt(searchParams.get('page') || '1')

        setActiveFilter(filter)
        setCurrentPage(page)
    }, [searchParams])

    const handleFilterClick = useCallback(
        (filterKey: string) => {
            if (filterKey === activeFilter) return

            setActiveFilter(filterKey)
            setCurrentPage(1)
            updateQueryParams(filterKey, 1)
        },
        [activeFilter, updateQueryParams]
    )

    // Логика пагинации
    const indexOfLastProject = currentPage * projectsPerPage
    const indexOfFirstProject = indexOfLastProject - projectsPerPage
    const currentProjects = filteredProjects.slice(
        indexOfFirstProject,
        indexOfLastProject
    )
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)

    // Функции для изменения страницы с обновлением URL
    const nextPage = () => {
        if (currentPage < totalPages) {
            const newPage = currentPage + 1
            setCurrentPage(newPage)
            updateQueryParams(activeFilter, newPage)
            // Прокрутка к верху страницы
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            const newPage = currentPage - 1
            setCurrentPage(newPage)
            updateQueryParams(activeFilter, newPage)
            // Прокрутка к верху страницы
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    const goToPage = (pageNumber: number) => {
        setCurrentPage(pageNumber)
        updateQueryParams(activeFilter, pageNumber)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const getPageNumbers = () => {
        const pageNumbers = []
        const maxVisiblePages = 5

        let startPage = Math.max(
            1,
            currentPage - Math.floor(maxVisiblePages / 2)
        )
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1)
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i)
        }

        return pageNumbers
    }

    useEffect(() => {
        const filterFromUrl = searchParams.get('filter')
        const pageFromUrl = searchParams.get('page')

        if (filterFromUrl && filterFromUrl !== activeFilter) {
            setActiveFilter(filterFromUrl)
        }
        if (pageFromUrl && parseInt(pageFromUrl) !== currentPage) {
            setCurrentPage(parseInt(pageFromUrl))
        }
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

                    <div className={styles.wrapper__filterNav}>
                        <div className={styles.wrapper__filterRow}>
                            {filters.map((filter) => (
                                <button
                                    key={filter.key}
                                    type="button"
                                    className={`${styles.wrapper__filterButton} ${
                                        activeFilter === filter.key
                                            ? styles.wrapper__filterButtonActive
                                            : ''
                                    }`}
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
                <div className={styles.wrapper__shape}>
                    <Image
                        className={`${styles.wrapper__shape} ${styles['wrapper__shape--mainShape']}`}
                        src={mainShape}
                        alt=""
                    />
                    <Image
                        className={`${styles.wrapper__shape} ${styles['wrapper__shape--offerShape']}`}
                        src={offerShape}
                        alt=""
                        priority={true}
                    />
                    <Image
                        className={`${styles.wrapper__shape} ${styles['wrapper__shape--descriptionSmallShape']}`}
                        src={descriptionSmallShape}
                        alt=""
                        priority={true}
                    />
                </div>
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
                <Image
                    className={styles.wrapper__offerShapefooter}
                    src={offerShape}
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
                                className={styles.wrapper__strelkaRight}
                            />
                        </button>
                    </div>
                )}
                <Footer />
            </div>
        </>
    )
}
