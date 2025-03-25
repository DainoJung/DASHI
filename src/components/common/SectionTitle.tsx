'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6 
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: 0.2 
      }
    }
  };

  return (
    <div className="text-center mb-16" ref={ref}>
      <motion.h1 
        className="text-4xl md:text-5xl font-bold text-dark mb-4"
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p 
          className="text-lg text-gray-mid"
          variants={subtitleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
} 