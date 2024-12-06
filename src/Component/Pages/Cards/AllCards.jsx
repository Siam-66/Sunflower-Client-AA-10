import { Link } from "react-router-dom";

const AllCards = ({sunflower}) => {

    const {countryImage, countryName, visaType,  processingTime} = sunflower;

    return (
<div>
<div className="card bg-base-100 shadow-xl">
    <figure>
    <img
        src={countryImage}
        alt="Country Image"
        className="w-full h-48 object-cover"
    />
    </figure>
    <div className="card-body">
    <h2 className="card-title">{countryName}</h2>
    <p className="text-sm">
        <strong>Visa Type:</strong> {visaType}
    </p>
    <p className="text-sm">
        <strong>Processing Time:</strong> {processingTime}
    </p>
    <div className="card-actions justify-center mt-5">
        <Link to="/allCardsDetails" className="btn bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-lg text-black font-bold rounded-xl">See Details</Link>
    </div>
    </div>
</div>
</div>

    );
};

export default AllCards;