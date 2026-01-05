import type { Book } from "src/types/book";

export const aggregateCounts = (books: Book[]) =>
  books.reduce(
    (acc, book) => {
      acc.total += 1;
      if (book.status === "done") acc.done += 1;
      if (book.status === "in-progress") acc.inProgress += 1;
      return acc;
    },
    { total: 0, done: 0, inProgress: 0 }
  );

