import React from 'react';
import { Mail, Globe, Send } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Mail,
      title: 'Sign in with email',
      description: 'No seed phrases or private keys to manage'
    },
    {
      icon: Globe,
      title: 'Claim your domain',
      description: 'Get your handle before someone else does!'
    },
    {
      icon: Send,
      title: 'Start transacting',
      description: 'Play with defi, buy bitcoin, gold and more'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Simple 3-step process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started with Polygon in seconds
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-sm">{index + 1}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-200 to-transparent transform translate-x-4 -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* No transaction fees callout */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-green-800 font-semibold text-lg">Free transaction fees</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;