import { useLoaderData } from "react-router-dom";
import AllCards from "./Cards/AllCards";

const AllVisas = () => {
    const sunflowers = useLoaderData();
    return (
        <div>
            
            <h1 className="text-center text-4xl mb-6 font-bold bg-gradient-to-r from-yellow-900 via-yellow-400 to-yellow-900 bg-clip-text text-transparent">
All Visas
</h1>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            {
                sunflowers.map(sunflower =><AllCards key={sunflower._id} sunflower={sunflower}></AllCards>)
            }
            </div>

        </div>
    );
};

export default AllVisas;