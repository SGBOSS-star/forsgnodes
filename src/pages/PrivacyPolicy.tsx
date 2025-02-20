import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-400">
            How we protect and handle your data
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <Section
            icon={<Lock className="w-6 h-6 text-purple-400" />}
            title="Data Collection"
            content="We collect only essential information needed to provide our services, including name, email, billing information, and service usage data. All collected data is encrypted and stored securely."
          />

          <Section
            icon={<Database className="w-6 h-6 text-purple-400" />}
            title="Data Storage"
            content="Your data is stored on secure servers with industry-standard encryption. We implement multiple layers of security to protect against unauthorized access."
          />

          <Section
            icon={<Eye className="w-6 h-6 text-purple-400" />}
            title="Data Usage"
            content="We use your data solely for providing and improving our services. We never sell your personal information to third parties."
          />

          <Section
            title="Cookie Policy"
            content="We use essential cookies to maintain your session and preferences. Analytics cookies help us understand how you use our services."
          />

          <Section
            title="Data Rights"
            content="You have the right to access, modify, or delete your personal data. Contact our support team for any data-related requests."
          />

          <Section
            title="Security Measures"
            content="We employ industry-standard security measures including encryption, firewalls, and regular security audits to protect your data."
          />

          <Section
            title="Third-Party Services"
            content="We may use trusted third-party services for payment processing and analytics. These services are bound by strict data protection agreements."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 p-6 bg-navy-900 rounded-lg border border-navy-800"
        >
          <p className="text-gray-400 text-sm">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

const Section = ({ icon, title, content }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-navy-900 rounded-lg p-6 border border-navy-800"
  >
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 mt-1">
        {icon || <Shield className="w-5 h-5 text-purple-400" />}
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-400">{content}</p>
      </div>
    </div>
  </motion.div>
);

export default PrivacyPolicy;