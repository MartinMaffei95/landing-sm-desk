export interface FlatListItem {
  key: string;
  parentId: any;
  title: string;
  url: string;
  attachement: { icon: { mediaItemUrl: string } };
  children: FlatListItem[];
}
