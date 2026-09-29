"use client";

import React, { createContext, useContext, useState } from "react";
import ProjectInquiryModal from "./ProjectInquiryModal";

interface ProjectInquiryContextType {
  openModal: (service?: string) => void;
  closeModal: () => void;
}

const ProjectInquiryContext = createContext<ProjectInquiryContextType>({
  openModal: () => {},
  closeModal: () => {},
});

export const useProjectInquiry = () => useContext(ProjectInquiryContext);

export function ProjectInquiryProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("تنفيذ متكامل للمنشآت الصناعية");

  const openModal = (service?: string) => {
    if (service) setSelectedService(service);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ProjectInquiryContext.Provider value={{ openModal, closeModal }}>
      {children}
      <ProjectInquiryModal
        isOpen={isOpen}
        onClose={closeModal}
        initialService={selectedService}
        locale="ar"
      />
    </ProjectInquiryContext.Provider>
  );
}
