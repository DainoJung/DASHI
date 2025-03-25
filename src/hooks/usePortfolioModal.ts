import { useState } from 'react';

export type PortfolioItemType = {
  id: string;
  title: string;
  description: string;
  category: string;
  bgColor: string;
  slug: string;
  // 상세 정보에 필요한 추가 필드
  problem?: string;
  solution?: string;
  processSteps?: {
    title: string;
    description: string;
  }[];
  images?: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
};

export function usePortfolioModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PortfolioItemType | null>(null);

  const openModal = (item: PortfolioItemType) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    // 모달이 닫힌 후 선택된 아이템 정보 초기화
    setTimeout(() => {
      setSelectedItem(null);
    }, 300);
  };

  return {
    isOpen,
    selectedItem,
    openModal,
    closeModal
  };
} 