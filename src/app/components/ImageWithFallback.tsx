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
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      priority={priority}
      sizes={sizes}
      {...props}
    />
  );
} 