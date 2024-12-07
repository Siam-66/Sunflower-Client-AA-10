import { Link } from "react-router-dom";

const AllCardsHome = ({ sunflower }) => {
const {
    _id,
    countryImage,
    countryName,
    visaType,
    processingTime,
    fee,
    validity,
    applicationMethod,
} = sunflower;

return (
    <div>
    <div className="card bg-base-100 shadow-xl">
        <figure>
        <img
            src={countryImage}
            alt={`${countryName} Image`}
            className="w-full h-48 object-cover"
        />
        </figure>
        <div className="card-body">
        <div className="flex items-center justify-start gap-5">
        <h2 className="card-title text-2xl font-semibold">{countryName}</h2>
        <div className="badge badge-secondary border-yellow-500 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-sm  text-black  mt-2">NEW</div>
        </div>
        
        
        <p className="text-sm">
            <strong>Visa Type:</strong> {visaType}
        </p>
        <p className="text-sm">
            <strong>Processing Time:</strong> {processingTime}
        </p>
        <p className="text-sm">
            <strong>Fee:</strong> {fee}
        </p>
        <p className="text-sm">
            <strong>Validity:</strong> {validity}
        </p>
        <p className="text-sm">
            <strong>Application Method:</strong> {applicationMethod}
        </p>
        <div className="card-actions justify-center mt-5">
            <Link
            to={`/allVisasHome/allVisaDetailsHome/${_id}`}
            className="btn bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-lg text-black font-bold rounded-xl"
            >
            See Details
            </Link>
        </div>
        </div>
    </div>
    </div>
);
};

export default AllCardsHome;
