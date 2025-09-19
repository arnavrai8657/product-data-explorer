import ProductCard from "../../ui/components/ProductCard";

type Product = {
  id: string;
  title: string;
  imageUrl: string;
  price?: string;
  rating?: number;
};

async function getProducts(categoryId: string): Promise<Product[]> {
  // Mock data for development
  return [
    {
      id: "1",
      title: "The Great Gatsby",
      imageUrl: "/mock-book-1.jpg",
      price: "$10.99",
      rating: 4.5,
    },
    {
      id: "2",
      title: "A Brief History of Time",
      imageUrl: "/mock-book-2.jpg",
      price: "$12.99",
      rating: 4.7,
    },
    {
      id: "3",
      title: "Sapiens",
      imageUrl: "/mock-book-3.jpg",
      price: "$15.99",
      rating: 4.8,
    },
  ];
}

export default async function CategoryPage({ params }: { params: { categoryId: string } }) {
  const products = await getProducts(params.categoryId);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}