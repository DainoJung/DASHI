'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioItemType } from '@/hooks/usePortfolioModal';
import { X } from 'lucide-react';
import { PortfolioDetailContent } from './PortfolioDetailContent';

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: PortfolioItemType | null;
}

export function PortfolioModal({ isOpen, onClose, item }: PortfolioModalProps) {
  // ESC 키를 누르면 모달 닫기
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEscKey);
      // 스크롤 잠금
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEscKey);
      // 스크롤 잠금 해제
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && item && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            className="absolute inset-0 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <motion.div 
            className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', bounce: 0.2 }}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white text-dark transition-colors"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Content */}
            <PortfolioDetailContent item={item} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
} 