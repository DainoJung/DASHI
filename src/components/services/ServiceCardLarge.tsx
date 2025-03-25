'use client';

import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardLargeProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export function ServiceCardLarge({
  icon: Icon,
  title,
  description,
  features,
}: ServiceCardLargeProps) {
  return (
    <motion.div 
      className="p-8 rounded-2xl bg-white border border-gray-line"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
        borderColor: "rgba(52, 73, 255, 0.2)" 
      }}
    >
      <div className="mb-6">
        <motion.div 
          className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Icon className="w-8 h-8" />
        </motion.div>
        <h3 className="text-2xl font-bold text-dark mb-3">{title}</h3>
        <p className="text-gray-mid">{description}</p>
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <motion.li 
            key={index} 
            className="flex items-center text-dark"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <svg
              className="w-5 h-5 text-primary mr-3 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
} 