import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";

const weekdayLabels = [
  "Thứ 2",
  "Thứ 3",
  "Thứ 4",
  "Thứ 5",
  "Thứ 6",
  "Thứ 7",
  "Chủ Nhật",
];

const dates = Array.from({ length: 7 }).map((_, i) => {
  const d = dayjs().add(i, "day");
  return {
    id: d.format("YYYY-MM-DD"),
    label: weekdayLabels[d.day()],
    date: d.format("DD/MM"),
  };
});

interface DateSelectorProps {
  selectedDate: string;
  onDateChange: (dateId: string) => void;
  disabledDates?: string[];
}

export function DateSelector({
  selectedDate,
  onDateChange,
  disabledDates = [],
}: DateSelectorProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPercent, setScrollPercent] = useState<number>(0);

  const handleScroll = () => {
    const e = scrollRef.current;
    if (!e) return;
    const percent = e.scrollLeft / (e.scrollWidth - e.clientWidth);
    setScrollPercent(percent);
  };

  return (
    <div>
      <p className="text-[12px] text-[#523C14] mb-2">Chọn ngày</p>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-2 overflow-x-auto pb-2 no-scrollbar"
      >
        {dates.map((date) => {
          const active = selectedDate === date.id;
          const disabled = disabledDates.includes(date.id);

          return (
            <button
              key={date.id}
              type="button"
              onClick={() => !disabled && onDateChange(date.id)}
              disabled={disabled}
              className={cn(
                "min-w-[92px] py-3 text-center transition-colors",
                active
                  ? "bg-[#F6C649]"
                  : disabled
                    ? "bg-[#E5E3DC] opacity-50 cursor-not-allowed"
                    : "bg-[#E5E3DC]",
              )}
            >
              <div className="text-[14px] font-medium text-[#291E0A]">
                {date.label}
              </div>

              <div className="text-[12px] text-[#291E0A] opacity-70">
                {date.date}
              </div>
            </button>
          );
        })}
      </div>
      <div className="relative h-[3px] bg-[#00000012] rounded">
        <div
          className="absolute top-0 left-0 h-full bg-[#2F2F2F] rounded transition-all"
          style={{ width: `${30 + scrollPercent * 70}%` }}
        />
      </div>
    </div>
  );
}
