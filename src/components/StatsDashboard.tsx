import { useReadingStore } from "../store/useReadingStore";

interface StatsDashboardProps {
  readCount: number;
  totalBooks: number;
  percentage: number;
}

export const StatsDashboard = ({
  readCount,
  totalBooks,
  percentage,
}: StatsDashboardProps) => {
  const isDark = useReadingStore((state) => state.theme === "dark");

  const cardTone = isDark
    ? "bg-slate-900/85 border-slate-800 text-amber-100"
    : "bg-white/85 border-amber-100/80 text-amber-900";
  const subText = isDark ? "text-amber-200/80" : "text-amber-600";
  const progressBg = isDark ? "bg-slate-800" : "bg-amber-100";

  return (
    <div
      className={`rounded-2xl shadow-xl p-6 border backdrop-blur ${cardTone}`}
    >
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center">
          <div className="text-3xl font-bold">{readCount}</div>
          <div className={`text-sm ${subText}`}>읽은 책</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">{percentage}%</div>
          <div className={`text-sm ${subText}`}>완독률</div>
        </div>
      </div>

      {/* 프로그레스 바 */}
      <div className="mb-2">
        <div className="flex justify-between text-sm text-amber-700 mb-1">
          <span>
            {readCount} / {totalBooks} 권
          </span>
        </div>
        <div
          className={`w-full ${progressBg} rounded-full h-3 overflow-hidden`}
        >
          <div
            className="bg-gradient-to-r from-amber-500 to-orange-500 h-full rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};
