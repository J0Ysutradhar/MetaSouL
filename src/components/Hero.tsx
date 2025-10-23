import React from 'react';
import { ArrowRight, Code2, Laptop, Smartphone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-full">
              <Code2 className="h-5 w-5 text-indigo-600" />
              <span className="text-indigo-600 font-medium">Leading Software Agency</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              We Build <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Digital Solutions</span> That Transform Businesses
            </h1>
            
            <p className="text-xl text-gray-600">
              MetaXsouL is your trusted partner in creating innovative web applications, 
              websites, and software solutions that drive business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-full hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
                Start Your Project <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-full hover:bg-indigo-50 transition-colors">
                View Our Work
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  150+
                </div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-gray-600">Team Members</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-xl">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-indigo-50 p-4 rounded-2xl">
                    <Laptop className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold">Web Development</h3>
                  <p className="text-sm text-gray-600">Modern web applications with React, Node.js & more</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-2xl">
                    <Smartphone className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold">Mobile Solutions</h3>
                  <p className="text-sm text-gray-600">Cross-platform mobile apps for iOS & Android</p>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070"
                alt="Team working"
                className="mt-8 rounded-2xl w-full object-cover h-48"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;