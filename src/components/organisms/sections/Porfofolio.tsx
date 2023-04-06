import Typography from '@/components/atoms/Typography'
import Image from 'next/image'
import React from 'react'
import Card from '../Card'

const PortoList = [
    {
        title: 'Chat Gpt',
        descrition:
            'ChatGPT is a sibling model to InstructGPT, which is trained to follow an instruction in a prompt and provide a detailed response.',
        img: '/ss.png',
    },
    {
        title: 'FaceBook',
        descrition:
            'ChatGPT is a sibling model to InstructGPT, which is trained to follow an instruction in a prompt and provide a detailed response.',
        img: '/ss.png',
        whiteCard: true,
    },
    {
        title: 'Twitter',
        descrition:
            'ChatGPT is a sibling model to InstructGPT, which is trained to follow an instruction in a prompt and provide a detailed response.',
        img: '/ss.png',
    },
    {
        title: 'Chat Gpt',
        descrition:
            'ChatGPT is a sibling model to InstructGPT, which is trained to follow an instruction in a prompt and provide a detailed response.',
        img: '/ss.png',
        whiteCard: true,
    },
    {
        title: 'FaceBook',
        descrition:
            'ChatGPT is a sibling model to InstructGPT, which is trained to follow an instruction in a prompt and provide a detailed response.',
        img: '/ss.png',
    },
    {
        title: 'Twitter',
        descrition:
            'ChatGPT is a sibling model to InstructGPT, which is trained to follow an instruction in a prompt and provide a detailed response.',
        img: '/ss.png',
        whiteCard: true,
    },
]

const Porfofolio = () => {
    return (
        <div className="bg-mathpyDark p-24 ">
            <Typography
                size={'large'}
                fontFamily={'lexend'}
                color={'white'}
                fontWeight="semi-bold"
                className="text-4xl font-bold text-center"
            >
                Our Portofolio
            </Typography>
            <Typography
                size={'small'}
                fontFamily={'lexend'}
                color={'light'}
                fontWeight="semi-bold"
                className="text-4xl font-bold text-center pb-12"
            >
                Justice may be blind but it can see in the dark
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {PortoList.map((porto) => (
                    <Card
                        key={porto.title}
                        color={porto.whiteCard ? 'light' : 'dark'}
                        className="text-left mt-12"
                    >
                        <Image
                            alt="Porto"
                            src={porto.img}
                            width={300}
                            height={300}
                            className="rounded-xl mb-6"
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
                ))}
            </div>
        </div>
    )
}

export default Porfofolio
