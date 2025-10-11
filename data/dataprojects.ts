import { Project } from '@/types/projects'

export const projects: Project[] = [
    {
        id: 1,
        title: 'Ризолют',
        description: 'Создание сайта и системы расчета',
        category: 'site-dev',
        image: '/img/project-kitchen.png',
        // section: 'Создание сайта и системы расчета',
    },
    {
        id: 2,
        title: 'Телеграм-бот',
        description: 'Управление подписчиками и рассылками',
        category: 'bot-dev',
        image: '/img/telegrambot.png',
    },
    {
        id: 3,
        title: 'Runkaline',
        description: 'Создай приложение для продвижения',
        category: 'app-dev',
        image: '/img/project-runkaline.png',
    },
    {
        id: 4,
        title: 'Прием',
        description: 'Разработка системы доставки',
        category: 'services',
        image: '/img/project-food.png',
    },
    {
        id: 5,
        title: 'Mandarina',
        description: 'Разработка системы бронирования',
        category: 'services',
        image: '/img/project-mandarina.png',
        // section: 'Найдите путешествие своей мечты с Mandarine',
    },
    {
        id: 6,
        title: 'Мария-Медицина',
        description: 'AI-ассистент для помощи врачам и пациентам',
        category: 'tech-projects',
        image: '/img/mariymediz.png',
    },
]
