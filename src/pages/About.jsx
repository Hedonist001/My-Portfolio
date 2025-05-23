import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">About Me</h2>
        <p className="text-gray-600 dark:text-gray-300">
          I’m a full-stack developer with a passion for creating modern, responsive web applications. My tech stack includes React, TailwindCSS, Node.js, and more.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
