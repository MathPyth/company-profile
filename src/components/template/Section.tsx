import { postsType } from '@/types'
import dynamic from 'next/dynamic'
import React from 'react'

const About = dynamic(() => import('../organisms/sections/About'), {
    loading: () => <p>Loading...</p>,
})

const Jumbotron = dynamic(() => import('../organisms/sections/Jumbotron'), {
    loading: () => <p>Loading...</p>,
})

const Porfofolio = dynamic(() => import('../organisms/sections/Porfofolio'), {
    loading: () => <p>Loading...</p>,
})

const Posts = dynamic(() => import('../organisms/sections/Posts'), {
    loading: () => <p>Loading...</p>,
})

const Section = ({ posts }: { posts: postsType[] }) => {
    return (
        <div className="flex flex-col gap-32">
            <Jumbotron />
            <About />
            <Porfofolio />
            <Posts posts={posts} />
        </div>
    )
}

export default Section
