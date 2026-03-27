import React from 'react';

const ExperienceCard = ({ title, company, period, description, responsibilities }) => (
  <div className="relative pl-8 pb-12">
    <div className="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full"></div>
    <div className="absolute left-[7px] top-8 w-0.5 h-full bg-gradient-to-b from-blue-500 to-blue-900 opacity-30"></div>
    
    <div className="bg-slate-800 dark:bg-slate-900 rounded-lg p-6 hover:bg-slate-700 dark:hover:bg-slate-800 transition-colors duration-300">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-blue-400 font-semibold mb-1">{company}</p>
      <p className="text-gray-400 text-sm mb-4">{period}</p>
      <p className="text-gray-300 mb-4">{description}</p>
      {responsibilities && (
        <ul className="space-y-2">
          {responsibilities.map((resp, idx) => (
            <li key={idx} className="text-gray-300 text-sm flex items-start">
              <span className="text-blue-400 mr-3">▸</span>
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
      title: "Your Current/Latest Position",
      company: "Company Name",
      period: "Month Year - Present",
      description: "Add your current role description here.",
      responsibilities: [
        "Key responsibility or achievement",
        "Another notable accomplishment",
        "Technology or process improvement"
      ]
    },
    {
      title: "Previous Position",
      company: "Company Name",
      period: "Month Year - Month Year",
      description: "Add your previous role description here.",
      responsibilities: [
        "Key responsibility or achievement",
        "Another notable accomplishment"
      ]
    },
    {
      title: "Earlier Position",
      company: "Company Name",
      period: "Month Year - Month Year",
      description: "Add your earlier role description here.",
      responsibilities: [
        "Key responsibility or achievement"
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen bg-slate-800 dark:bg-slate-950 px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Experience
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          My professional journey and the roles that have shaped my skills and expertise.
        </p>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
