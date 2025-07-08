import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Are transaction fees free?",
      answer: "We are covering them for a limited time as part of a grant from Polygon. This allows you to experience the full power of Polygon without any upfront costs."
    },
    {
      question: "How secure is my Polygon Account?",
      answer: "Your account uses enterprise-grade security with smart contract technology. We've implemented multiple layers of protection including curated applications and simplified tooling to prevent common user errors."
    },
    {
      question: "What can I do with my polygon.ac domain?",
      answer: "Your polygon.ac domain serves as both your wallet address and your Web3 identity. Anyone can send you crypto using your easy-to-remember domain name instead of a complex wallet address."
    },
    {
      question: "Do I need any special software or extensions?",
      answer: "No additional software required. Polygon Accounts works directly in your web browser with just an email login or social authentication."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently asked questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about Polygon Accounts
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-200 border border-gray-100 hover:border-purple-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-purple-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 pt-2 bg-gray-50 rounded-b-xl border-l border-r border-b border-gray-100">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;