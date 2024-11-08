import React from 'react';
import { Brain, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const navigation = {
    main: [
      { name: 'Home', href: '#' },
      { name: 'AI Information', href: '#' },
      { name: 'Services', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    social: [
      { name: 'Facebook', href: '#', icon: Facebook },
      { name: 'Twitter', href: '#', icon: Twitter },
      { name: 'LinkedIn', href: '#', icon: Linkedin },
      { name: 'YouTube', href: '#', icon: Youtube },
    ],
  };

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="flex justify-center items-center mb-8">
          <Brain className="h-8 w-8 text-[#0A2540]" />
          <span className="ml-2 text-[#0A2540] font-bold text-xl">intelliAI Pro</span>
        </div>
        
        <nav className="mb-8 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        
        <div className="mt-8 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} intelliAI Pro Journey. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;