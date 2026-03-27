import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 px-6 py-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          César Bourdain
        </h1>
        <h2 className="text-3xl md:text-4xl text-blue-400 mb-8 font-light">
          Full Stack Developer
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Specializing in backend development with expertise in Automation, Integrations, and Databases. 
          Building robust, scalable solutions that solve real-world problems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            View My Work
          </a>
          <a 
            href="#contact"
            className="px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-semibold rounded-lg transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
