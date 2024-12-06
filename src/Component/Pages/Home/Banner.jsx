import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {
    const slides = [
        {
            title: "Welcome to Sunflower",
            description: "Simplify your visa journey with an all-in-one platform for visa requirements, online applications, and real-time tracking.",
            background: "https://i.ibb.co/xYFHPrm/1jp-card.jpg",
        },
        {
            title: "Check Visa Requirements",
            description: "Quickly find visa requirements for your destination and ensure you're fully prepared for your next journey.",
            background: "https://i.ibb.co.com/1Q1rnW4/africa1.jpg",
        },
        {
            title: "Track Applications Effortlessly",
            description: "Stay updated on your visa application status with our real-time tracking system.",
            background: "https://i.ibb.co.com/wCP91BZ/bangladesh1.jpg",
        },
        {
            title: "Personalized Support",
            description: "Get expert guidance and tailored solutions for your visa needs with our dedicated support team.",
            background: "https://i.ibb.co/c6xqM85/2jp-card-jpg.jpg", 
        },
        {
            title: "Your Trusted Travel Partner",
            description: "Experience seamless travel planning with our user-friendly tools and comprehensive resources.",
            background: "https://i.ibb.co.com/6FhBdgq/switzerland1.jpg", 
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
                            <button className="mt-6 px-6 py-2 btn bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-lg text-black font-bold rounded-lg border-yellow-500  ">
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
