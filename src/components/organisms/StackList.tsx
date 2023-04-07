import Image from 'next/image'
import React from 'react'
import stackList from '../../../json/stackList.json'
import Typography from '../atoms/Typography'

const StackList = () => {
    return (
        <div>
            <div className="mt-36 lg:mt-44">
                <p className="font-display text-base text-slate-900">
                    Tech Stack We Are Using
                </p>
                <ul
                    role="list"
                    className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
                >
                    <li>
                        <ul
                            role="list"
                            className="grid grid-cols-5 md:grid-cols-10 "
                        >
                            {stackList
                                .slice(0, stackList.length)
                                .map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="flex justify-center items-center flex-col"
                                    >
                                        <Image
                                            alt="Transistor"
                                            src={item.img}
                                            width="158"
                                            height="48"
                                            loading="lazy"
                                            className="grayscale"
                                        />
                                        <Typography
                                            color="light"
                                            fontWeight="light"
                                            size="smallest"
                                            fontFamily="inter"
                                            className="hidden sm:inline -mt-3"
                                        >
                                            {item.name}
                                        </Typography>
                                    </li>
                                ))}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default StackList
