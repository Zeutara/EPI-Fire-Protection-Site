'use client';

import { useState } from 'react';

const galleryColors = [
  'bg-secondary/40',
  'bg-sage/20',
  'bg-accent-light/20',
  'bg-sage-light/30',
  'bg-cream',
];

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const displayImages = images.length > 0 ? images : ['placeholder'];

  return (
    <div className="flex flex-col gap-3">
      {/* Main image */}
      <div
        className={`relative aspect-square rounded-2xl overflow-hidden ${
          galleryColors[selectedIndex % galleryColors.length]
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-8">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/60 flex items-center justify-center">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-warm-gray"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            <p className="text-warm-gray/60 text-sm font-medium">{productName}</p>
            <p className="text-warm-gray/40 text-xs mt-1">
              Image {selectedIndex + 1} of {displayImages.length}
            </p>
          </div>
        </div>
      </div>

      {/* Thumbnail strip */}
      {displayImages.length > 1 && (
        <div className="flex gap-2 overflow-x-auto hide-scrollbar">
          {displayImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all duration-200 cursor-pointer ${
                galleryColors[index % galleryColors.length]
              } ${
                index === selectedIndex
                  ? 'ring-2 ring-primary ring-offset-2'
                  : 'ring-1 ring-light-gray hover:ring-warm-gray'
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-warm-gray/40 text-[10px] font-medium">{index + 1}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
