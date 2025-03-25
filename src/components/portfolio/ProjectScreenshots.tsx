'use client';

import { motion } from 'framer-motion';
import { PortfolioItemType } from '@/hooks/usePortfolioModal';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectScreenshotsProps {
  item: PortfolioItemType;
}

export function ProjectScreenshots({ item }: ProjectScreenshotsProps) {
  // 기본 이미지 (실제 구현 시 실제 이미지로 대체)
  const defaultImages = [
    { placeholder: item.bgColor },
    { placeholder: 'bg-[#2196F3]' },
    { placeholder: 'bg-[#4CAF50]' }
  ];

  const images = item.images || defaultImages.map(img => img.placeholder);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <motion.div 
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <h2 className="text-2xl font-bold text-dark mb-6">프로젝트 이미지</h2>
      
      <div className="relative rounded-xl overflow-hidden">
        {/* 이미지 슬라이더 (실제 구현 시 이미지 URL을 사용) */}
        <div className="aspect-video relative">
          <div className={`w-full h-full ${typeof images[currentIndex] === 'string' && images[currentIndex].startsWith('bg-') ? images[currentIndex] : 'bg-primary'}`}>
            <div className="absolute inset-0 flex items-center justify-center text-white text-xl">
              <span>프로젝트 이미지 {currentIndex + 1}</span>
            </div>
          </div>
        </div>
        
        {/* 좌우 이동 버튼 */}
        <button 
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center text-dark hover:bg-white transition-colors"
          aria-label="이전 이미지"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button 
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center text-dark hover:bg-white transition-colors"
          aria-label="다음 이미지"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        {/* 인디케이터 */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-white/50'}`}
              aria-label={`이미지 ${index + 1}로 이동`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
} 