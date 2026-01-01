import { Search } from "lucide-react";
import { useReadingStore } from "../store/useReadingStore";
import type { FilterType } from "../types/book";

interface SearchFilterProps {
  searchQuery: string;
  filter: FilterType;
  onSearchChange: (query: string) => void;
  onFilterChange: (filter: FilterType) => void;
}

export const SearchFilter = ({
  searchQuery,
  filter,
  onSearchChange,
  onFilterChange,
}: SearchFilterProps) => {
  const isDark = useReadingStore((state) => state.theme === "dark");

  const cardTone = isDark
    ? "bg-slate-900/80 border-slate-800"
    : "bg-white/80 border-amber-100/70";
  const inputTone = isDark
    ? "border-slate-700 bg-slate-800/70 text-amber-50 placeholder:text-slate-400 focus:ring-amber-500/40"
    : "border-amber-200/80 bg-white/70 text-amber-900 placeholder:text-amber-400/70 focus:ring-amber-300/60";

  return (
    <div
      className={`rounded-2xl shadow-lg border px-5 py-4 backdrop-blur-md ${cardTone}`}
    >
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
              isDark ? "text-amber-300" : "text-amber-400"
            }`}
          />
          <input
            type="text"
            placeholder="책 제목, 저자, 번호 검색..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className={`w-full pl-10 pr-4 py-2 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 transition-all ${inputTone}`}
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onFilterChange('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === 'all'
                ? 'bg-amber-500 text-white shadow-md shadow-amber-500/30'
                : isDark
                  ? 'bg-slate-800 text-amber-100 hover:bg-slate-700'
                  : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
            }`}
          >
            전체
          </button>
          <button
            onClick={() => onFilterChange('read')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === 'read'
                ? 'bg-green-500 text-white shadow-md shadow-green-500/30'
                : isDark
                  ? 'bg-slate-800 text-green-200 hover:bg-slate-700'
                  : 'bg-green-100 text-green-700 hover:bg-green-200'
            }`}
          >
            읽음
          </button>
          <button
            onClick={() => onFilterChange('unread')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === 'unread'
                ? 'bg-gray-500 text-white shadow-md shadow-gray-500/30'
                : isDark
                  ? 'bg-slate-800 text-gray-200 hover:bg-slate-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            안읽음
          </button>
        </div>
      </div>
    </div>
  );
};
