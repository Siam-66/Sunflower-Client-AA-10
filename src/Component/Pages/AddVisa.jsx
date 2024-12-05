import React from "react";

const AddVisa = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
        const form = e.target;
        const countryImage = form.countryImage.value;
        const countryName = form.countryName.value;
        const visaType = form.visaType.value;
        const processingTime = form.processingTime.value;
        const requiredDocuments = Array.from(
            form.requiredDocuments
        )
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);

        const description = form.description.value;
        const fee = form.fee.value;
        const validity = form.validity.value;
        const applicationMethod = form.applicationMethod.value;

        const newSunflower = {countryImage, countryName, visaType,  processingTime, requiredDocuments, description, fee, validity, applicationMethod }
        console.log(newSunflower);


    alert("Visa added successfully!"); // Replace with a toast if needed later
  };

  return (
<div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
  <h2 className="text-5xl text-yellow-500 font-bold text-center mb-6">Add Visa</h2>
  <form onSubmit={handleSubmit}>
    {/* Country Image URL */}
    <div className="mb-4">
      <label className="block font-semibold mb-2">Country Image URL</label>
      <input
        name="countryImage"
        type="text"
        className="w-full p-2 border rounded"
        placeholder="Enter country image URL"
        required
      />
    </div>

    {/* Country Name */}
    <div className="mb-4">
      <label className="block font-semibold mb-2">Country Name</label>
      <input
        name="countryName"
        type="text"
        className="w-full p-2 border rounded"
        placeholder="Enter country name"
        required
      />
    </div>

    {/* Visa Type */}
    <div className="mb-4">
      <label className="block font-semibold mb-2">Visa Type</label>
      <select
        name="visaType"
        className="w-full p-2 border rounded"
        required
      >
        <option value="">Select a visa type</option>
        <option value="Tourist visa">Tourist Visa</option>
        <option value="Student visa">Student Visa</option>
        <option value="Official visa">Official Visa</option>
      </select>
    </div>

    {/* Processing Time */}
    <div className="mb-4">
      <label className="block font-semibold mb-2">Processing Time</label>
      <input
        name="processingTime"
        type="text"
        className="w-full p-2 border rounded"
        placeholder="e.g., 7-10 business days"
        required
      />
    </div>

    {/* Required Documents */}
    <div className="mb-4">
      <label className="block font-semibold mb-2">Required Documents</label>
      <div className="flex items-center justify-between">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="requiredDocuments"
            value="Valid passport"
            className="mr-2"
          />
          Valid Passport
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="requiredDocuments"
            value="Visa application form"
            className="mr-2"
          />
          Visa Application Form
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="requiredDocuments"
            value="Recent passport-sized photograph"
            className="mr-2"
          />
          Recent Passport-Sized Photograph
        </label>
      </div>
    </div>

    {/* Description */}
    <div className="mb-4">
      <label className="block font-semibold mb-2">Description</label>
      <textarea
        name="description"
        className="w-full p-2 border rounded"
        placeholder="Provide a brief description"
        required
      ></textarea>
    </div>

    {/* Age Restriction */}
    <div className="mb-4">
      <label className="block font-semibold mb-2">Age Restriction</label>
      <input
        name="ageRestriction"
        type="number"
        className="w-full p-2 border rounded"
        placeholder="e.g., 18"
        required
      />
    </div>

    {/* Fee */}
    <div className="mb-4">
      <label className="block font-semibold mb-2">Visa Fee</label>
      <input
        name="fee"
        type="number"
        className="w-full p-2 border rounded"
        placeholder="e.g., 100"
        required
      />
    </div>

    {/* Validity */}
    <div className="mb-4">
      <label className="block font-semibold mb-2">Validity</label>
      <input
        name="validity"
        type="text"
        className="w-full p-2 border rounded"
        placeholder="e.g., 6 months"
        required
      />
    </div>

    {/* Application Method */}
    <div className="mb-4">
      <label className="block font-semibold mb-2">Application Method</label>
      <input
        name="applicationMethod"
        type="text"
        className="w-full p-2 border rounded"
        placeholder="e.g., Online or In-person"
        required
      />
    </div>

    {/* Add Visa Button */}
    <button
      type="submit"
      className="w-full bg-yellow-500 text-white text-xl py-2 rounded hover:bg-yellow-600"
    >
      Add Visa
    </button>
  </form>
</div>

  );
};

export default AddVisa;
