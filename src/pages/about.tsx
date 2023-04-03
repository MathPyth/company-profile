import React from "react";

import Image from "next/image";

const About = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center" >About Us</h1>
            <div className="mt-8 grid w-full grid-cols-1 justify-center px-8 md:grid-cols-2 gap-x-8">
                <div>
                    <h1 className='mb-2 text-4xl font-semibold'>
                        <div className="flex gap-1"><p>Get</p><p className="underline"> Your App</p></div>Done ASAP!{' '}
                    </h1>
                    <p>
                        Welcome to the website of a freelance web developer with a passion
                        for helping college students create professional, engaging websites for their academic assignments and thesis projects. With years of experience and a degree in computer science,
                        they offer personalized services tailored
                        to their clients' needs and schedules. Potential clients can contact them
                        to learn more about how they can help bring their vision to life.
                    </p>
                </div>
                <div className="px-4">
                    <Image
                        src="/undraw_startup_life.svg"
                        width={300}
                        height={300}
                        alt="logo"
                    />
                </div>
            </div>
        </div>
    )
}

export default About;