import React from "react";

const WhyChooseUs = () => {
    const features = [
        {
            title: "Trusted by Thousands",
            description:
                "Our platform has helped thousands of applicants achieve their travel dreams with confidence.",
            icon: "🌟",
        },
        {
            title: "Fast and Reliable",
            description:
                "Streamlined processes and cutting-edge technology ensure speedy and hassle-free applications.",
            icon: "⚡",
        },
        {
            title: "Global Coverage",
            description:
                "We provide visa assistance for over 100+ countries, covering every corner of the world.",
            icon: "🌍",
        },
        {
            title: "24/7 Support",
            description:
                "Our expert support team is always ready to assist you, no matter the time zone.",
            icon: "💬",
        },
    ];

    return (
        <div className="bg-white py-16">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-900 via-yellow-400 to-yellow-900 bg-clip-text text-transparent">
                Why Choose Sunflower?
            </h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="text-center border border-gray-200 shadow-lg rounded-lg p-6 transition transform hover:scale-105 duration-300"
                    >
                        
                        <div className="text-5xl text-yellow-500 mb-4">{feature.icon}</div>
                        
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                        
                        <p className="text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;
