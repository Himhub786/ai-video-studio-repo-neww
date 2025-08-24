export default function GalleryPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-4">🖼️ Generated Gallery (Demo)</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-200 rounded">Video Clip 1 (mock)</div>
        <div className="p-4 bg-gray-200 rounded">Video Clip 2 (mock)</div>
        <div className="p-4 bg-gray-200 rounded">Video Clip 3 (mock)</div>
      </div>
    </main>
  );
}
