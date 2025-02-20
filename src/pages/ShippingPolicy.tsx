import React from 'react';
import { motion } from 'framer-motion';
import { Truck } from 'lucide-react';

const ShippingPolicy = () => {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Truck className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Billing Policy</h1>
          <p className="text-gray-400">
            Understanding our billing cycle and payment terms
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <Section
            title="Billing Cycle"
            content="The date of your initial payment is established as your recurring payment date for subsequent monthly billing cycles. This ensures consistency and helps you plan your payments effectively."
          />

          <Section
            title="Payment Methods"
            content="We accept various payment methods including credit cards, debit cards, and other electronic payment systems. All transactions are processed securely."
          />

          <Section
            title="Late Payments"
            content="Services will be suspended after 1 day of late payment. To avoid service interruption, please ensure your payment method is up to date and has sufficient funds."
          />

          <Section
            title="Service Continuation"
            content="To maintain uninterrupted service, payments must be made by your established billing date. Any delay may result in service suspension."
          />
        </motion.div>
      </div>
    </div>
  );
};

const Section = ({ title, content }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-navy-900 rounded-lg p-6 border border-navy-800"
  >
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p className="text-gray-400">{content}</p>
  </motion.div>
);

export default ShippingPolicy;