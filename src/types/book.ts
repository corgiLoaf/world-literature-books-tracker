export interface Book {
  id: number;
  title: string;
  author: string;
  color: string;
}

export type FilterType = "all" | "read" | "unread";
