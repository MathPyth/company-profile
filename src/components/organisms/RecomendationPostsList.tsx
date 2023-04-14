import { postsType } from '@/types'
import React from 'react'
import Typography from '../atoms/Typography'
import CardPosts from '../molecules/Card/CardPosts'

type Props = {
    posts: postsType[]
}

const RecomendationPostsList = (props: Props) => {
    const { posts } = props
    return (
        <div>
            <Typography
                size={'large'}
                fontFamily={'lexend'}
                color={'light'}
                fontWeight="semi-bold"
                className="text-4xl font-bold text-center"
            >
                Recomendation Posts
            </Typography>
            <div className="grid grid-cols-3">
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
    )
}

export default RecomendationPostsList
