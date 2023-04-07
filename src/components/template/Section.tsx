import dynamic from 'next/dynamic'
import React from 'react'
import Project from '../organisms/sections/Project'
import Porfofolio from '../organisms/sections/Porfofolio'

const About = dynamic(() => import('../organisms/sections/About'), {
    loading: () => <p>Loading...</p>,
})

const Jumbotron = dynamic(() => import('../organisms/sections/Jumbotron'), {
    loading: () => <p>Loading...</p>,
})

const Section = () => {
    return (
        <div className="flex flex-col gap-32">
            <Jumbotron />
            <About />
            <Porfofolio />
            <Project />
        </div>
    )
}

export default Section
