import { timeSlots } from "@/constants/booking";
import { cn } from "@/lib/utils";

interface BookingHourSelectProps {
  selectedTime: string;
  setSelectedTime: (time: string) => void;
  disabledTimes: string[];
}
export function BookingHourSelect({
  selectedTime,
  setSelectedTime,
  disabledTimes,
}: BookingHourSelectProps) {
  return (
    <div>
      <p className="text-[12px] text-[#523C14] mb-2">Chọn khung giờ</p>
      <div className="grid grid-cols-4 gap-2">
        {timeSlots.map((time) => {
          const active = selectedTime === time;
          const disabled = disabledTimes.includes(time);

          const hour = Number(time.split(":")[0]);
          const period = hour >= 12 ? "PM" : "AM";

          return (
            <button
              key={time}
              type="button"
              disabled={disabled}
              onClick={() => setSelectedTime(time)}
              className={cn(
                "py-3 text-center transition-colors",
                active && "bg-[#B67944] text-white",
                !active && !disabled && "bg-[#D9D6CF] text-[#291E0A]",
                disabled && "bg-[#D9D6CF] text-[#7C8CA5] cursor-not-allowed",
              )}
            >
              <div className="text-[16px] font-semibold">{time}</div>
              <div className="text-[11px] opacity-80">{period}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
