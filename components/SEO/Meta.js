import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
           /* Primary Meta Tags */
            <title>Malian Yang Portfolio - Software Engineer</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Malian Yang Portfolio - Software Engineer" />
            <meta name="description"
                content="Malian Yang's (malianyang) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="author" content="Malian Yang (malianyang)" />
            <meta name="keywords"
                content="malianyang, malianyang's portfolio, malianyang linux, ubuntu portfolio, Malian Yang protfolio, Malian Yang computer, Malian Yang, malian ubuntu, Malian Yang ubuntu portfolio" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            /* Search Engine */
            <meta name="image" content="images/logos/fevicon.png" />
            /* Schema.org for Google */
            <meta itemProp="name" content="Malian Yang Portfolio - Software Engineer" />
            <meta itemProp="description"
                content="Malian Yang's (malianyang) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta itemProp="image" content="images/logos/fevicon.png" />
            /* linkedin */
            <meta name="linkedin:card" content="summary" />
            <meta name="linkedin:title" content="Malian Yang Portfolio - Software Engineer" />
            <meta name="linkedin:description"
                content="Malian Yang's (malianyang) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="linkedin:site" content="malianyang" />
            <meta name="linkedin:creator" content="malianyang" />
            <meta name="linkedin:image:src" content="images/logos/me-perfect-transparent.png" />
            /* Open Graph general (Facebook, Pinterest & Google+) */
            <meta name="og:title" content="Malian Yang Portfolio - Software Engineer" />
            <meta name="og:description"
                content="Malian Yang's (malianyang) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="og:image" content="images/logos/me-perfect-transparent.png" />
            <meta name="og:url" content="https://malian-ubuntu.netlify.app/" />
            <meta name="og:site_name" content="Malian Yang Personal Portfolio" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/fevicon.png" />
            <link rel="apple-touch-icon" href="images/logos/logo.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
