import React from "react";

const HowItWorks = () => {
    const steps = [
        {
            title: "Check Visa Requirements",
            description: "Enter your destination and nationality to view detailed visa requirements.",
            icon: "https://cdn-icons-png.flaticon.com/512/847/847969.png", 
        },
        {
            title: "Apply Online",
            description: "Fill out and submit your visa application online in a few clicks.",
            icon: "https://cdn-icons-png.flaticon.com/512/4076/4076549.png",
        },
        {
            title: "Track Your Application",
            description: "Use our tracking tool to monitor the status of your visa application.",
            icon: "https://cdn-icons-png.flaticon.com/512/2991/2991103.png",
        },
    ];

    return (
        <div className="bg-base-100 py-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-900 via-yellow-500 to-yellow-900 bg-clip-text text-transparent text-center mb-10">How It Works</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {steps.map((step, index) => (
                    <div key={index} className="text-center">
                        <img
                            src={step.icon}
                            alt={step.title}
                            className="w-16 h-16 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-bold">{step.title}</h3>
                        <p className="text-gray-600  mt-2">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;
