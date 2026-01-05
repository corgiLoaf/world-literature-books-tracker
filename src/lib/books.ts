import { BookStatus, type Book } from "src/types/book";

export const sampleBooks: Book[] = [
  {
    id: 1,
    title: "War and Peace",
    author: "Leo Tolstoy",
    status: BookStatus.DONE,
  },
  {
    id: 2,
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    status: BookStatus.IN_PROGRESS,
  },
  {
    id: 3,
    title: "Madame Bovary",
    author: "Gustave Flaubert",
    status: BookStatus.TO_READ,
  },
  {
    id: 4,
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    status: BookStatus.TO_READ,
  },
  {
    id: 5,
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    status: BookStatus.DONE,
  },
];
