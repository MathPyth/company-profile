import Typography from '@/components/atoms/Typography'
import Image from 'next/image'
import React from 'react'
import Card from '../../molecules/Card/Card'
import PortoList from '../../../../json/portofolio.json'
import Animate from '@/components/template/Animate'

const Porfofolio = () => {
    return (
        <div className="bg-mathpyDark p-6 py-16  md:p-24 ">
            <Animate transition="fade">
                <Typography
                    size={'large'}
                    fontFamily={'lexend'}
                    color={'white'}
                    fontWeight="semi-bold"
                    className="md:text-4xl text-3xl font-bold text-center"
                >
                    Our Portofolio
                </Typography>
                <Typography
                    size={'small'}
                    fontFamily={'lexend'}
                    color={'light'}
                    fontWeight="semi-bold"
                    className=" font-bold text-center pb-12"
                >
                    Justice may be blind but it can see in the dark
                </Typography>
            </Animate>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {PortoList.map((porto, idx) => (
                    <Animate
                        key={idx}
                        transition={idx < 3 ? 'left' : 'right'}
                        duration={0.2}
                    >
                        <Card
                            key={porto.title}
                            color={porto.whiteCard ? 'light' : 'dark'}
                            className="text-left mt-0 md:mt-12"
                        >
                            <Image
                                alt="Porto"
                                src={porto.img}
                                width={300}
                                height={300}
                                className="rounded-xl mb-6 mx-auto"
                            ></Image>
                            <Typography
                                size={'medium'}
                                fontFamily={'lexend'}
                                color={porto.whiteCard ? 'secondary' : 'white'}
                                fontWeight="bold"
                                className="text-4xl"
                            >
                                {porto.title}
                            </Typography>
                            <Typography
                                size={'smallest'}
                                fontFamily={'lexend'}
                                color={'light'}
                                fontWeight="semi-bold"
                            >
                                {porto.descrition}
                            </Typography>
                        </Card>
                    </Animate>
                ))}
            </div>
        </div>
    )
}

export default Porfofolio
