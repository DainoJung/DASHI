'use client';

import { motion } from 'framer-motion';
import { PortfolioItemType } from '@/hooks/usePortfolioModal';
import { Quote } from 'lucide-react';

interface ProjectTestimonialProps {
  item: PortfolioItemType;
}

export function ProjectTestimonial({ item }: ProjectTestimonialProps) {
  // 후기가 없는 경우 컴포넌트 렌더링 안함
  if (!item.testimonial) return null;

  const { quote, author, role, company } = item.testimonial;

  return (
    <motion.div 
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
    >
      <h2 className="text-2xl font-bold text-dark mb-6">고객 후기</h2>
      
      <div className="bg-gray-light rounded-xl p-8 relative">
        <div className="absolute top-8 left-8 text-primary/20">
          <Quote className="w-12 h-12" />
        </div>
        
        <div className="relative">
          <blockquote className="text-lg text-dark mb-6 pt-6 pl-6">
            "{quote}"
          </blockquote>
          
          <div>
            <p className="font-bold text-dark">{author}</p>
            <p className="text-gray-mid">
              {role}{company ? ` at ${company}` : ''}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 