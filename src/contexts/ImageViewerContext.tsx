'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import imageGalleryConfig from '@/data/imageGallery.json';

interface ImageData {
  id: string;
  url: string;
  title: string;
  description?: string;
  source: 'gallery' | 'service';
}

interface ImageViewerContextType {
  isOpen: boolean;
  selectedImageIndex: number;
  allImages: ImageData[];
  openImageViewer: (index: number) => void;
  closeImageViewer: () => void;
}

const ImageViewerContext = createContext<ImageViewerContextType | undefined>(undefined);

export const useImageViewer = () => {
  const context = useContext(ImageViewerContext);
  if (!context) {
    throw new Error('useImageViewer must be used within an ImageViewerProvider');
  }
  return context;
};

interface ImageViewerProviderProps {
  children: ReactNode;
}

export const ImageViewerProvider = ({ children }: ImageViewerProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Build the combined image array based on configuration
  const allImages: ImageData[] = [
    // Add gallery images if enabled
    ...(imageGalleryConfig.enabled.galleryImages 
      ? imageGalleryConfig.galleryImages.map(image => ({
          id: `gallery-${image.id}`,
          url: image.url,
          title: image.title,
          description: image.description,
          source: 'gallery' as const
        }))
      : []),
    // Add service images if enabled
    ...(imageGalleryConfig.enabled.serviceImages
      ? imageGalleryConfig.serviceImages.map(image => ({
          id: `service-${image.id}`,
          url: image.url,
          title: image.title,
          description: image.description,
          source: 'service' as const
        }))
      : []),
    // Add additional images if enabled
    ...(imageGalleryConfig.enabled.additionalImages
      ? imageGalleryConfig.additionalImages.map(image => ({
          id: `additional-${image.id}`,
          url: image.url,
          title: image.title,
          description: image.description,
          source: 'gallery' as const
        }))
      : [])
  ];

  const openImageViewer = (index: number) => {
    setSelectedImageIndex(index);
    setIsOpen(true);
  };

  const closeImageViewer = () => {
    setIsOpen(false);
  };

  return (
    <ImageViewerContext.Provider
      value={{
        isOpen,
        selectedImageIndex,
        allImages,
        openImageViewer,
        closeImageViewer
      }}
    >
      {children}
    </ImageViewerContext.Provider>
  );
};
