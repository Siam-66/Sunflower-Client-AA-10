import React from "react";
import Swal from "sweetalert2"; // Make sure to import Swal if you haven't already

const MyVisaApplicationCard = ({ applications, application, setApplication }) => {
  const {
    _id, // Destructure _id here
    countryName,
    countryImage,
    visaType,
    processingTime,
    fee,
    validity,
    applicationMethod,
    appliedDate,
  } = applications;

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
        fetch(`http://localhost:5000/applications/${_id}`, {
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
              const remaining = application.filter(app => app._id !== _id);
              setApplication(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card w-full md:w-96 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img
          src={countryImage}
          alt={countryName}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center">{countryName}</h2>
        <p>
          <strong>Visa Type:</strong> {visaType}
        </p>
        <p>
          <strong>Processing Time:</strong> {processingTime}
        </p>
        <p>
          <strong>Fee:</strong> ${fee}
        </p>
        <p>
          <strong>Validity:</strong> {validity || "N/A"}
        </p>
        <p>
          <strong>Application Method:</strong> {applicationMethod || "N/A"}
        </p>
        <p>
          <strong>Applied Date:</strong> {appliedDate}
        </p>
        <button
          onClick={() => handleDelete(_id)} // Pass _id correctly
          className="btn bg-red-500 text-white font-bold text-xl rounded-xl shadow-md hover:bg-red-600 hover:shadow-lg"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default MyVisaApplicationCard;