import Header from "src/components/header";
import { sampleBooks } from "src/lib/books";
import { aggregateCounts } from "src/utils/book-utils";

export default function Home() {
  const { total, done, inProgress } = aggregateCounts(sampleBooks);

  return (
    <div className="min-h-screen bg-(--surface-page) text-(--text-primary) transition-colors">
      <div className="flex w-full flex-col gap-6 pb-10 sm:gap-8">
        <Header
          readCount={done}
          inProgressCount={inProgress}
          totalCount={total}
        />

        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
          <section className="space-y-4 rounded-3xl border border-dashed border-(--border-muted) bg-(--surface-card) p-5 shadow-sm sm:p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-base font-semibold text-(--text-primary) sm:text-lg">
                책 목록
              </h2>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
