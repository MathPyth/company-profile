import React from "react";

import Image from "next/image";
import about from "../../../json/about.json"


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
                        {about.description}
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