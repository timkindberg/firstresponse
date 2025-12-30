'use client';

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ImageViewerProvider } from "@/contexts/ImageViewerContext";
import ImageViewer from "@/components/ImageViewer";
import { useImageViewer } from "@/contexts/ImageViewerContext";

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { isOpen, selectedImageIndex, allImages, closeImageViewer } = useImageViewer();

  return (
    <>
      <Navigation variant="specialist-grid" />
      <main className="min-h-screen bg-[#0F1419]">
        {children}
      </main>
      <Footer />
      
      {/* Global Image Viewer */}
      <ImageViewer
        images={allImages}
        isOpen={isOpen}
        onClose={closeImageViewer}
        initialIndex={selectedImageIndex}
      />
    </>
  );
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ImageViewerProvider>
      <LayoutContent>{children}</LayoutContent>
    </ImageViewerProvider>
  );
}

