import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-gray-800 dark:text-white">Hi, I’m Saheed Opeyemi A.</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          I build things for the web — Full-stack Developer
        </p>
        <a href="/Projects" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          See My Projects
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
