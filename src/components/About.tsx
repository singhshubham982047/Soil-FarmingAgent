"use client";

import Link from "next/link";
import AppearOnScroll from "./AppearOnScroll";
const About = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 py-12 px-6 mt-20">
      {/* Welcome Section */}
      <AppearOnScroll delay={0.2}>
        <section className="text-center mb-12 w-full">
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            Welcome to Soil-Farming-Agent
          </h1>
          <p className="text-lg text-gray-700">
            Revolutionizing agriculture with data-driven insights, modern
            technologies, and sustainable practices to optimize farming for the
            future.
          </p>
        </section>
      </AppearOnScroll>

      {/* Our Mission Section */}
      <AppearOnScroll delay={0.4}>
        <section className="w-full my-12 bg-white p-8 shadow-md rounded-md">
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600">
            At Soil-Farming-Agent, our mission is to empower farmers to make
            better decisions by providing accurate, up-to-date soil data and
            personalized farming solutions. We aim to optimize productivity and
            sustainability while minimizing environmental impact through the use
            of cutting-edge technology.
          </p>
        </section>
      </AppearOnScroll>

      {/* What We Offer Section */}
      <AppearOnScroll delay={0.6}>
        <section className="w-full my-12 bg-white p-8 shadow-md rounded-md">
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            What We Offer
          </h2>
          <ul className="text-lg text-gray-600 list-disc list-inside space-y-2">
            <li>
              Comprehensive soil data analysis and insights tailored to your
              land.
            </li>
            <li>
              Recommendations on crops best suited to specific soil types.
            </li>
            <li>
              Connections to trusted seed distributors for easy access to
              high-quality seeds.
            </li>
            <li>
              Advanced tools for monitoring soil health and maximizing yields.
            </li>
            <li>
              Support for sustainable farming practices, including reduced
              chemical use.
            </li>
          </ul>
        </section>
      </AppearOnScroll>
      {/* Our Vision Section */}
      <AppearOnScroll>
        <section className="w-full my-12 bg-white p-8 shadow-md rounded-md">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Our Vision</h2>
          <p className="text-lg text-gray-600">
            We envision a world where agriculture is in harmony with
            nature—where farmers can maximize productivity without compromising
            the environment. Through innovation, education, and collaboration,
            we are building a future where farming thrives sustainably, feeding
            the world’s growing population while safeguarding our planet’s
            resources.
          </p>
        </section>
      </AppearOnScroll>

      {/* Join Us Section */}
      <AppearOnScroll delay={0.8}>
        <section className="w-full my-12 bg-white p-8 shadow-md rounded-md text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Join Us</h2>
          <p className="text-lg text-gray-600 mb-4">
            Whether you're a farmer, seed distributor, or simply passionate
            about sustainable agriculture, we invite you to join us in
            revolutionizing farming. Together, we can create a brighter, more
            sustainable future.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700"
          >
            Get In Touch
          </Link>
        </section>
      </AppearOnScroll>
    </div>
  );
};

export default About;
