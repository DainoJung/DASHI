'use client';

import { ReactNode, createContext, useContext } from 'react';
import { useProjectInquiryModal } from '@/hooks/useProjectInquiryModal';
import { ProjectInquiryModal } from './ProjectInquiryModal';

interface ProjectInquiryContextType {
  openProjectInquiry: () => void;
}

const ProjectInquiryContext = createContext<ProjectInquiryContextType | undefined>(undefined);

export function useProjectInquiry() {
  const context = useContext(ProjectInquiryContext);
  if (!context) {
    throw new Error('useProjectInquiry must be used within a ProjectInquiryProvider');
  }
  return context;
}

export function ProjectInquiryProvider({ children }: { children: ReactNode }) {
  const { isOpen, openModal, closeModal } = useProjectInquiryModal();

  return (
    <ProjectInquiryContext.Provider value={{ openProjectInquiry: openModal }}>
      {children}
      <ProjectInquiryModal isOpen={isOpen} onClose={closeModal} />
    </ProjectInquiryContext.Provider>
  );
} 