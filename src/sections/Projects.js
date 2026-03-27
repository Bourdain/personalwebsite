import React from 'react';

const ProjectCard = ({preview, title, description, technologies, link }) => (
  <div className="bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1">
    <div className="h-48 bg-gradient-to-br from-slate-200 dark:from-slate-700 to-slate-300 dark:to-slate-800 flex items-center justify-center overflow-hidden">
      {preview ? (
        <img src={preview} alt={title} className="w-full h-full object-contain" />
      ) : (
        <span className="text-slate-500 dark:text-gray-400 text-center px-4">Project Preview</span>
      )}
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
      <p className="text-slate-700 dark:text-gray-400 mb-4 text-sm leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies && technologies.map((tech, idx) => (
          <span key={idx} className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full">
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
        <span className="inline-block px-4 py-2 bg-slate-300 dark:bg-gray-700 text-slate-500 dark:text-gray-400 text-sm font-semibold rounded cursor-not-allowed">
          Coming Soon
        </span>
      )}
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      preview: "/content/images/openworkout.png",
      title: "OpenWorkout Club",
      description: "Your personal trainer, tracker, and planning application. ",
      technologies: [".NET", "Entity Framework", "Blazor (WebAssembly)", "Postgresql"],
      link: "https://openworkout.club/"
    },
    {
      preview: "/content/images/rvgldb_icon.png",
      title: "RVGL DB",
      description: "Database for an online racing community. Includes custom-built admin panel for managing users, events, and results.",
      technologies: ["React", ".NET", "Entity Framework", "Postgresql", "Material UI", "TypeScript"],
      link: "https://rvgldb.com/"
    },
    {
      preview: "/content/images/PPPLogo.png",
      title: "Print Play Protect",
      description: "Personal shop that makes, sells, and delivers custom printed products, laser engraved dice, and patches.",
      technologies: ["3D Printing", "Laser Engraving", "E-commerce", "Embroidering"],
      link: "https://printplayprotect.com/"
    },
    {
      preview: "/content/images/music.png",
      title: "KHInsider Music Download",
      description: "General tool to download music from KHInsider.",
      technologies: ["Blazor (Server)", "HTML Parsing", "File Download"],
      link: "https://khinsider.printplayprotect.com/"
    },
    {
      preview: "/content/images/CTT.png",
      title: "CTT Excel Generator",
      description: "Personal tool for generating Excel files to speed up the creation of CTT labels to ship products.",
      technologies: ["Blazor (WebAssembly)", "Excel Interop"],
      link: "https://ctt.printplayprotect.com/"
    }
    
  ];

  return (
    <section id="projects" className="min-h-screen bg-slate-50 dark:bg-slate-800 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-center">
          My Work
        </h2>
        <p className="text-slate-700 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Projects showcasing my expertise in automation, backend development, integrations, and database solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} link={project.link} preview={project.preview} title={project.title} description={project.description} technologies={project.technologies} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
