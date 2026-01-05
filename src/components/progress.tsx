type ProgressProps = {
  readCount: number;
  inProgressCount: number;
  totalCount: number;
};

const clampPercent = (value: number) => Math.max(0, Math.min(100, value));

export function Progress({
  readCount,
  inProgressCount,
  totalCount,
}: ProgressProps) {
  const safeTotal = Math.max(0, totalCount);
  const completedPercent = safeTotal
    ? clampPercent((readCount / safeTotal) * 100)
    : 0;
  const inProgressPercent = safeTotal
    ? clampPercent((inProgressCount / safeTotal) * 100)
    : 0;
  const activePercent = clampPercent(completedPercent + inProgressPercent);

  return (
    <div className="space-y-2">
      <div className="relative h-3 w-full overflow-hidden rounded-full bg-(--surface-overlay)">
        <div
          className="absolute inset-0 bg-(--accent) opacity-20 "
          aria-hidden
        />
        <div
          className="absolute inset-y-0 bg-(--accent) opacity-50 rounded-full"
          style={{ width: `${activePercent}%` }}
          aria-hidden
        />
        <div
          className="absolute inset-y-0 bg-(--accent) rounded-full"
          style={{ width: `${completedPercent}%` }}
          role="progressbar"
          aria-valuenow={completedPercent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="완독률"
        />
      </div>

      <div className="flex items-center text-xs text-(--text-primary) font-display font-normal">
        <span>
          {readCount}/{safeTotal}
        </span>
      </div>
    </div>
  );
}
