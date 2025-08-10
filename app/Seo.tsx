// components/Seo.tsx
import Head from 'next/head'

interface SeoProps {
    title: string
    description: string
    keywords?: string
    url?: string
    image?: string
    type?: 'website' | 'article'
}

const Seo = ({
    title,
    description,
    keywords,
    url = 'https://entergen.ru',
    image = 'https://your-site.com/og-image.jpg',
    type = 'website',
}: SeoProps) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Your Company Name" />

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content="Your Site Name" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default Seo
