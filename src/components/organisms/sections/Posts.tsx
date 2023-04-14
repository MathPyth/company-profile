import Typography from '@/components/atoms/Typography'
import CardPosts from '@/components/molecules/Card/CardPosts'
import Animate from '@/components/template/Animate'
import { postsType } from '@/types'
import React from 'react'

const Posts = ({ posts }: { posts: postsType[] }) => {
    return (
        <div className="container mx-auto my-8">
            <Animate transition="fade">
                <Typography
                    size={'large'}
                    fontFamily={'lexend'}
                    color={'light'}
                    fontWeight="semi-bold"
                    className="text-4xl font-bold text-center"
                >
                    Featured Posts
                </Typography>
            </Animate>
            <Animate transition="left" duration={0.2}>
                <div className="flex justify-center mt-14">
                    <div className="grid grid-cols-1 place-content-center gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((item) => (
                            <CardPosts
                                key={item.slug}
                                slug={item.slug}
                                title={item.frontMatter.title}
                                description={item.frontMatter.description}
                                image={item.frontMatter.thumbnailUrl}
                                tags={item.frontMatter.tags}
                                date={item.frontMatter.date}
                            />
                        ))}
                    </div>
                </div>
            </Animate>
        </div>
    )
}

export default Posts
