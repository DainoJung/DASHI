'use client';

import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface SuccessMessageProps {
  title: string;
  message: string;
}

export function SuccessMessage({ title, message }: SuccessMessageProps) {
  return (
    <motion.div
      className="text-center py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
        <CheckCircle className="w-8 h-8" />
      </div>
      <h3 className="text-2xl font-bold text-dark mb-4">{title}</h3>
      <p className="text-gray-mid max-w-md mx-auto">{message}</p>
    </motion.div>
  );
} 