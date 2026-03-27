import React from 'react';

const SkillCategory = ({ category, skills }) => (
  <div className="bg-slate-800 dark:bg-slate-900 rounded-lg p-6 hover:bg-slate-700 dark:hover:bg-slate-800 transition-colors duration-300">
    <h3 className="text-xl font-bold text-blue-400 mb-4">{category}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, idx) => (
        <span key={idx} className="px-4 py-2 bg-slate-700 dark:bg-slate-800 text-gray-200 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors duration-300">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      category: "Backend",
      skills: [".NET", "C#", "Node.js", "Python", "Java"]
    },
    {
      category: "Automation",
      skills: ["Blue Prism", "RPA", "Task Automation", "Workflow Orchestration"]
    },
    {
      category: "Integrations",
      skills: ["REST APIs", "Message Brokers", "Data Integration", "ETL Pipelines"]
    },
    {
      category: "Databases",
      skills: ["SQL Server", "PostgreSQL", "MongoDB", "Azure SQL"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Docker", "Kubernetes", "AWS", "Azure", "Git"]
    },
    {
      category: "Frontend",
      skills: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS"]
    }
  ];

  return (
    <section id="skills" className="min-h-screen bg-slate-950 dark:bg-slate-900 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Skills & Technologies
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise and tools I work with daily.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <SkillCategory key={idx} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
