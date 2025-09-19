import Image from "next/image";

type ProductDetail = {
  id: string;
  title: string;
  imageUrl: string;
  price?: string;
  rating?: number;
  description?: string;
};

async function getProduct(productId: string): Promise<ProductDetail> {
  // Mock data for development
  return {
    id: productId,
    title: "The Great Gatsby",
    imageUrl: "/mock-book-1.jpg",
    price: "$10.99",
    rating: 4.5,
    description: "A classic novel by F. Scott Fitzgerald about the American dream.",
  };
}

export default async function ProductDetailPage({ params }: { params: { productId: string } }) {
  const product = await getProduct(params.productId);

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <Image src={product.imageUrl} alt={product.title} width={400} height={400} className="mb-6 rounded" />
      <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
      {product.price && <p className="text-xl text-blue-600 mb-2">Price: {product.price}</p>}
      {product.rating !== undefined && <p className="text-yellow-500 mb-2">Rating: {product.rating} / 5</p>}
      {product.description && <p className="mb-4">{product.description}</p>}
    </main>
  );
}