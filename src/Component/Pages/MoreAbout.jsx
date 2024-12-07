
const MoreAbout = () => {
  return (
    <div className="bg-base-100 text-black dark:bg-gray-900 dark:text-white px-6 lg:px-20 py-16">
      {/* Page Heading */}
      <h1 className="text-5xl font-bold text-center mb-16">
        About <span className="text-yellow-500">Us</span>
      </h1>

      {/* Section 1: Introduction */}
      <section className="text-center mb-16">
        <p className="text-xl lg:text-2xl leading-relaxed mx-auto max-w-4xl">
          Welcome to Sunflower, where we are committed to creating meaningful
          connections that break barriers and open doors to a brighter future.
          Our team of dedicated professionals strives to deliver exceptional
          service and tailor-made solutions for all your needs. Whether it's
          travel, education, or work, we ensure that your journey is as smooth
          as possible.
        </p>
      </section>

      {/* Section 2: Mission */}
      <section className="flex flex-col lg:flex-row items-center gap-12 mb-16">
        <div className="lg:w-1/2">
          <img
            src="https://i.ibb.co/FbVXj9x/Egypt.jpg"
            alt="Our Mission"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-semibold mb-6">
            Our <span className="text-yellow-500">Mission</span>
          </h2>
          <p className="text-lg leading-relaxed">
            At Sunflower, our mission is to make the visa application process
            seamless, transparent, and accessible to everyone. With years of
            experience, we strive to connect aspiring travelers with the best
            solutions tailored to their unique needs. We believe in empowering
            individuals and communities to reach their full potential through
            global opportunities.
          </p>
        </div>
      </section>

      {/* Section 3: Vision */}
      <section className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-16">
        <div className="lg:w-1/2">
          <img
            src="https://i.ibb.co/M1gryQh/turkey.jpg"
            alt="Our Vision"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-semibold mb-6">
            Our <span className="text-yellow-500">Vision</span>
          </h2>
          <p className="text-lg leading-relaxed">
            We envision a world where borders don’t limit opportunities. Our
            goal is to create a future where anyone, regardless of their
            background, can explore, learn, and grow globally. By fostering a
            culture of inclusivity and innovation, we aim to lead the way in
            simplifying processes and unlocking potential for everyone.
          </p>
        </div>
      </section>

      {/* Section 4: Values */}
      <section className="flex flex-col lg:flex-row items-center gap-12 mb-16">
        <div className="lg:w-1/2">
          <img
            src="https://i.ibb.co/kXr2HT3/china.jpg"
            alt="Our Values"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-semibold mb-6">
            Our <span className="text-yellow-500">Values</span>
          </h2>
          <ul className="list-disc pl-6 space-y-4 text-lg">
            <li>
              <strong>Integrity:</strong> We operate with honesty and
              transparency in everything we do.
            </li>
            <li>
              <strong>Customer Commitment:</strong> Your satisfaction is our
              priority, and we go above and beyond to exceed your expectations.
            </li>
            <li>
              <strong>Innovation:</strong> We embrace creativity and forward
              thinking to provide the best solutions.
            </li>
            <li>
              <strong>Community Focus:</strong> We are passionate about giving
              back and empowering the communities we serve.
            </li>
          </ul>
        </div>
      </section>

      {/* Section 5: Our Team */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-6">
          Meet Our <span className="text-yellow-500">Team</span>
        </h2>
        <p className="text-lg leading-relaxed mb-8 max-w-4xl mx-auto">
          Behind every successful journey is a team of skilled and dedicated
          professionals. Our experts bring their passion, experience, and
          expertise to ensure that you have the best support every step of the
          way.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
            <img
              src="https://i.ibb.co/gJfByFS/nepal.jpg"
              alt="Team Member 1"
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-medium">Siam Mahmud</h3>
            <p className="text-gray-600 dark:text-gray-400">CEO</p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
            <img
              src="https://i.ibb.co/ZSJSjx2/africa2.jpg"
              alt="Team Member 2"
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-medium">Ornob Addi</h3>
            <p className="text-gray-600 dark:text-gray-400">Operations Head</p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
            <img
              src="https://i.ibb.co/8dj14X5/switzerland2.jpg"
              alt="Team Member 3"
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-medium">Afrin Riha</h3>
            <p className="text-gray-600 dark:text-gray-400">Lead Consultant</p>
          </div>
        </div>
      </section>

      {/* Section 6: Call to Action */}
      <section className="bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 text-white text-center py-12 rounded-lg shadow-lg">
        <h2 className="text-4xl font-semibold mb-4">
          Ready to Start Your <span className="underline">Journey</span>?
        </h2>
        <p className="text-lg mb-6">
          Let's make your dreams a reality. Reach out to us today and take the
          first step toward your goals.
        </p>
        <button className="bg-white text-yellow-500 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default MoreAbout;
