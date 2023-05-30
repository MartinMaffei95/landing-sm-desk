import { FlatListItem } from '@/interfaces';

interface menuItemFromAPI {
  nodes: menuItem[];
}

interface menuItem {
  key: string;
  parentId: string | null | number;
  title: string;
  url: string;
}

export const flatListToHierarchical = (
  data: menuItem[] = [],
  { idKey = 'key', parentKey = 'parentId', childrenKey = 'children' }: any = {}
): FlatListItem[] => {
  if (!data) return [];
  const tree: Array<any> = [];
  const childrenOf: any = {};
  data.forEach((item: menuItem) => {
    const newItem: any = { ...item };
    const { [idKey]: id, [parentKey]: parentId = 0 } = newItem;
    childrenOf[id] = childrenOf[id] || [];
    newItem[childrenKey] = childrenOf[id];
    parentId
      ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
      : tree.push(newItem);
  });
  return tree;
};

export const getSlug = (url: string): { pathname: string; slug: string } => {
  if (url.endsWith('/')) {
    url = url.slice(0, -1);
  }
  const parts = url.split('/');
  const slug = parts.at(-1);
  const pathname = parts.at(-2);
  if (slug && pathname) return { pathname, slug };
  return { pathname: '/', slug: '/' };
};
