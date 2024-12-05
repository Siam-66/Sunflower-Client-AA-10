import React from "react";

const PopularVisaCategories = () => {
    const visaCategories = [
        {
            type: "Student Visa",
            description: "Embark on your educational journey abroad with ease.",
            icon: "🎓", // Replace with a custom SVG or icon if needed
        },
        {
            type: "Work Visa",
            description: "Unlock global career opportunities with a streamlined work visa.",
            icon: "💼",
        },
        {
            type: "Tourist Visa",
            description: "Travel the world hassle-free with quick and simple tourist visa processes.",
            icon: "✈️",
        },
    ];

    return (
        <div className="bg-gray-100 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Popular Visa Categories</h2>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-12">
                {visaCategories.map((category, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center text-center md:w-1/3"
                    >
                        {/* Icon */}
                        <div className="text-5xl mb-4">{category.icon}</div>
                        {/* Title */}
                        <h3 className="text-2xl font-semibold mb-2">{category.type}</h3>
                        {/* Description */}
                        <p className="text-gray-600">{category.description}</p>
                        {/* Progress Line */}
                        {index < visaCategories.length - 1 && (
                            <div className="hidden md:block absolute top-1/2 right-0 h-1 w-16 bg-yellow-500 transform translate-x-full"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularVisaCategories;
