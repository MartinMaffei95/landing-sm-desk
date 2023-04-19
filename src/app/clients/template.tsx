import Folder from '@/app/Components/Folder/Folder';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main className="folder-area flex min-h-screen relative z-20 p-4">
      <Folder folderName="Clients">{children}</Folder>
    </main>
  );
}
