import React from "react";
import Card from "../molecules/Card";


const Project = () => {
    return (
        <div className="container mx-auto my-6">
            <h1 className="text-4xl font-bold text-center" >Project</h1>
            <div className="flex justify-center mt-7">
                <div className="grid grid-cols-1 place-content-center gap-9 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Project;