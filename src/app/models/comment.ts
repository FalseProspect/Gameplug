export interface Comment{
  parentId: string;
  id: string;
  message: string;
  author: string;
  children: Comment[];
}