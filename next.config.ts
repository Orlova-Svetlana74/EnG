import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    // Включаем экспорт в статический HTML
    output: 'export',

    // Отключаем оптимизацию изображений (нужно для статики)
    images: {
        unoptimized: true,
    },

    // 👇 ГЛАВНОЕ ДЛЯ GITHUB PAGES: указываем путь к репозиторию
    basePath: '/EnG',
    assetPrefix: '/EnG/',

    // Добавляем слеш в конце URL (помогает с путями)
    trailingSlash: true,

    // Отключаем строгий режим (опционально)
    reactStrictMode: true,
}

export default nextConfig
