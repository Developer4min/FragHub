export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">
        FragHub
      </h1>

      <p className="mt-4 text-xl text-gray-400">
        Discover fragrances. Share reviews. Find your signature scent.
      </p>

      <button className="mt-8 rounded-full bg-white px-8 py-3 text-black font-semibold">
        Explore Fragrances
      </button>
    </main>
  );
}