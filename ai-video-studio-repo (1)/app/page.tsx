export default function HomePage() {
  return (
    <main className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">🎬 AI Video Studio Pro</h1>
      <p className="text-lg">Create videos, speech, and more with AI</p>
      <div className="mt-6 flex justify-center gap-4">
        <a href="/studio" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Go to Studio</a>
        <a href="/gallery" className="px-4 py-2 bg-green-600 text-white rounded-lg">Gallery</a>
        <a href="/srs" className="px-4 py-2 bg-gray-800 text-white rounded-lg">SRS Docs</a>
      </div>
    </main>
  );
}
