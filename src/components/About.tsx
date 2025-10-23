import React from 'react';
import { Users, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-3xl opacity-20"></div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
              alt="Our Team"
              className="relative rounded-3xl shadow-xl"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">About MetaXsouL</h2>
              <p className="text-xl text-gray-600 mb-8">
                We are a team of passionate developers, designers, and digital innovators committed to 
                delivering exceptional software solutions that drive business success.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                  <p className="text-gray-600">
                    Our diverse team brings together expertise across multiple technologies and industries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Client-Focused Approach</h3>
                  <p className="text-gray-600">
                    We prioritize understanding your business goals to deliver tailored solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                  <p className="text-gray-600">
                    Our rigorous quality control ensures reliable and scalable solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;