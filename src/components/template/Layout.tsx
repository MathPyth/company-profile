import Head from 'next/head'
import React from 'react'
import { Inter } from 'next/font/google'
import htmlhead from '../../../json/htmlhead.json'
import Navbar from '../organisms/Navbar'
import Footer from '../organisms/Footer'

type Props = {
    children: React.ReactNode
}
const roboto = Inter({
    weight: ['300', '400', '500', '600', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})
const Layout = (props: Props) => {
    const { children } = props
    return (
        <>
            <Head>
                <title>{htmlhead.title}</title>
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
