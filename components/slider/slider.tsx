import Image from 'next/image';
import styles from './slider.module.scss';
import {
  senior_back,
  senior_frontend,
  senior_disagn,
  middle_back,
  middle_backend,
  middle_front,
  junior_front,
  middle_disign,
  project_manager,
} from '@/img';
import { useState } from 'react';

export default function Slider() {
  const teamMembers = [
    {
      id: 1,
      name: 'Егор',
      position: 'Senior backend developer',
      experience: 'Опыт 4 года',
      image: senior_back,
    },
    {
      id: 2,
      name: 'Антон',
      position: 'Senior frontend developer',
      experience: 'Опыт 4 года',
      image: senior_frontend,
    },

    {
      id: 3,
      name: 'Мария',
      position: 'Senior Designer',
      experience: 'Опыт 2 года',
      image: senior_disagn,
    },
    {
      id: 4,
      name: 'Илья',
      position: 'Middle backend developer',
      experience: 'Опыт 2 года',
      image: middle_back,
    },
    {
      id: 5,
      name: 'Александр',
      position: 'Middle backend developer',
      experience: 'Опыт 2 года',
      image: middle_backend,
    },
    {
      id: 6,
      name: 'Виктор',
      position: 'Middle frontend developer',
      experience: 'Опыт 3 года',
      image: middle_front,
    },
    {
      id: 7,
      name: 'Светлана',
      position: 'Junior frontend developer',
      experience: 'Опыт 2 года',
      image: junior_front,
    },
    {
      id: 8,
      name: 'Людмила',
      position: 'Middle disigner',
      experience: 'Опыт 2 года',
      image: middle_disign,
    },
    {
      id: 9,
      name: 'Елена',
      position: 'Project manager',
      experience: 'Опыт 8 лет',
      image: project_manager,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 >= teamMembers.length ? 0 : prevIndex + 2
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 2 < 0
        ? teamMembers.length - (teamMembers.length % 2 || 2)
        : prevIndex - 2
    );
  };

  const visibleMembers = [];
  for (let i = 0; i < 2; i++) {
    const index = (currentIndex + i) % teamMembers.length;
    visibleMembers.push(teamMembers[index]);
  }

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slidesWrapper}>
        {visibleMembers.map((member) => (
          <div key={member.id} className={styles.slide}>
            <div className={styles.personinfo}>
              <Image
                className={styles.teamicon}
                src={member.image}
                alt="иконка"
                width={465}
                height={471}
                priority={true}
              />
              <p className={styles.person}>
                <b>{member.name}</b>
                <br />
                {member.position}
                <br />
                {member.experience}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Навигация внизу */}
      <div className={styles.navigation}>
        <button className={styles.arrowButton} onClick={prevSlide}>
          &lt;
        </button>

        <div className={styles.dotsContainer}>
          {Array.from({ length: Math.ceil(teamMembers.length / 2) }).map(
            (_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${
                  currentIndex === index * 2 ? styles.activeDot : ''
                }`}
                onClick={() => setCurrentIndex(index * 2)}
              />
            )
          )}
        </div>

        <button className={styles.arrowButton} onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
}
