import { useState } from "react";
import Swal from "sweetalert2";

const MyVisaCard = ({ sunflower, handleUpdate }) => {
    const {_id,countryImage, countryName, visaType,  processingTime, fee, validity, applicationMethod} = sunflower;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

            
            fetch(`http://localhost:5000/sunflower/${_id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount > 0){
                
                    Swal.fire({
                        title: "Deleted!",
                        text: "This visa has been deleted.",
                        icon: "success"
                    });
                
                }
            })

            }
          });
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);



    return (
        <div className="card bg-base-100 shadow-xl border border-gray-200">
            
            <figure>
                <img
                    src={countryImage}
                    alt={countryName}
                    className="w-full h-48 object-cover rounded-t-xl"
                />
            </figure>

            {/* Card Body */}
            <div className="card-body">
                <h2 className="card-title text-lg font-bold text-gray-800">
                    {countryName}
                </h2>
                <p className="text-sm">
                    <strong>Visa Type:</strong> {visaType}
                </p>
                <p className="text-sm">
                    <strong>Processing Time:</strong> {processingTime}
                </p>
                <p className="text-sm">
                    <strong>Fee:</strong> ${fee}
                </p>
                <p className="text-sm">
                    <strong>Validity:</strong> {validity}
                </p>
                <p className="text-sm">
                    <strong>Application Method:</strong> {applicationMethod}
                </p>
                

                {/* Card Actions */}
                <div className="card-actions flex justify-around mt-5">
                    {/* Update Button */}
                    <button
                        onClick={toggleModal}
                        className="btn bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-black font-bold rounded-xl shadow-md hover:shadow-lg"
                    >
                        Update
                    </button>

                    {/* Delete Button */}
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn bg-red-500 text-white font-bold rounded-xl shadow-md hover:bg-red-600 hover:shadow-lg"
                    >
                        Delete
                    </button>
                </div>
            </div>

            {/* Update Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-xl p-6 w-[90%] max-w-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-4">Update Visa Information</h3>
                        <form onSubmit={(e) => handleUpdate(e, sunflower)}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600">
                                    Country Name
                                </label>
                                <input
                                    type="text"
                                    defaultValue={countryName}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600">
                                    Visa Type
                                </label>
                                <input
                                    type="text"
                                    defaultValue={visaType}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600">
                                    Processing Time
                                </label>
                                <input
                                    type="text"
                                    defaultValue={processingTime}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600">
                                    Fee
                                </label>
                                <input
                                    type="number"
                                    defaultValue={fee}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600">
                                    Validity (Months)
                                </label>
                                <input
                                    type="number"
                                    defaultValue={validity}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600">
                                    Application Method
                                </label>
                                <input
                                    type="text"
                                    defaultValue={applicationMethod}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div className="flex justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={toggleModal}
                                    className="btn bg-gray-300 text-black hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-black font-bold hover:shadow-lg"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyVisaCard;
