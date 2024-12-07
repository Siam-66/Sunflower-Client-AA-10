import { useState } from "react";
import Swal from "sweetalert2";

const MyVisaCard = ({ sunflower,sunflowers ,setSunflowers }) => {
    const { _id, countryImage, countryName, visaType, processingTime, fee, validity, applicationMethod } = sunflower;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/sunflower/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "This visa has been deleted.",
                                icon: "success",
                            });
                            const remaining = sunflowers.filter(sun=>sun._id!==_id);
                            setSunflowers(remaining);
                        }
                    });
            }
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;

        const countryName = form.countryName.value;
        const visaType = form.visaType.value;
        const processingTime = form.processingTime.value;
        const fee = form.fee.value;
        const validity = form.validity.value;
        const applicationMethod = form.applicationMethod.value;

        const updatedSunflower = { countryName, visaType, processingTime, fee, validity, applicationMethod };

        fetch(`http://localhost:5000/sunflower/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedSunflower),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    setIsModalOpen(false);
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Visa Updated Successfully!",
                        showConfirmButton: false,
                        timer: 2000,
                    });
                }
            })
            .catch((error) => {
                console.error("Error updating visa:", error);
                Swal.fire({
                    position: "top-center",
                    icon: "error",
                    title: "Failed to Update Visa!",
                    text: "Please try again later.",
                    showConfirmButton: true,
                });
            });
    };

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
                <h2 className="card-title text-lg font-bold text-gray-800">{countryName}</h2>
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

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-xl p-6 w-[90%] max-w-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-4">Update Visa Information</h3>
                        <form onSubmit={handleUpdate}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600">
                                    Country Name
                                </label>
                                <input
                                    name="countryName"
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
                                <select
                                    name="visaType"
                                    className="w-full p-2 border rounded"
                                    defaultValue={visaType}
                                    required
                                >
                                    <option value="">Select a visa type</option>
                                    <option value="Tourist visa">Tourist Visa</option>
                                    <option value="Student visa">Student Visa</option>
                                    <option value="Official visa">Official Visa</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600">
                                    Processing Time
                                </label>
                                <input
                                    name="processingTime"
                                    type="text"
                                    defaultValue={processingTime}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600">
                                    Visa Fee
                                </label>
                                <input
                                    name="fee"
                                    type="number"
                                    defaultValue={fee}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600">
                                    Validity
                                </label>
                                <input
                                    name="validity"
                                    type="text"
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
                                    name="applicationMethod"
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
                                    className="btn bg-gray-300 text-lg text-black hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-black font-bold text-lg hover:shadow-lg"
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
