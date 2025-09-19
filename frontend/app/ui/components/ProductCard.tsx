'use client';

import Link from 'next/link';
import Image from 'next/image';

type ProductCardProps = {
  product: {
    id: string;
    title: string;
    imageUrl: string;
    price?: string;
    rating?: number;
  };
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
      <Image
        src={product.imageUrl}
        alt={product.title}
        width={300}
        height={300}
        className="object-cover w-full h-72"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        {product.price && <p className="text-gray-700 mb-1">Price: {product.price}</p>}
        {product.rating !== undefined && <p className="text-yellow-500">Rating: {product.rating} / 5</p>}
      </div>
    </Link>
  );
}
