import React from "react";
const ProjectCard = ({ title, description, link }) => (
  <div className="p-4 border rounded-lg shadow hover:shadow-xl transition">
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="my-2">{description}</p>
    <a href={link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">View Project</a>
  </div>
);

export default ProjectCard;
