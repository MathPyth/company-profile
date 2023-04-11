import Layout from '@/components/template/Layout'
import Section from '@/components/template/Section'
import { getContents } from '@/helper/mdx.helper'
import { postsType } from '@/types'

export default function Home({ posts }: { posts: postsType[] }) {
    return (
        <Layout>
            <Section posts={posts} />
        </Layout>
    )
}

export const getStaticProps = async () => {
    return {
        props: {
            posts: getContents(),
            fallback: false,
        },
    }
}
