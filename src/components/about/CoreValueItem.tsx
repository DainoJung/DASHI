'use client';

import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface CoreValueItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function CoreValueItem({ icon: Icon, title, description }: CoreValueItemProps) {
  return (
    <motion.div 
      className="flex flex-col items-center text-center p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-2xl font-bold text-dark mb-4">{title}</h3>
      <p className="text-gray-mid">{description}</p>
    </motion.div>
  );
} 