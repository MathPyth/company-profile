import { trunkString } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import Typography from '../../atoms/Typography'

interface CardItemProps {
    title: string
    description: string
    image: string
    tags: string[]
    date: string
    slug: string
}

const CardPosts = (props: CardItemProps) => {
    const { title, description, image, date, tags, slug } = props

    return (
        <Link className="no-underline" href={`/blog/${slug}`}>
            <div className="max-w-xs h-96  rounded overflow-hidden  border border-slate-300 pb-4 hover:scale-105 hover:cursor-pointer hover:shadow-xl">
                <div className="h-40 overflow-hidden relative">
                    <Image
                        src={image}
                        layout="fill"
                        objectFit="cover"
                        alt="Sunset in the mountains"
                        loader={({ src }) => `${src}`}
                    />
                </div>
                <div className="px-4 py-4">
                    <Typography
                        size={'medium'}
                        fontFamily={'inter'}
                        color={'light'}
                        fontWeight="bold"
                        className="mb-2"
                    >
                        {trunkString(title, 52)}
                    </Typography>

                    <Typography
                        size={'smallest'}
                        fontFamily={'inter'}
                        color={'light'}
                        fontWeight="bold"
                        className="flex items-center gap-1 text-xs"
                    >
                        <AiOutlineCalendar className="inline text-sm" /> {date}
                    </Typography>
                    <Typography
                        size={'smallest'}
                        fontFamily={'inter'}
                        color={'light'}
                        fontWeight="light"
                        className="mt-2"
                    >
                        {trunkString(description, 82)}
                    </Typography>
                    <div className="mt-4 gap-2 flex">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="p-1 px-2 text-xs text-mathpygray bg-mathpyDark rounded-xl"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CardPosts
