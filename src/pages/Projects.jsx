import React from 'react';

const ProjectsSection = () => {
  const projects = [
    { title: 'Project One', description: 'A cool web app using React and Firebase.' },
    { title: 'Project Two', description: 'A portfolio site built with Vite and TailwindCSS.' },
  ];

  return (
    <section id="projects" className="bg-gray-100 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-gray-800 dark:text-white">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded shadow">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
