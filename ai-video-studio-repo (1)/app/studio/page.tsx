export default function StudioPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-4">🎥 Studio (Mock Mode)</h1>
      <p className="mb-6">Generate Video, Image-to-Video, Story-to-Video, Speech Synthesis (demo).</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-white shadow rounded-xl">🎬 Video Generator (Mock)</div>
        <div className="p-4 bg-white shadow rounded-xl">🖼️ Image → Video</div>
        <div className="p-4 bg-white shadow rounded-xl">📖 Story → Video</div>
        <div className="p-4 bg-white shadow rounded-xl">🎤 Speech Generator</div>
      </div>
    </main>
  );
}
