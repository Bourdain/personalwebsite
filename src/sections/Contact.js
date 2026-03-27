import React, { useState } from 'react';

const ContactLink = ({ icon, label, href }) => (
  <a 
    href={href}
    className="flex items-center gap-3 px-6 py-3 bg-slate-800 dark:bg-slate-900 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300"
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
    <section id="contact" className="bg-slate-950 dark:bg-slate-900 px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
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

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-slate-800 dark:bg-slate-900 rounded-lg p-8">
          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-700 dark:bg-slate-800 text-white border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Your name"
            />
          </div>

          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-700 dark:bg-slate-800 text-white border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 bg-slate-700 dark:bg-slate-800 text-white border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
              placeholder="Your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-700 mt-20 pt-12 text-center">
        <p className="text-gray-400 mb-2">
          © 2026 César Bourdain. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm">
          Built with React, Tailwind CSS, and a passion for clean code.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
