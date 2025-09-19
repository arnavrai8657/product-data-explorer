// src/app/page.tsx
import Link from 'next/link';
import Image from 'next/image';

type Category = {
  id: string;
  name: string;
};

// Fetch categories from backend API
async function getCategories(): Promise<Category[]> {
  // Mock data for development
  return [
    { id: "fiction", name: "Fiction" },
    { id: "science", name: "Science" },
    { id: "history", name: "History" },
  ];
}

export default async function HomePage() {
  const categories = await getCategories();

  return (
    <main className="font-sans min-h-screen p-8 pb-20 grid grid-rows-[20px_1fr_20px] gap-16">
      <header className="row-start-1 flex justify-center">
        <Image src="/your-logo.svg" alt="Product Data Explorer logo" width={180} height={38} priority />
      </header>

      <section className="row-start-2 flex flex-col items-center sm:items-start gap-8">
        <h1 className="text-3xl font-bold">Browse Categories</h1>
        <ul className="list-decimal list-inside space-y-4 text-lg">
          {categories.map(({ id, name }) => (
            <li key={id}>
              <Link href={`/category/${id}`} className="text-blue-600 hover:underline">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <footer className="row-start-3 flex justify-center text-sm text-gray-500">
        Powered by Product Data Explorer
      </footer>
    </main>
  );
}
