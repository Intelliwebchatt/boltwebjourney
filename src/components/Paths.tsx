import React from 'react';
import { BookOpen, Briefcase, ArrowRight } from 'lucide-react';

const Paths = () => {
  return (
    <div id="paths" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose Your Path
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Whether you're looking to learn or ready to implement AI in your business, we have the perfect solution for you.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          {/* AI Information Hub */}
          <div className="flex flex-col rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="mb-6">
              <BookOpen className="h-12 w-12 text-[#0E5CAD]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">AI Information Hub</h3>
            <p className="mt-4 flex-auto text-base leading-7 text-gray-600">
              Access comprehensive resources including guides, news feeds, blogs, multimedia library, eBooks, and courses.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center text-[#0E5CAD] font-semibold group"
              >
                Discover AI Information
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Professional Services */}
          <div className="flex flex-col rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="mb-6">
              <Briefcase className="h-12 w-12 text-[#0E5CAD]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Professional Services</h3>
            <p className="mt-4 flex-auto text-base leading-7 text-gray-600">
              Get expert guidance with our Pro Series Package, marketing and consulting, web design, SEO optimization, and private training.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center text-[#0E5CAD] font-semibold group"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paths;