import React from 'react';
import { motion } from 'framer-motion';
import { XCircle } from 'lucide-react';

const CancellationPolicy = () => {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <XCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Cancellation & Refund Policy</h1>
          <p className="text-gray-400">
            Understanding our cancellation and refund terms
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <Section
            title="Cancellation Policy"
            content="Customers are allowed to cancel their services at any time. However, please note that cancellations are processed with 0% refund of the current billing period."
          />

          <Section
            title="Refund Policy"
            content="We maintain a strict no-refund policy for all our services. Once a payment is processed, no refunds can be issued under any circumstances."
          />

          <Section
            title="Service Termination"
            content="Upon cancellation, your service will remain active until the end of your current billing period. After this period, all data will be permanently deleted from our servers."
          />

          <Section
            title="Data Backup"
            content="We strongly recommend backing up all your data before cancelling your service, as we cannot recover any data once the service is terminated."
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

export default CancellationPolicy;