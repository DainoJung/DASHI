'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function MiniCaseStudySection() {
  return (
    <section className="py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-dark mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            성공 사례
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-mid max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            DASHI의 디자인이 가져온 실질적인 변화를 확인하세요
          </motion.p>
        </div>
        
        <motion.div 
          className="flex flex-col lg:flex-row rounded-2xl overflow-hidden bg-white shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* 이미지 영역 */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <div className="aspect-[16/9] bg-primary rounded-tl-xl rounded-tr-xl lg:rounded-tr-none lg:rounded-bl-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
                  🖼️ 케이스 스터디 이미지
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="px-2 py-1 text-xs bg-primary/90 rounded">비포 & 애프터</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* 텍스트 영역 */}
          <div className="lg:w-1/2 p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-dark mb-4">이커머스 전환율 40% 향상</h3>
            <p className="text-gray-mid mb-6">
              사용자 중심의 UX 개선과 직관적인 UI 디자인으로 모바일 쇼핑 경험을 재설계했습니다. 
              결과적으로 전환율이 40% 향상되고 사용자 이탈률이 25% 감소했습니다.
            </p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-start">
                <div className="text-primary mr-2">✓</div>
                <div>UX 패턴 분석 및 사용자 여정 최적화</div>
              </li>
              <li className="flex items-start">
                <div className="text-primary mr-2">✓</div>
                <div>모바일 퍼스트 디자인 적용</div>
              </li>
              <li className="flex items-start">
                <div className="text-primary mr-2">✓</div>
                <div>결제 프로세스 간소화</div>
              </li>
            </ul>
            <Link 
              href="/portfolio/ecommerce-app"
              className="inline-flex items-center text-primary font-medium"
            >
              자세히 보기 <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 