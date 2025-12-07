import Image from 'next/image'
import styles from './slider.module.scss'
import StrelkaLeftSVG from '@/svg/StrelkaLeftSVG'
import StrelkaRightSVG from '@/svg/StrelkaRightSVG'
import {
    seniorBack,
    seniorFrontend,
    seniorDisign,
    middleBack,
    middleBackend,
    middleFront,
    juniorFront,
    middleDisign,
    projectManager,
} from '@/public/img'
import { useState, useEffect, useRef } from 'react'

export default function Slider() {
    const teamMembers = [
        {
            id: 1,
            name: 'Егор',
            position: 'Senior backend developer',
            experience: 'Опыт 4 года',
            image: seniorBack,
        },
        {
            id: 2,
            name: 'Антон',
            position: 'Senior frontend developer',
            experience: 'Опыт 4 года',
            image: seniorFrontend,
        },

        {
            id: 3,
            name: 'Мария',
            position: 'Senior designer',
            experience: 'Опыт 2 года',
            image: seniorDisign,
        },
        {
            id: 4,
            name: 'Илья',
            position: 'Middle backend developer',
            experience: 'Опыт 2 года',
            image: middleBack,
        },
        {
            id: 5,
            name: 'Александр',
            position: 'Middle backend developer',
            experience: 'Опыт 2 года',
            image: middleBackend,
        },
        {
            id: 6,
            name: 'Роман',
            position: 'Digital-marketer',
            experience: 'Опыт 2 года',
            image: middleFront,
        },
        {
            id: 7,
            name: 'Светлана',
            position: 'Junior frontend developer',
            experience: 'Опыт 1 год',
            image: juniorFront,
        },
        {
            id: 8,
            name: 'Людмила',
            position: 'Middle designer',
            experience: 'Опыт 2 года',
            image: middleDisign,
        },
        {
            id: 9,
            name: 'Елена',
            position: 'Project manager',
            experience: 'Опыт 8 лет',
            image: projectManager,
        },
    ]
    const [slidesToShow, setSlidesToShow] = useState(2)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)
    const sliderRef = useRef<HTMLDivElement>(null)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 744
            setIsMobile(mobile)
            setSlidesToShow(mobile ? 1 : 2)
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + slidesToShow >= teamMembers.length
                ? 0
                : prevIndex + slidesToShow
        )
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - slidesToShow < 0
                ? teamMembers.length -
                  (teamMembers.length % slidesToShow || slidesToShow)
                : prevIndex - slidesToShow
        )
    }
    const handleTouchStart = (e: React.TouchEvent) => {
        if (!isMobile) return
        setTouchStart(e.targetTouches[0].clientX)
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isMobile) return
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const handleTouchEnd = () => {
        if (!isMobile) return

        if (touchStart - touchEnd > 50) {
            nextSlide()
        }

        if (touchStart - touchEnd < -50) {
            prevSlide()
        }
    }
    const visibleMembers = []
    for (let i = 0; i < slidesToShow; i++) {
        const index = (currentIndex + i) % teamMembers.length
        visibleMembers.push(teamMembers[index])
    }

    return (
        <div className={styles.slider} ref={sliderRef}>
            <div
                className={styles.slider__wrapper}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {visibleMembers.map((member) => (
                    <div key={member.id} className={styles.slider__slide}>
                        <div className={styles['slider__person-info']}>
                            <div className={styles['slider__image-container']}>
                                <Image
                                    className={styles.slider__image}
                                    src={member.image}
                                    alt=""
                                    width={580}
                                    height={600}
                                    priority={true}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                />
                            </div>

                            <p className={styles['slider__person-name']}>
                                <b>{member.name}</b>
                            </p>
                            <p className={styles['slider__person-desc']}>
                                {member.position}
                                <br />
                                {member.experience}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.slider__navigation}>
                {!isMobile && (
                    <>
                        <button
                            className={`${styles.slider__arrow} ${styles['slider__arrow--prev']}`}
                            onClick={prevSlide}
                            aria-label="Previous slide"
                        >
                            <StrelkaLeftSVG />
                        </button>
                        <button
                            className={`${styles.slider__arrow} ${styles['slider__arrow--next']}`}
                            onClick={nextSlide}
                            aria-label="Next slide"
                        >
                            <StrelkaRightSVG className="styles.strelka" />
                        </button>
                    </>
                )}

                {isMobile && (
                    <div className={styles.slider__dots}>
                        {teamMembers.map((_, index) => (
                            <span
                                key={index}
                                className={`${styles.slider__dot} ${
                                    currentIndex === index
                                        ? styles['slider__dot--active']
                                        : ''
                                }`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
