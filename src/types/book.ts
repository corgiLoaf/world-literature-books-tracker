export interface Book {
  id: number;
  title: string;
  author: string;
}

export type FilterType = "all" | "read" | "unread";
