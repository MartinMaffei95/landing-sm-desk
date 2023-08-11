import MediaPlayerWindow from '@/app/Components/MediaPlayer/MediaPlayerWindow';
export default function Home() {
  return (
    <main className="folder-area flex min-h-screen z-10 p-4 overflow-hidden pointer-events-none">
      <MediaPlayerWindow />
    </main>
  );
}
