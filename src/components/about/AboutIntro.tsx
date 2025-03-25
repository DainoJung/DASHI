'use client';

import { motion } from 'framer-motion';

interface AboutIntroProps {
  mainText: string;
  subText?: string;
}

export function AboutIntro({ mainText, subText }: AboutIntroProps) {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {mainText}
      </motion.h2>
      {subText && (
        <motion.p 
          className="text-lg text-gray-mid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subText}
        </motion.p>
      )}
    </div>
  );
} 