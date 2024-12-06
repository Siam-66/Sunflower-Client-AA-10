import { useEffect, useState } from "react";
import AllCardsHome from "../Cards/AllCardsHome";

const NewVisaSix = () => {
    const [latestSunflower, setLatestSunflower] = useState([]);

    useEffect(() => {
        // Fetch the six most recent visa entries from the backend
        fetch("http://localhost:5000/latestSunflowers")
            .then((res) => res.json())
            .then((data) => {
                setLatestSunflower(data);
            })
            .catch((error) => console.error("Error fetching latest visas:", error));
    }, []);

    return (
        <div>
            <h1 className="text-center text-4xl mb-6 mt-20 font-bold bg-gradient-to-r from-yellow-900 via-yellow-400 to-yellow-900 bg-clip-text text-transparent">
                New Visas
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {latestSunflower.map((sunflower) => (
                    <AllCardsHome key={sunflower._id} sunflower={sunflower}></AllCardsHome>
                ))}
            </div>
        </div>
    );
};

export default NewVisaSix;
