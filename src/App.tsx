import { useEffect, useMemo, useState } from "react";
import { BookOpen, Moon, Sun } from "lucide-react";
import { Toaster } from "react-hot-toast";
import { useReadingStore } from "./store/useReadingStore";
import { BOOK_LIST } from "./data/books";
import { StatsDashboard } from "./components/StatsDashboard";
import { SearchFilter } from "./components/SearchFilter";
import { BookList } from "./components/BookList";

function App() {
  const {
    readBooks,
    searchQuery,
    filter,
    theme,
    toggleBook,
    setSearchQuery,
    setFilter,
    toggleTheme,
  } = useReadingStore();

  const isDark = theme === "dark";
  const [viewMode, setViewMode] = useState<"list" | "card">("list");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
  }, [theme]);

  // 필터링된 책 목록
  const filteredBooks = useMemo(() => {
    return BOOK_LIST.filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.id.toString().includes(searchQuery);

      const matchesFilter =
        filter === "all"
          ? true
          : filter === "read"
          ? readBooks.has(book.id)
          : !readBooks.has(book.id);

      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, filter, readBooks]);

  // 통계 계산
  const totalBooks = BOOK_LIST.length;
  const readCount = readBooks.size;
  const percentage = Math.round((readCount / totalBooks) * 100);

  const pageTone = isDark
    ? "bg-gradient-to-br from-slate-900 to-slate-950 text-slate-100"
    : "bg-gradient-to-br from-amber-50 to-orange-50 text-slate-900";
  const headerTone = isDark
    ? "border-white/10 bg-slate-900/70 text-slate-100"
    : "border-white/50 bg-white/70 text-slate-900";

  return (
    <div className={`min-h-screen ${pageTone}`}>
      <Toaster position="top-center" />

      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-10 space-y-6">
        {/* 헤더 */}
        <div className="sticky top-0 z-10">
          <div
            className={`flex items-center justify-between rounded-2xl backdrop-blur-xl px-5 py-4 shadow-lg ${headerTone}`}
          >
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-linear-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-inner shadow-amber-500/30">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold tracking-tight">
                  세계문학 전집
                </h1>
                <p
                  className={`text-sm ${
                    isDark ? "text-amber-200/80" : "text-amber-700"
                  }`}
                >
                  나의 독서 여정을 기록하세요
                </p>
              </div>
            </div>

            <button
              onClick={toggleTheme}
              className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md transition-all border ${
                isDark
                  ? "border-slate-700 bg-slate-800/70 text-amber-100"
                  : "border-amber-200/70 bg-white/70 text-amber-900"
              }`}
            >
              {isDark ? (
                <>
                  <Sun className="w-4 h-4" />
                  라이트 모드
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4" />
                  다크 모드
                </>
              )}
              <span
                className={`absolute inset-0 rounded-full pointer-events-none ${
                  isDark ? "bg-amber-500/10" : "bg-amber-100/30"
                }`}
              />
            </button>
          </div>
        </div>

        {/* 통계 대시보드 */}
        <StatsDashboard
          readCount={readCount}
          totalBooks={totalBooks}
          percentage={percentage}
        />

        {/* 검색 및 필터 */}
        <SearchFilter
          searchQuery={searchQuery}
          filter={filter}
          onSearchChange={setSearchQuery}
          onFilterChange={setFilter}
        />

        {/* 책 리스트 */}
        <BookList
          books={filteredBooks}
          readBooks={readBooks}
          onToggle={toggleBook}
          viewMode={viewMode}
          onChangeView={setViewMode}
        />

        {/* 푸터 정보 */}
        <div className="mt-6 text-center text-sm text-amber-600">
          <p>클릭하여 읽은 책을 표시하세요. 데이터는 자동으로 저장됩니다.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
