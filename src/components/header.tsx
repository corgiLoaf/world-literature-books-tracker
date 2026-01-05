import { Progress } from "src/components/progress";
import Image from "next/image";
import { Search, Moon } from "lucide-react";

type HeaderProps = {
  readCount: number;
  inProgressCount: number;
  totalCount: number;
};

const clampPercent = (value: number) => Math.max(0, Math.min(100, value));

export default function Header({
  readCount,
  inProgressCount,
  totalCount,
}: HeaderProps) {
  const completionRate = totalCount
    ? clampPercent(Math.round((readCount / totalCount) * 100))
    : 0;

  const stats = [
    { label: "읽은 책", value: readCount },
    { label: "읽고 있는 책", value: inProgressCount },
    { label: "완독률", value: `${completionRate}%` },
  ];

  return (
    <header className="sticky top-[env(safe-area-inset-top)] z-20 space-y-9 rounded-b-2xl bg-(--surface-card) p-5 shadow-[0_4px_10px_3px_rgba(0,0,0,0.15)] backdrop-blur">
      {/* Header Top */}
      <div className="flex flex-row gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center">
          <div style={{ width: 120, height: 24, position: "relative" }}>
            <Image
              src="/logo_white.svg"
              alt="세문전 트래커"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-end">
          <div className="flex items-center gap-5">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border-(--border-muted) bg-transparent text-xl shadow-[0_6px_18px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 hover:border-(--border-strong) hover:shadow-[0_10px_30px_rgba(0,0,0,0.16)] sm:h-10 sm:w-10"
              aria-label="검색"
            >
              <Search className="h-6 w-6 text-(--text-primary)" />
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border-(--border-muted) bg-transparent text-xl shadow-[0_6px_18px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 hover:border-(--border-strong) hover:shadow-[0_10px_30px_rgba(0,0,0,0.16)] sm:h-10 sm:w-10"
              aria-label="다크/라이트"
            >
              <Moon className="h-6 w-6 text-(--text-primary)" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-row w-full justify-around">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col bg-transparent px-4 py-3 items-center justify-center"
          >
            <div className="text-[24px] leading-[28px] text-(--text-primary) font-display font-normal">
              {stat.value}
            </div>
            <div className="text-[12px] leading-[16px] font-bold text-(--text-secondary)">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <Progress
        readCount={readCount}
        inProgressCount={inProgressCount}
        totalCount={totalCount}
      />
    </header>
  );
}
