import dynamic from 'next/dynamic'
import React from 'react'

const About = dynamic(() => import('../organisms/About'), {
    loading: () => <p>Loading...</p>,
})

const Jumbotron = dynamic(() => import('../organisms/Jumbotron'), {
    loading: () => <p>Loading...</p>,
})

const Section = () => {
    return (
        <div className="container mx-auto">
            <Jumbotron />
            <About />
        </div>
    )
}

export default Section
