import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-purple-500 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4 p-2">
              <img 
                src="/polygon logo.webp" 
                alt="Polygon Logo" 
                className="w-12 h-12 rounded-full"
              />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of users already using Polygon Accounts
            </p>
          </div>
          
          <a
            href="https://app.polygon.ac"
            className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-purple-600 font-semibold rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start now
          </a>
          
          <div className="mt-12 pt-8 border-t border-purple-400 border-opacity-30">
            <div className="flex flex-col md:flex-row justify-between items-center text-purple-200 text-sm">
              <div className="flex items-center mb-4 md:mb-0">
                <span>© 2024 Polygon Accounts. All rights reserved.</span>
              </div>
              
              <div className="flex items-center space-x-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Support</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;