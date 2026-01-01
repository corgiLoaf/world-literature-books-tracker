import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { FilterType } from "../types/book";

interface ReadingStore {
  readBooks: Set<number>;
  searchQuery: string;
  filter: FilterType;
  theme: "light" | "dark";
  toggleBook: (bookId: number) => void;
  setSearchQuery: (query: string) => void;
  setFilter: (filter: FilterType) => void;
  toggleTheme: () => void;
  clearAll: () => void;
}

export const useReadingStore = create<ReadingStore>()(
  persist(
    (set) => ({
      readBooks: new Set<number>(),
      searchQuery: "",
      filter: "all",
      theme: "light",

      toggleBook: (bookId) =>
        set((state) => {
          const newReadBooks = new Set(state.readBooks);
          if (newReadBooks.has(bookId)) {
            newReadBooks.delete(bookId);
          } else {
            newReadBooks.add(bookId);
          }
          return { readBooks: newReadBooks };
        }),

      setSearchQuery: (query) => set({ searchQuery: query }),

      setFilter: (filter) => set({ filter }),

      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),

      clearAll: () => set({ readBooks: new Set() }),
    }),
    {
      name: "reading-tracker-storage",
      // Set를 배열로 변환하여 저장
      partialize: (state) => ({
        readBooks: Array.from(state.readBooks),
        theme: state.theme,
      }),
      // 불러올 때 다시 Set으로 변환
      onRehydrateStorage: () => (state) => {
        if (state && Array.isArray(state.readBooks)) {
          state.readBooks = new Set<number>(state.readBooks);
        }
      },
    }
  )
);
