import React from 'react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/polygon logo.webp" 
              alt="Polygon Logo" 
              className="w-10 h-10 rounded-full"
            />
            <span className="text-xl font-semibold text-gray-900">Polygon Accounts</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">Features</a>
            <a href="#security" className="text-gray-600 hover:text-purple-600 transition-colors">Security</a>
            <a href="#faq" className="text-gray-600 hover:text-purple-600 transition-colors">FAQ</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;