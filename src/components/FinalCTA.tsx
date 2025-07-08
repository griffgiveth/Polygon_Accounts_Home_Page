import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-purple-700 to-teal-600">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6">
            gm — Ready in{' '}
            <span className="text-teal-300">20 seconds</span>
          </h2>
          
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who've already claimed their Polygon Account. 
            Your Web3 journey starts now.
          </p>
          
          <a
            href="https://app.polygon.ac"
            className="inline-flex items-center px-10 py-5 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Get Polygon Account
            <ArrowRight className="ml-3 w-6 h-6" />
          </a>
          
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6 text-purple-200">
            <div className="flex items-center">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Free account creation
            </div>
            <div className="flex items-center">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Gas sponsorship active
            </div>
            <div className="flex items-center">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              20-second setup
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;