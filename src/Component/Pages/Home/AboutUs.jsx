import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-base-100 text-black px-6 lg:px-20 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">
        About <span className="text-yellow-500">Us</span>
      </h1>

      {/* Section 1 */}
      <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
        <div className="lg:w-1/2">
          <img
            src="https://i.ibb.co/VQTdzyf/bangladesh2.jpg"
            alt="Our Mission"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">
            Our <span className="text-yellow-500">Mission</span>
          </h2>
          <p className="text-lg leading-relaxed">
            At Sunflower, our mission is to make the visa application process
            seamless, transparent, and accessible to everyone. With years of
            experience, we strive to connect aspiring travelers with the best
            visa solutions for their needs.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-8 mb-12">
        <div className="lg:w-1/2">
          <img
            src="https://i.ibb.co.com/zJNGkvg/australia.jpg"
            alt="Our Vision"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">
            Our <span className="text-yellow-500">Vision</span>
          </h2>
          <p className="text-lg leading-relaxed">
            We envision a world where borders don’t limit opportunities. Our
            team is dedicated to creating a future where your dreams of
            exploring, studying, or working abroad are only a few steps away.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2">
          <img
            src="https://i.ibb.co/M1gryQh/turkey.jpg"
            alt="Our Values"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">
            Our <span className="text-yellow-500">Values</span>
          </h2>
          <p className="text-lg leading-relaxed">
            We are committed to integrity, transparency, and customer
            satisfaction. These core values guide us in everything we do,
            ensuring that our users feel supported every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
