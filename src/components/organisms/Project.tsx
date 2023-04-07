import React from "react";
import Card from "../molecules/Card";
import project from "../../../json/project.json"
import Typography from "../atoms/Typography";


const Project = () => {
    return (
        <div className="container mx-auto my-8">
            <Typography
                size={'large'}
                fontFamily={'lexend'}
                color={'light'}
                fontWeight="semi-bold"
                className="text-4xl font-bold text-center"
            >
                Project
            </Typography>
            <div className="flex justify-center mt-7">
                <div className="grid grid-cols-1 place-content-center gap-9 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {project.map((item) => (
                        <Card
                            key={item.title}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project;