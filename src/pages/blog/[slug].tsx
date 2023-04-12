import MDXComponents from '@/components/molecules/MDX/MDXComponents'
import { getContents, getFileBySlug } from '@/helper/mdx.helper'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import React from 'react'
import { ReadTimeResults } from 'reading-time'

type Props = {
    serializedContent: MDXRemoteSerializeResult
    frontmatter: {
        wordCount: number
        readingTime: ReadTimeResults
        slug: string | null
    }
}

const index = ({ serializedContent, frontmatter }: Props) => {
    return (
        <div className="prose lg:prose-xl">
            <MDXRemote {...serializedContent} components={MDXComponents} />
        </div>
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
