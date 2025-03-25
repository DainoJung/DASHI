'use client';

import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialHighlightProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export function TestimonialHighlight({
  quote,
  author,
  role,
  company,
}: TestimonialHighlightProps) {
  return (
    <motion.div 
      className="bg-gray-light rounded-2xl p-8 md:p-12 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute top-8 left-8 text-primary/20">
        <Quote className="w-12 h-12" />
      </div>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xl md:text-2xl text-dark mb-8 relative z-10">
          "{quote}"
        </p>
        <div>
          <p className="font-bold text-dark">{author}</p>
          <p className="text-gray-mid">
            {role} at {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
} 