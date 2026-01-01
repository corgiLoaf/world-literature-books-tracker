import type { Book } from "../types/book";
import { useReadingStore } from "../store/useReadingStore";
import { BookItem } from "./BookItem";

interface BookListProps {
  books: Book[];
  readBooks: Set<number>;
  onToggle: (bookId: number) => void;
  viewMode: "list" | "card";
  onChangeView: (mode: "list" | "card") => void;
}

export const BookList = ({
  books,
  readBooks,
  onToggle,
  viewMode,
  onChangeView,
}: BookListProps) => {
  const isDark = useReadingStore((state) => state.theme === "dark");

  const containerTone = isDark
    ? "bg-slate-900/80 border-slate-800"
    : "bg-white/85 border-amber-100/80";
  const dividerTone = isDark ? "divide-slate-800" : "divide-amber-100/70";
  const emptyTone = isDark
    ? "bg-slate-900/80 border-slate-800 text-amber-200"
    : "bg-white/80 border-amber-100/80 text-amber-600";

  if (books.length === 0) {
    return (
      <div
        className={`rounded-2xl shadow-lg border p-8 text-center ${emptyTone}`}
      >
        검색 결과가 없습니다
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl shadow-xl border overflow-hidden backdrop-blur ${containerTone}`}
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-amber-100/60 dark:border-slate-800">
        <div className="text-sm font-medium text-amber-800 dark:text-amber-100">
          총 {books.length}권
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onChangeView("list")}
            className={`px-3 py-1.5 text-sm rounded-full border transition ${
              viewMode === "list"
                ? "bg-amber-500 text-white border-amber-500 shadow-sm"
                : isDark
                ? "border-slate-700 text-amber-100 hover:bg-slate-800"
                : "border-amber-200 text-amber-800 hover:bg-amber-50"
            }`}
          >
            리스트
          </button>
          <button
            onClick={() => onChangeView("card")}
            className={`px-3 py-1.5 text-sm rounded-full border transition ${
              viewMode === "card"
                ? "bg-amber-500 text-white border-amber-500 shadow-sm"
                : isDark
                ? "border-slate-700 text-amber-100 hover:bg-slate-800"
                : "border-amber-200 text-amber-800 hover:bg-amber-50"
            }`}
          >
            카드
          </button>
        </div>
      </div>

      <div className="max-h-[600px] overflow-y-auto">
        <div
          className={
            viewMode === "card"
              ? "grid grid-cols-1 sm:grid-cols-2 gap-3 p-3"
              : `divide-y ${dividerTone}`
          }
        >
          {books.map((book) =>
            viewMode === "card" ? (
              <div
                key={book.id}
                className="rounded-xl border border-amber-100/70 dark:border-slate-800/70 bg-white/60 dark:bg-slate-900/60 shadow-sm"
              >
                <BookItem
                  book={book}
                  isRead={readBooks.has(book.id)}
                  onToggle={onToggle}
                  viewMode="card"
                />
              </div>
            ) : (
              <BookItem
                key={book.id}
                book={book}
                isRead={readBooks.has(book.id)}
                onToggle={onToggle}
                viewMode="list"
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};
