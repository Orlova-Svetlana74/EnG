import Image from 'next/image'
import styles from './slider.module.scss'
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
} from '@/img'
import { useState } from 'react'

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
            name: 'Виктор',
            position: 'Middle frontend developer',
            experience: 'Опыт 3 года',
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

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 2 >= teamMembers.length ? 0 : prevIndex + 2
        )
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 2 < 0
                ? teamMembers.length - (teamMembers.length % 2 || 2)
                : prevIndex - 2
        )
    }

    const visibleMembers = []
    for (let i = 0; i < 2; i++) {
        const index = (currentIndex + i) % teamMembers.length
        visibleMembers.push(teamMembers[index])
    }

    return (
        <div className={styles.slider}>
            <div className={styles.slider__wrapper}>
                {visibleMembers.map((member) => (
                    <div key={member.id} className={styles.slider__slide}>
                        <div className={styles['slider__person-info']}>
                            <Image
                                className={styles.slider__image}
                                src={member.image}
                                alt=""
                                width={580}
                                height={600}
                                priority={true}
                            />
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
                <button
                    className={`${styles.slider__arrow} ${styles['slider__arrow--prev']}`}
                    onClick={prevSlide}
                >
                    &lt;
                </button>

                <div className={styles.slider__dots}>
                    {Array.from({
                        length: Math.ceil(teamMembers.length / 2),
                    }).map((_, index) => (
                        <span
                            key={index}
                            className={`${styles.slider__dot} ${
                                currentIndex === index * 2
                                    ? styles['slider__dot--active']
                                    : ''
                            }`}
                            onClick={() => setCurrentIndex(index * 2)}
                        />
                    ))}
                </div>

                <button
                    className={`${styles.slider__arrow} ${styles['slider__arrow--next']}`}
                    onClick={nextSlide}
                >
                    &gt;
                </button>
            </div>
        </div>
    )
}
