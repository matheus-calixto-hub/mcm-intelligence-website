'use client';

import Image from 'next/image';
import BookingFlowPhone from '@/components/product/BookingFlowPhone';
import MensagensWaConversasMock from '@/components/product/MensagensWaConversasMock';

type Visual = 'image' | 'conversas' | 'booking-flow';

type Props = {
  visual: Visual;
  image: string;
  name: string;
  priority?: boolean;
  compact?: boolean;
  className?: string;
};

/** Mídia do card de produto: mock realista ou imagem. */
export default function ProductVisual({
  visual,
  image,
  name,
  priority = false,
  compact = true,
  className = '',
}: Props) {
  if (visual === 'conversas') {
    return (
      <div className={`product-card-media-live ${className}`.trim()}>
        <MensagensWaConversasMock compact={compact} />
      </div>
    );
  }
  if (visual === 'booking-flow') {
    return (
      <div className={`product-card-media-live ${className}`.trim()}>
        <BookingFlowPhone compact={compact} />
      </div>
    );
  }
  return (
    <div className={className || 'product-card-media'}>
      <Image
        src={image}
        alt={name}
        width={1280}
        height={720}
        className="product-card-img"
        priority={priority}
      />
    </div>
  );
}
