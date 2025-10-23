import React from 'react';
import { Code2, Smartphone, Globe, Database, Cloud, Lock } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="h-8 w-8" />,
    title: 'Web Development',
    description: 'Modern web applications built with React, Node.js, and other cutting-edge technologies.',
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications for iOS and Android using React Native.',
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that create engaging digital experiences.',
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: 'Database Solutions',
    description: 'Scalable database architectures and efficient data management systems.',
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: 'Cloud Services',
    description: 'Cloud infrastructure setup and management using AWS, Azure, or GCP.',
  },
  {
    icon: <Lock className="h-8 w-8" />,
    title: 'Security Solutions',
    description: 'Implementing robust security measures to protect your digital assets.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">
            We offer a comprehensive range of digital solutions to help your business thrive in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow group hover:-translate-y-1 duration-300"
            >
              <div className="inline-block p-4 rounded-2xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;