'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IMAGES } from '../constants/images';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  fallbackSrc = IMAGES.FALLBACK,
  fill = false,
  className = "",
  priority = false,
  sizes,
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill={fill}
      className={className}
      priority={priority}
      sizes={sizes}
      onError={handleError}
      {...props}
    />
  );
} 