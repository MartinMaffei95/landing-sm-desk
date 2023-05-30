import Folder from '@/app/Components/Folder/Folder';
import { getMenu } from '@/app/services/get-menu.service';
import { flatListToHierarchical } from '@/app/utilities/create-folder-structure';
import AsideMenu from '@/app/Components/Folder/AsideMenu';

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
  const menuNodes = data?.data?.menuItems?.nodes || null;
  // console.log('funciton >>>', flatListToHierarchical(menuNodes));
  return (
    <main className="folder-area flex min-h-screen z-20 p-4 overflow-hidden pointer-events-none">
      <Folder posts={flatListToHierarchical(menuNodes)} folderName="Clients">
        {children}
      </Folder>
    </main>
  );
}
