import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Server } from 'lucide-react';

const LimitedDeals = () => {
  const handlePurchase = () => {
    window.location.href = 'https://billing.sgnodes.host/';
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Limited Time Deals</h1>
          <p className="text-gray-400 text-xl">
            Exclusive offers available for a limited time only
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Special VPS Deal */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-navy-900 rounded-lg p-8 border-2 border-purple-500 relative overflow-hidden"
          >
            {/* Hot Deal Badge */}
            <div className="absolute top-4 right-4 bg-purple-500 text-white px-4 py-2 rounded-full flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Limited Time</span>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">VPS Deal</h2>
                <p className="text-gray-400 mb-4">High-performance VPS with premium specifications</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-purple-400">₹860</div>
                <div className="text-gray-400">/month</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold mb-4 text-lg">Hardware Specifications</h3>
                <ul className="space-y-3">
                  <Feature text="6 vCores CPU (Ryzen 7 7700)" />
                  <Feature text="48GB DDR4 RAM" />
                  <Feature text="300GB SSD Storage" />
                  <Feature text="Unmetered Bandwidth" />
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-lg">Features Included</h3>
                <ul className="space-y-3">
                  <Feature text="DDoS Protection" />
                  <Feature text="Full Root Access" />
                  <Feature text="24/7 Technical Support" />
                  <Feature text="99.9% Uptime Guarantee" />
                </ul>
              </div>
            </div>

            <motion.button
              onClick={handlePurchase}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white py-4 rounded-lg transition-colors text-lg font-semibold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get This Deal Now
            </motion.button>

            <div className="mt-4 text-center text-gray-400">
              <Server className="w-5 h-5 inline-block mr-2" />
              Limited stock available
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const Feature = ({ text }) => (
  <motion.div 
    className="flex items-center space-x-2"
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
  >
    <svg className="h-5 w-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
    <span className="text-gray-300">{text}</span>
  </motion.div>
);

export default LimitedDeals;