import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.scss'
import Script from 'next/script'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Разработка программного обеспечения, сайтов и приложений на заказ – студия Entergen',
    description:
        'IT-студия Entergen занимается разработкой уникальных, авторских цифровых решений для компаний в России и странах Европы. Большой и глубокий опыт. Полное погружение в проекты, способствующее росту и масштабированию бизнеса.',
    keywords: [
        'создание сайта',
        'разработка сайта',
        'сайт под ключ',
        'заказать сайт',
        'создание чат-бота',
        'разработка mini apps',
        'заказать разработку приложения',
        'интеграция с 1с',
        'подключение к платежной системе',
        'интеграция с crm',
        'интеграция с bitrix',
        'настройка интеграции',
    ],
    authors: [{ name: 'Ratnov' }],
    creator: 'ratnov',
    metadataBase: new URL('https://entergen.ru'),
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    openGraph: {
        title: 'Разработка программного обеспечения, сайтов и приложений на заказ – студия Entergen',
        description:
            'IT-студия Entergen занимается разработкой уникальных, авторских цифровых решений для компаний в России и странах Европы. Большой и глубокий опыт. Полное погружение в проекты, способствующее росту и масштабированию бизнеса.',
        url: 'https://entergen.ru',
        siteName: 'Entergen',
        images: [
            {
                url: '/apple-touch-icon.png',
                width: 1200,
                height: 630,
                alt: 'Entergen',
            },
        ],
        locale: 'ru_RU',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Разработка программного обеспечения, сайтов и приложений на заказ – студия Entergen',
        description:
            'IT-студия Entergen занимается разработкой уникальных, авторских цифровых решений для компаний в России и странах Европы. Большой и глубокий опыт. Полное погружение в проекты, способствующее росту и масштабированию бизнеса.',
        images: ['/apple-touch-icon.png'],
    },
}
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ru">
            <head>
                <Script
                    id="yandex-metrika"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
              (function(m,e,t,r,i,k,a){ m[i]=m[i]||function(){ (m[i].a=m[i].a||[]).push(arguments) };
              m[i].l=1*new Date();
              k=e.createElement(t),a=e.getElementsByTagName(t)[0];
              k.async=1;k.src=r;a.parentNode.insertBefore(k,a)
              })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(103390883, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true
              });
            `,
                    }}
                />
                <noscript>
                    <div>
                        <img
                            src="https://mc.yandex.ru/watch/XXXXXXX"
                            style={{ position: 'absolute', left: '-9999px' }}
                            alt=""
                        />
                    </div>
                </noscript>
                <meta
                    name="google-site-verification"
                    content="aHekHfVPzm8fiUYxQwkZPSoCI8LTndrLf-Wp6oWX3X0"
                />
                <meta name="yandex-verification" content="5df2fe142012f252" />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                {children}
            </body>
        </html>
    )
}
