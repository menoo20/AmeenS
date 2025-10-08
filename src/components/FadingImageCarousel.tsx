'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface FadingImageCarouselProps {
  images: string[];
  alt: string;
  interval?: number; // Time in milliseconds between transitions (default: 2000)
  className?: string;
}

/**
 * Optimized image carousel with lazy loading and performance enhancements
 * - Loads only the first image immediately (priority)
 * - Preloads the next image just before transition
 * - Lazy loads remaining images as needed
 * - Maintains high quality without performance loss
 */
export default function FadingImageCarousel({ 
  images, 
  alt, 
  interval = 2000,
  className = '' 
}: FadingImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0])); // Start with first image

  useEffect(() => {
    // If there's only one image, don't set up the interval
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        
        // Preload next image before it becomes visible
        const upcomingIndex = (nextIndex + 1) % images.length;
        setLoadedImages(prev => {
          const newSet = new Set(prev);
          newSet.add(nextIndex);
          newSet.add(upcomingIndex);
          return newSet;
        });
        
        return nextIndex;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  // Preload the second image after component mounts
  useEffect(() => {
    if (images.length > 1) {
      const timer = setTimeout(() => {
        setLoadedImages(prev => {
          const newSet = new Set(prev);
          newSet.add(1);
          return newSet;
        });
      }, 100); // Small delay to prioritize first render
      return () => clearTimeout(timer);
    }
  }, [images.length]);

  // If no images provided, show a placeholder
  if (!images || images.length === 0) {
    return (
      <div className={`w-full h-full bg-gray-800 flex items-center justify-center ${className}`}>
        <span className="text-gray-500">No image available</span>
      </div>
    );
  }

  // If only one image, display it with priority loading
  if (images.length === 1) {
    return (
      <div className={`relative w-full h-full ${className}`}>
        <Image
          src={images[0]}
          alt={alt}
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    );
  }

  // Multiple images - show with fading effect and smart loading
  return (
    <div className={`relative w-full h-full ${className}`}>
      {images.map((image, index) => {
        // Only render images that should be loaded
        const shouldLoad = loadedImages.has(index);
        const isVisible = index === currentIndex;
        const isAdjacentToVisible = 
          index === (currentIndex + 1) % images.length || 
          index === (currentIndex - 1 + images.length) % images.length;

        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              visibility: (isVisible || isAdjacentToVisible) ? 'visible' : 'hidden' 
            }}
          >
            {shouldLoad && (
              <Image
                src={image}
                alt={`${alt} - Image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0} // Only first image gets priority
                loading={index === 0 ? 'eager' : 'lazy'}
                quality={85} // High quality, optimized size
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
