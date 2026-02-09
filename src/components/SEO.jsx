import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://ffmsindia.com';
const SITE_NAME = 'Fresh Facility Management Services';
const DEFAULT_IMAGE = 'https://res.cloudinary.com/ddhhlkyut/image/upload/v1769081479/logo.pdf_w86b50.png';

const SEO = ({
    title,
    description,
    keywords,
    path = '',
    image = DEFAULT_IMAGE,
    type = 'website',
}) => {
    const fullTitle = title
        ? `${title} | ${SITE_NAME}`
        : `${SITE_NAME} - Premier Facility Solutions in Goa`;
    const url = `${SITE_URL}${path}`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={url} />

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Additional */}
            <meta name="robots" content="index, follow" />
            <meta name="author" content={SITE_NAME} />
        </Helmet>
    );
};

export default SEO;
