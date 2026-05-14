import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    // Отключаем оптимизацию изображений (нужно для статики)
    images: {
        unoptimized: true,
    },

    // Отключаем строгий режим (опционально)
    reactStrictMode: true,
}

export default nextConfig
