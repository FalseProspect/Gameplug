export interface UserComment{
  parentSection?: string;
  parentComment?: string;
  id?: any;
  message: string;
  author?: string;
  children?: any;
}