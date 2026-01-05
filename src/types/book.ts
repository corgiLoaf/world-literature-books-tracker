export const BookStatus = {
  TO_READ: "to-read",
  IN_PROGRESS: "in-progress",
  DONE: "done",
} as const;

export type BookStatus = (typeof BookStatus)[keyof typeof BookStatus];

export type Book = {
  id: number;
  title: string;
  author: string;
  status: BookStatus;
};
