import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-900 dark:to-slate-800 px-6 py-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-6xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
          César Bourdain
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <img src="/content/images/hero.png" alt="César Bourdain" className="rounded-full w-32 h-32 object-cover border-4 border-white dark:border-slate-700" />
        </div>
        <h2 className="text-3xl md:text-4xl text-blue-600 dark:text-blue-400 mb-8 font-light">
          Full Stack Developer
        </h2>
        <p className="text-lg md:text-xl text-slate-700 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Specializing in backend development with expertise in Automation, Integrations, and Databases. 
          Building robust, scalable solutions that solve real-world problems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            View My Work
          </a>
          <a 
            href="#contact"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 font-semibold rounded-lg transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
