import Typography from '@/components/atoms/Typography'
import MDXComponents from '@/components/molecules/MDX/MDXComponents'
import TableOfContents from '@/components/molecules/TableOfContents'
import RecomendationPostsList from '@/components/organisms/RecomendationPostsList'
import Layout from '@/components/template/Layout'
import {
    getContents,
    getFileBySlug,
    getRecommendations,
} from '@/helper/mdx.helper'
import { useHandleTableOfContents } from '@/hooks/useHandleTableOfContents'
import useScrollSpy from '@/hooks/useScrollSpy'
import { postsType } from '@/types'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import React from 'react'
import { AiOutlineBook, AiOutlineClockCircle } from 'react-icons/ai'
import { ReadTimeResults } from 'reading-time'

export type frontMatterContentType = {
    wordCount: number
    readingTime: ReadTimeResults
    slug: string | null
    rest: any
}
type Props = {
    serializedContent: MDXRemoteSerializeResult
    frontmatter: frontMatterContentType
    recomendationPosts: postsType[]
}

const index = ({
    serializedContent,
    frontmatter,
    recomendationPosts,
}: Props) => {
    //#region  //*=========== Scrollspy ===========
    const activeSection = useScrollSpy()

    const { toc, minLevel } = useHandleTableOfContents(frontmatter)
    //#endregion  //*======== Scrollspy ===========
    return (
        <Layout title={frontmatter.rest.title}>
            <div className="w-full p-4 md:p-20 relative container mx-auto my-4">
                <main className="max-w-full w-full prose p-0 m-0 0">
                    <div className="w-full">
                        <h1 className="p-0 m-0">{frontmatter.rest.title}</h1>
                        <div>
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
                    <div className=" flex gap-6  w-full border-t border-slate-30">
                        <article className="mdx grow mt-4">
                            <MDXRemote
                                {...serializedContent}
                                components={MDXComponents}
                            />
                        </article>
                        <aside className="flex-none w-42 hidden md:block">
                            <div className="sticky top-4">
                                <TableOfContents
                                    minLevel={minLevel}
                                    toc={toc}
                                    activeSection={activeSection}
                                />
                            </div>
                        </aside>
                    </div>
                    <div className="w-full ">
                        <RecomendationPostsList posts={recomendationPosts} />
                    </div>
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

    const recomendationPosts = await getRecommendations(params?.slug as string)

    return {
        props: { serializedContent, frontmatter, recomendationPosts },
    }
}
