'use client';

import { PrimaryButton } from '../common/buttons/PrimaryButton';
import { motion } from 'framer-motion';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E1E1E] leading-tight mb-6"
            variants={itemVariants}
          >
            디자인으로 브랜드를 완성합니다
          </motion.h1>
          <motion.p 
            className="text-xl text-[#A0A0A0] mb-8"
            variants={itemVariants}
          >
            웹 기반 서비스를 위한 UI/UX 디자인 전문 에이전시 – 필요시 개발까지 함께합니다.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <PrimaryButton size="lg" href="/portfolio">
              포트폴리오 보기
            </PrimaryButton>
            <PrimaryButton size="lg" variant="outline" href="/project-inquiry">
              프로젝트 문의하기
            </PrimaryButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 