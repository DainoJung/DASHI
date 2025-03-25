'use client';

import { motion } from 'framer-motion';
import { PortfolioItemType } from '@/hooks/usePortfolioModal';

interface PortfolioDetailHeaderProps {
  item: PortfolioItemType;
}

export function PortfolioDetailHeader({ item }: PortfolioDetailHeaderProps) {
  return (
    <motion.div 
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
          {item.category}
        </span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">
        {item.title}
      </h1>
      <p className="text-lg text-gray-mid">
        {item.description}
      </p>
    </motion.div>
  );
} 