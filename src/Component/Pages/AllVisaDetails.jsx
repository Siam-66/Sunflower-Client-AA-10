import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const AllVisaDetails = () => {
const sunflower = useLoaderData();
const [showModal, setShowModal] = useState(false);

if (!sunflower) {
    return <p>Loading or no data available!</p>;
}

const {
    countryImage,
    countryName,
    visaType,
    processingTime,
    requiredDocuments,
    description,
    fee,
    validity,
    applicationMethod,} = sunflower;



    const handleApply = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const appliedDate = new Date().toISOString().split("T")[0]; // Use current date here
        const feeValue = fee; // Use the fee from the component state
    
        const newApplication = {
            email,
            firstName,
            lastName,
            appliedDate,
            fee: feeValue,
            countryImage,
            countryName,
            visaType,
            processingTime,
            validity,
            applicationMethod
        };
    
        console.log(newApplication);
    
        fetch('https://assignment-10-sunflower-server.vercel.app/applications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newApplication)
        })
        .then(res => {
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Visa Application Created",
                    showConfirmButton: false,
                    timer: 3000
                });
            }
        })
        .catch(error => {
            console.error("Error:", error);
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "Failed to create application",
                showConfirmButton: true
            });
        });
    };

return (
    <div className="container mx-auto p-5">
        <h1 className=" text-center text-4xl mb-5 font-bold bg-gradient-to-r from-yellow-900 via-yellow-400 to-yellow-900 bg-clip-text text-transparent">Visa Details</h1>
    <div className="card shadow-lg p-5">
        <img
        src={countryImage}
        alt={countryName}
        className="w-full h-60 object-cover rounded-lg"
        />
        <h2 className="text-2xl font-bold mt-4">{countryName}</h2>
        <p>
        <strong>Visa Type:</strong> {visaType}
        </p>
        <p>
        <strong>Processing Time:</strong> {processingTime}
        </p>
        <p>
<strong>Required Documents:</strong>
</p>
<ul className="list-disc list-inside mt-2">
{requiredDocuments && requiredDocuments.length > 0 ? (
    requiredDocuments.map((doc, index) => (
    <li key={index} className="flex items-center">
        <span className="text-green-500 mr-2">✔</span> 
        {doc}
    </li>
    ))
) : (
    <li>N/A</li>
)}
</ul>

        <p>
        <strong>Description:</strong> {description || "N/A"}
        </p>
        <p>
        <strong>Visa Fee:</strong> ${fee}
        </p>
        <p>
        <strong>Validity:</strong> {validity || "N/A"}
        </p>
        <p>
        <strong>Application Method:</strong> {applicationMethod || "N/A"}
        </p>
        <button
        className="btn  bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-black font-semibold text-xl  px-5 py-2 mt-5 rounded-lg"
        onClick={() => setShowModal(true)}
        >
        Apply for the Visa
        </button>
    </div>

      {/* Modal */}
    {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Apply for {countryName}</h3>
            <form onSubmit={handleApply}>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-1" htmlFor="email">
                Email
                </label>
                <input
                
                type="email"
                name="email"
                id="email"
                  defaultValue="user@example.com" // Replace with logged-in user's email
                className="w-full border px-3 py-2 rounded"
                required
                />
            </div>
            <div className="mb-4">
                <label
                className="block text-sm font-bold mb-1"
                htmlFor="firstName"
                >
                First Name
                </label>
                <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                className="w-full border px-3 py-2 rounded"
                required
                />
            </div>
            <div className="mb-4">
                <label
                className="block text-sm font-bold mb-1"
                htmlFor="lastName"
                >
                Last Name
                </label>
                <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                className="w-full border px-3 py-2 rounded"
                required
                />
            </div>
            <div className="mb-4">
                <label
                className="block text-sm font-bold mb-1"
                htmlFor="appliedDate"
                >
                Applied Date
                </label>
                <input
                type="text"
                name="appliedDate"
                id="appliedDate"
                value={new Date().toISOString().split("T")[0]}
                readOnly
                className="w-full border px-3 py-2 rounded bg-gray-100"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-1" htmlFor="fee">
                Visa Fee
                </label>
                <input
                type="text"
                name="fee"
                id="fee"
                value={`$${fee}`}
                readOnly
                className="w-full border px-3 py-2 rounded bg-gray-100"
                />
            </div>
            <div className="flex justify-end">
                <button
                type="button"
                className="btn bg-gray-300 text-black text-xl px-4 py-2 mr-2 rounded"
                onClick={() => setShowModal(false)}
                >
                Cancel
                </button>
                <button
                type="submit"
                className="btn  bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-black font-semibold text-xl  px-4 py-2 rounded"
                >
                Apply
                </button>
            </div>
            </form>
        </div>
        </div>
    )}
    </div>
);
};

export default AllVisaDetails;
