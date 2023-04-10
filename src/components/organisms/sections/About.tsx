import React from 'react'

import Image from 'next/image'
import about from '../../../../json/about.json'
import Typography from '../../atoms/Typography'
import Animate from '@/components/template/Animate'

const About = () => {
    return (
        <Animate transition="right">
            <div>
                <Typography
                    size={'large'}
                    fontFamily={'lexend'}
                    color={'light'}
                    fontWeight="semi-bold"
                    className="text-4xl font-bold text-center"
                >
                    About Us
                </Typography>
                <div className="">
                    <div className="mt-8 sm:px-48 px-12 flex">
                        <Typography
                            size={'small'}
                            fontFamily={'inter'}
                            color={'light'}
                            fontWeight="light"
                            className="text-center"
                        >
                            {about.description}
                        </Typography>
                    </div>
                    <div className="px-4  ">
                        <Image
                            className="mx-auto my-12 border border-slate-300 pt-12 pb-28 sm:px-40 px-8 rounded-lg  box-content shadow-xl"
                            src="/undraw_startup_life.svg"
                            width={300}
                            height={300}
                            alt="logo"
                        />
                        <Typography
                            size={'medium'}
                            fontFamily={'inter'}
                            color={'light'}
                            fontWeight="normal"
                            className="text-center -mt-8"
                        >
                            &quot;Get You App Done ASAP&quot;
                        </Typography>
                    </div>
                </div>
            </div>
        </Animate>
    )
}

export default About
