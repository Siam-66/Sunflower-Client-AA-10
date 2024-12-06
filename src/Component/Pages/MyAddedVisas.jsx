import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import MyVisaCard from "./Cards/MyVisaCard";

const MyAddedVisas = () => {
    const loadedSunflowers = useLoaderData();
    const [sunflowers, setSunflowers] = useState(loadedSunflowers);

    return (
        <div>
            <h1 className="text-center text-4xl mb-6 font-bold bg-gradient-to-r from-yellow-900 via-yellow-400 to-yellow-900 bg-clip-text text-transparent">
                All Visas
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                {sunflowers.map(sunflower => (
                    <MyVisaCard
                        key={sunflower._id}
                        sunflower={sunflower}
                        sunflowers={sunflowers}
                        setSunflowers={setSunflowers}
                    />
                ))}
            </div>
        </div>
    );
};

export default MyAddedVisas;
