'use client';

import { motion } from 'framer-motion';
import { PrimaryButton } from '../common/buttons/PrimaryButton';

export function PortfolioCTA() {
  return (
    <motion.div 
      className="text-center bg-gray-light rounded-2xl p-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-dark mb-4">
        나만의 프로젝트를 시작하시겠습니까?
      </h2>
      <p className="text-gray-mid mb-8">
        DASHI가 고객님의 비전을 현실로 만들어드립니다
      </p>
      <PrimaryButton href="/project-inquiry" size="lg">
        프로젝트 문의하기
      </PrimaryButton>
    </motion.div>
  );
} 