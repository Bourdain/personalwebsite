import React from 'react';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import TopNavBar from './Toolbar/top_nav_bar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

function AppContent() {
  return (
    <div className="bg-slate-900 dark:bg-slate-950 text-white">
      <TopNavBar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
