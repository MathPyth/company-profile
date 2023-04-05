import Head from 'next/head'
import React from 'react'
import { Inter } from 'next/font/google'
import htmlhead from '../../../json/htmlhead.json'
import Navbar from '../organisms/Navbar'

type Props = {
    children: React.ReactNode
}
const roboto = Inter({
    weight: ['400', '700'],
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
            {/* <Navbar /> */}
            <main className={roboto.className}>
                <Navbar />
                {children}
            </main>
        </>
    )
}

export default Layout
