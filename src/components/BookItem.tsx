import { useReadingStore } from "../store/useReadingStore";
import type { Book } from "../types/book";

interface BookItemProps {
  book: Book;
  isRead: boolean;
  onToggle: (bookId: number) => void;
  viewMode: "list" | "card";
}

export const BookItem = ({
  book,
  isRead,
  onToggle,
  viewMode,
}: BookItemProps) => {
  const isDark = useReadingStore((state) => state.theme === "dark");

  const cardBase =
    "p-4 cursor-pointer transition-all " +
    (isDark ? "hover:bg-slate-800/70" : "hover:bg-amber-50");
  const cardTone = isRead
    ? isDark
      ? "bg-green-900/40"
      : "bg-green-50"
    : "bg-white/0";

  const titleTone = isDark ? "text-slate-100" : "text-slate-900";
  const authorTone = isDark ? "text-slate-300" : "text-slate-600";
  const metaTone = isDark ? "text-slate-400" : "text-slate-500";

  const handleToggle = () => onToggle(book.id);
  const handleCheckbox = () => {
    onToggle(book.id);
  };

  if (viewMode === "list") {
    return (
      <div
        onClick={handleToggle}
        className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition ${
          isDark ? "hover:bg-slate-800/70" : "hover:bg-amber-50"
        } ${isRead ? (isDark ? "bg-slate-900/40" : "bg-green-50/60") : ""}`}
      >
        <span className="text-sm font-bold text-amber-600 min-w-10">
          {book.id}
        </span>
        <div className="flex-1 min-w-0 space-y-1">
          <p className={`text-sm font-medium ${titleTone}`}>{book.title}</p>
          <p className={`text-xs ${authorTone}`}>{book.author}</p>
        </div>
        <input
          type="checkbox"
          checked={isRead}
          onChange={handleCheckbox}
          onClick={(e) => e.stopPropagation()}
          className="h-4 w-4 rounded-[4px] border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 accent-amber-500 shrink-0"
        />
      </div>
    );
  }

  return (
    <div onClick={handleToggle} className={`${cardBase} ${cardTone}`}>
      <div className="flex items-center gap-3">
        <div className="flex-1 space-y-3">
          <div className="flex items-center justify-between">
            <span className={`text-xs font-semibold ${metaTone}`}>
              세계문학전집 {book.id}
            </span>
          </div>
          <div className="h-1 rounded-full bg-linear-to-r from-amber-500 to-orange-500 opacity-80" />

          <div className="flex items-center justify-between gap-3">
            <p className={`text-sm font-medium ${titleTone}`}>{book.title}</p>
            <p className={`text-xs ${authorTone}`}>{book.author}</p>
          </div>
        </div>

        <input
          type="checkbox"
          checked={isRead}
          onChange={handleCheckbox}
          onClick={(e) => e.stopPropagation()}
          className="h-4 w-4 rounded-[4px] border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 accent-amber-500 shrink-0"
        />
      </div>
    </div>
  );
};
