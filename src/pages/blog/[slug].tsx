import Typography from '@/components/atoms/Typography'
import MDXComponents from '@/components/molecules/MDX/MDXComponents'
import Layout from '@/components/template/Layout'
import { getContents, getFileBySlug } from '@/helper/mdx.helper'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import React from 'react'
import { AiOutlineBook, AiOutlineClockCircle } from 'react-icons/ai'
import { ReadTimeResults } from 'reading-time'

type Props = {
    serializedContent: MDXRemoteSerializeResult
    frontmatter: {
        wordCount: number
        readingTime: ReadTimeResults
        slug: string | null
        rest: any
    }
}

const index = ({ serializedContent, frontmatter }: Props) => {
    return (
        <Layout title={frontmatter.rest.title}>
            <div className="w-full p-4 md:p-20 relative container mx-auto my-4">
                <main className="prose lg:prose-xl p-0 m-0">
                    <div className="w-full">
                        <h2 className="p-0 m-0">{frontmatter.rest.title}</h2>
                        <div className="">
                            <Typography
                                size={'smallest'}
                                fontFamily={'lexend'}
                                color={'light'}
                                fontWeight="light"
                            >
                                Uploaded On {frontmatter.rest.date}
                            </Typography>
                            <div className="flex gap-4 -mt-6">
                                <Typography
                                    size={'smallest'}
                                    fontFamily={'lexend'}
                                    color={'light'}
                                    fontWeight="bold"
                                    className="flex text-xs items-center gap-2"
                                >
                                    <AiOutlineClockCircle />
                                    {frontmatter.readingTime.text}
                                </Typography>
                                <Typography
                                    size={'smallest'}
                                    fontFamily={'lexend'}
                                    color={'light'}
                                    fontWeight="bold"
                                    className="flex text-xs items-center gap-2"
                                >
                                    <AiOutlineBook />
                                    {frontmatter.readingTime.words} words
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <article>
                        <MDXRemote
                            {...serializedContent}
                            components={MDXComponents}
                        />
                    </article>
                </main>
            </div>
        </Layout>
    )
}

export default index

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getContents()

    return {
        paths: posts.map((p) => ({
            params: {
                slug: p.slug,
            },
        })),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { serializedContent, frontmatter } = await getFileBySlug(
        params?.slug as string
    )

    return {
        props: { serializedContent, frontmatter },
    }
}
