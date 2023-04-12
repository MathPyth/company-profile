import Head from 'next/head'
import React from 'react'
import { Inter } from 'next/font/google'
import htmlhead from '../../../json/htmlhead.json'
import Navbar from '../organisms/Navbar'
import dynamic from 'next/dynamic'

type Props = {
    children: React.ReactNode
    title?: string
}
const roboto = Inter({
    weight: ['300', '400', '500', '600', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})

const Footer = dynamic(() => import('../organisms/Footer'), {
    loading: () => <p>Loading...</p>,
})

const Layout = (props: Props) => {
    const { children, title } = props
    return (
        <>
            <Head>
                <title>{!title ? htmlhead.title : title}</title>
                <meta name={htmlhead.title} content={htmlhead.content} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={roboto.className}>
                <Navbar />
                {children}
                <Footer />
            </main>
        </>
    )
}

export default Layout
