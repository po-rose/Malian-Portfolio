import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
           /* Primary Meta Tags */
            <title>Jane Yang Portfolio - Software Engineer</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Jane Yang Portfolio - Software Engineer" />
            <meta name="description"
                content="Jane Yang's (janeyang) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="author" content="Jane Yang (janeyang)" />
            <meta name="keywords"
                content="janeyang, janeyang's portfolio, janeyang linux, ubuntu portfolio, Jane Yang protfolio, Jane Yang computer, Jane Yang, jane ubuntu, Jane Yang ubuntu portfolio" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            /* Search Engine */
            <meta name="image" content="images/logos/fevicon.png" />
            /* Schema.org for Google */
            <meta itemProp="name" content="Jane Yang Portfolio - Software Engineer" />
            <meta itemProp="description"
                content="Jane Yang's (janeyang) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta itemProp="image" content="images/logos/fevicon.png" />
            /* linkedin */
            <meta name="linkedin:card" content="summary" />
            <meta name="linkedin:title" content="Jane Yang Portfolio - Software Engineer" />
            <meta name="linkedin:description"
                content="Jane Yang's (janeyang) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="linkedin:site" content="janeyang" />
            <meta name="linkedin:creator" content="janeyang" />
            <meta name="linkedin:image:src" content="images/logos/me-perfect-transparent.png" />
            /* Open Graph general (Facebook, Pinterest & Google+) */
            <meta name="og:title" content="Jane Yang Portfolio - Software Engineer" />
            <meta name="og:description"
                content="Jane Yang's (janeyang) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="og:image" content="images/logos/me-perfect-transparent.png" />
            <meta name="og:url" content="https://jane-ubuntu.netlify.app/" />
            <meta name="og:site_name" content="Jane Yang Personal Portfolio" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/fevicon.png" />
            <link rel="apple-touch-icon" href="images/logos/logo.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
