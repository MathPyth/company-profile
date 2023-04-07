import React from "react";
import Typography from "../atoms/Typography";

interface CardItemProps {
    title: string,
    description: string
    image: string
}

const Card = (props: CardItemProps) => {
    const {
        title, description, image
    } = props;

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={image} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <Typography
                    size={'small'}
                    fontFamily={'inter'}
                    color={'light'}
                    fontWeight="light"
                >
                    {description}
                </Typography>
            </div>
        </div>
    )
}

export default Card;