import React, { useState } from 'react';
import { toast } from './ui/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Success!",
      description: "Thank you for subscribing! Check your email for the free AI Basics eBook.",
    });

    setEmail('');
    setLoading(false);
  };

  return (
    <div className="bg-[#0A2540] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Subscribe to our newsletter
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Get our free "AI Basics—A Beginner's Guide" eBook and stay updated with the latest in AI technology.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#0E5CAD] sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                disabled={loading}
                className="flex-none rounded-md bg-[#0E5CAD] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0E5CAD]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E5CAD] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
          <div className="max-w-xl lg:max-w-lg">
            <div className="rounded-2xl bg-white/5 p-8">
              <h3 className="text-xl font-semibold text-white">What you'll get:</h3>
              <ul className="mt-4 space-y-4 text-gray-300">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Free "AI Basics" eBook (Instant Download)
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Weekly AI insights and updates
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Exclusive tutorials and guides
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Early access to new features
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;