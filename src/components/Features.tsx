import React from 'react';
import { Brain, Rocket, Users, Lock } from 'lucide-react';

const features = [
  {
    name: 'AI-Powered Solutions',
    description: 'Leverage cutting-edge AI technology to transform your business operations and decision-making processes.',
    icon: Brain,
  },
  {
    name: 'Expert Guidance',
    description: 'Get personalized support from our team of AI specialists to implement the right solutions for your needs.',
    icon: Users,
  },
  {
    name: 'Rapid Implementation',
    description: 'Quick and efficient integration of AI tools into your existing workflows with minimal disruption.',
    icon: Rocket,
  },
  {
    name: 'Secure & Reliable',
    description: 'Enterprise-grade security measures to protect your data and ensure compliance with regulations.',
    icon: Lock,
  },
];

const Features = () => {
  return (
    <div className="py-24 sm:py-32 bg-[#F0F8FF]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-[#0E5CAD]">Why Choose Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed with AI
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-[#0E5CAD]" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;