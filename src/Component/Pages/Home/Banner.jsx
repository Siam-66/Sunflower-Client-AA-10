import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {
    const slides = [
        {
            title: "Welcome to Sunflower",
            description: "Simplify your visa journey with an all-in-one platform for visa requirements, online applications, and real-time tracking.",
            background: "https://i.ibb.co/xYFHPrm/1jp-card.jpg", // Replace with actual banner images
        },
        {
            title: "Check Visa Requirements",
            description: "Quickly find visa requirements for your destination and ensure you're fully prepared for your next journey.",
            background: "https://i.ibb.co/c6xqM85/2jp-card-jpg.jpg",
        },
        {
            title: "Track Applications Effortlessly",
            description: "Stay updated on your visa application status with our real-time tracking system.",
            background: "https://i.ibb.co/3TWkbC1/3jp-card-jpg.jpg",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="relative">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="relative h-[400px] md:h-[600px]">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `url(${slide.background})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                filter: "brightness(0.7)",
                            }}
                        ></div>
                        {/* Content */}
                        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4 text-white">
                            <h1 className="text-3xl md:text-5xl font-bold">{slide.title}</h1>
                            <p className="mt-4 text-lg md:text-xl max-w-3xl">{slide.description}</p>
                            <button className="mt-6 px-6 py-2 bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-400">
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;
