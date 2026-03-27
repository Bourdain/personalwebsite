import React from 'react';

const ExperienceCard = ({ title, company, period, description, responsibilities }) => (
  <div className="relative pl-8 pb-12">
    <div className="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full"></div>
    <div className="absolute left-[7px] top-8 w-0.5 h-full bg-gradient-to-b from-blue-500 to-blue-900 opacity-30"></div>
    
    <div className="bg-white dark:bg-slate-900 rounded-lg p-6 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-300 border border-slate-200 dark:border-slate-700">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
      <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">{company}</p>
      <p className="text-slate-600 dark:text-gray-400 text-sm mb-4">{period}</p>
      <p className="text-slate-700 dark:text-gray-300 mb-4">{description}</p>
      {responsibilities && (
        <ul className="space-y-2">
          {responsibilities.map((resp, idx) => (
            <li key={idx} className="text-slate-700 dark:text-gray-300 text-sm flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-3">▸</span>
              <span>{resp}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      title: "Owner/Operator",
      company: "Print Play Protect",
      period: "Feb 2023 - Present",
      description: "Company Owner/Operator of our 3D printing and laser engraving business.",
      responsibilities: [
        "Design and manufacture of custom printed products, laser engraved dice, and embroidered patches",
        "Creation and maintenance of e-commerce tools and website using Blazor WebAssembly, PostgreSQL, and others.",
      ]
    },
    {
      title: "Senior Associate",
      company: "PwC",
      period: "Oct 2022 - Present",
      description: "Software Engineer specializing in backend development, automation, and integrations. Responsible for designing and implementing scalable solutions to meet client needs.",
      responsibilities: [
        "Database design and management for client applications",
        ".NET backend development for various projects",
        "Integration of third-party services and APIs"
      ]
    },
    {
      title: ".NET Developer",
      company: "Santander Portugal",
      period: "Dec 2020 - Sep 2022",
      description: "Software Engineer / Process Automation Developer.",
      responsibilities: [
        "Process Automation Specialist with Blue Prism, responsible for designing and implementing automation solutions to optimize business processes.",
        "Backend development using .NET for various internal applications and tools.",
        "Integration of systems and services to streamline operations and improve efficiency."
      ]
    },
    {
      title: "Software Automation Engineer",
      company: "Banque Internationale à Luxembourg (BIL)",
      period: "Sep 2018 - Dec 2020",
      description: "Spearheaded process automation initiatives as the lead developer for banking system processes, utilizing RPA Blue Prism.",
      responsibilities: [
        "Engineered and implemented software integrations with existing applications, showcasing proficiency in dotnet core and web API development.",
        "Leveraged Entity Framework for SQL Access, streamlining database interactions and ensuring data integrity.",
        "Implemented batch processing solutions tailored for the unique requirements of banking systems, enhancing overall system performance."
      ]
    },
  ];

  return (
    <section id="experience" className="min-h-screen bg-slate-50 dark:bg-slate-950 px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-center">
          Experience
        </h2>
        <p className="text-slate-700 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          My professional journey and the roles that have shaped my skills and expertise.
        </p>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} {...exp} />
          ))}
        </div>
        <div className="mt-12 pl-8">
          <a 
            href="https://www.linkedin.com/in/cesarbourdain/" 
            className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded transition-colors duration-300">
            Learn More About My Career →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
