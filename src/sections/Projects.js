import React from 'react';

const ProjectCard = ({ title, description, technologies, link }) => (
  <div className="bg-slate-800 dark:bg-slate-900 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1">
    <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
      <span className="text-gray-400 text-center px-4">Project Preview</span>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-4 text-sm leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies && technologies.map((tech, idx) => (
          <span key={idx} className="px-3 py-1 text-xs bg-blue-900 text-blue-200 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      {link ? (
        <a 
          href={link} 
          className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded transition-colors duration-300"
        >
          Learn More →
        </a>
      ) : (
        <span className="inline-block px-4 py-2 bg-gray-700 text-gray-400 text-sm font-semibold rounded cursor-not-allowed">
          Coming Soon
        </span>
      )}
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Your automation project description goes here. Click to edit.",
      technologies: ["Technology", "Stack"],
      link: null
    },
    {
      title: "Project 2",
      description: "Your backend/integration project description goes here. Click to edit.",
      technologies: ["Technology", "Stack"],
      link: null
    },
    {
      title: "Project 3",
      description: "Your database/integration project description goes here. Click to edit.",
      technologies: ["Technology", "Stack"],
      link: null
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-slate-800 dark:bg-slate-950 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          My Work
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Projects showcasing my expertise in automation, backend development, integrations, and database solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
