import React, { useState } from 'react';

const ContactLink = ({ icon, label, href }) => (
  <a 
    href={href}
    className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-blue-600 text-slate-900 dark:text-white rounded-lg transition-colors duration-300 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500"
  >
    <span className="text-xl">{icon}</span>
    <span className="font-semibold">{label}</span>
  </a>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link
    const mailtoLink = `mailto:cesarbour@example.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="bg-white dark:bg-slate-900 px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-slate-700 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to chat about technology? I'd love to hear from you.
        </p>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <ContactLink 
            icon="📧" 
            label="Email" 
            href="mailto:cesarbour@example.com"
          />
          <ContactLink 
            icon="💼" 
            label="LinkedIn" 
            href="https://linkedin.com"
          />
          <ContactLink 
            icon="🐙" 
            label="GitHub" 
            href="https://github.com"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-700 mt-20 pt-12 text-center">
        <p className="text-slate-700 dark:text-gray-400 mb-2">
          © 2026 César Bourdain. All rights reserved.
        </p>
        <p className="text-slate-600 dark:text-gray-500 text-sm">
          Built with React, Tailwind CSS, and a passion for clean code.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
