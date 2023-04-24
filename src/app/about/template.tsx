import Folder from '@/app/Components/Folder/Folder';
import { getMenu } from '@/app/services/get-menu.service';
import { flatListToHierarchical } from '@/app/utilities/create-folder-structure';

export default async function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  // Getting  menu data
  // const {
  //   data: {
  //     menuItems: { nodes: menuNodes },
  //   },
  // } = await getMenu();
  const data = await getMenu();
  const menuNodes = data?.menuItems?.nodes?.menuNodes || null;
  return (
    <main className="folder-area flex min-h-screen relative z-20 p-4">
      <Folder posts={flatListToHierarchical(menuNodes)} folderName="Nosotros">
        {children}
      </Folder>
    </main>
  );
}
