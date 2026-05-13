import type { NextConfig } from 'next'
module.exports = {
    output: 'export', // Эта строчка включает экспорт в статику
    images: {
        unoptimized: true, // Отключает оптимизацию изображений (иначе ошибка)
    },
}
const nextConfig: NextConfig = {
    /* config options here */
}

export default nextConfig
