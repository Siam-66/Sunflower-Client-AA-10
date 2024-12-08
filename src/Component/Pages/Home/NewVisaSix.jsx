import { useEffect, useState } from "react";
import AllCardsHome from "../Cards/AllCardsHome";
import { Link } from "react-router-dom";

const NewVisaSix = () => {
    const [latestSunflower, setLatestSunflower] = useState([]);

    useEffect(() => {
        // Fetch the six most recent visa entries from the backend
        fetch("https://assignment-10-sunflower-server.vercel.app/latestSunflowers")
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
            <div className="card-actions justify-center mt-5">
            <Link
            to="/allVisas"
            className=" px-10 py-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-3xl text-black font-semibold rounded-xl"
            >
            See all visas
            </Link>
        </div>
        </div>
    );
};

export default NewVisaSix;
