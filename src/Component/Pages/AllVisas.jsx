import { useLoaderData } from "react-router-dom";

const AllVisas = () => {
    const sunflowers = useLoaderData();
    return (
        <div>
            <div>
            <h1 className="text-center text-3xl">
            Sunflower : {sunflowers.length}
            </h1>
            </div>
        </div>
    );
};

export default AllVisas;