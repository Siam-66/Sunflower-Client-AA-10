import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import AllCards from "./Cards/AllCards";

const AllVisas = () => {
  const sunflowers = useLoaderData() || []; 
  const [filteredVisas, setFilteredVisas] = useState(sunflowers); 
  const [selectedVisaType, setSelectedVisaType] = useState("All"); 


const visaTypes = ["All", ...new Set(sunflowers.map((visa) => visa.visaType))];

  // Filter 
const handleFilterChange = (visaType) => {
    setSelectedVisaType(visaType); 
    if (visaType === "All") {
      setFilteredVisas(sunflowers); 
    } else {
    const filtered = sunflowers.filter((visa) => visa.visaType === visaType);
      setFilteredVisas(filtered); 
    }
};

return (
    <div >
        
        <h1 className="text-center text-4xl  mt-12 font-bold bg-gradient-to-r from-yellow-900 via-yellow-400 to-yellow-900 bg-clip-text text-transparent">
        All Visas
        </h1>

      {/* Dropdown Filter */}
    <div className="flex justify-end mb-6">
        <select
        value={selectedVisaType}
        onChange={(e) => handleFilterChange(e.target.value)}
        className="select select-bordered w-full max-w-20 mr-5 bg-base-200 text-black font-bold"
        >
        {visaTypes.map((type, index) => (
            <option  key={index} value={type}>
            {type}
            </option>
        ))}
        </select>
    </div>
        


      {/* Visa Cards */}
    {filteredVisas.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {filteredVisas.map((sunflower) => (
            <AllCards key={sunflower._id} sunflower={sunflower} />
        ))}
        </div>
    ) : (
        <p className="text-center text-gray-500 text-lg mt-8">
        No visas found for the selected type.
        </p>
    )}
    </div>
);
};

export default AllVisas;
