import React from "react";

import Image from "next/image";
import about from "../../../json/about.json"


const About = () => {
    return (
        <div className="my-6">
            <h1 className="text-4xl mb-4 font-bold text-center" >About Us</h1>
            <div className="container mx-auto grid w-4/5 grid-cols-1 justify-center px-4 md:grid-cols-2">
                <div className="col-span-1">
                    <h1 className='mb-2 text-3xl font-semibold'>
                        <div className="flex gap-1"><p>Get</p><p className="underline"> Your App</p></div>Done ASAP!{' '}
                    </h1>
                    <p>
                        {about.description}
                    </p>
                </div>

                <div className="px-4 col-span-1 flex justify-center">
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


