import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { BaseModalSheet } from "@/components/modal/BaseModalSheet";
import { Button } from "@/components/ui/button";
import { FloatingInput, DateSelector } from "@/components/input";
import { BookingConfirmModal, BookingHourSelect } from "./internal";
interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState("t7");
  const [selectedTime, setSelectedTime] = useState("10:00");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const disabledTimes = ["09:30", "12:30"];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
    setShowConfirmDialog(true);
  };

  return (
    <>
      <BaseModalSheet
        isOpen={isOpen}
        onClose={onClose}
        side="right"
        title="Xác Nhận Đặt Lịch"
        maxWidth="416px"
        contentClassName="p-0 flex flex-col h-full mt-[108px] bg-[#FAF5EB]"
        showCloseButton={false}
        footerClassName="mb-[108px] p-[12px] bg-[#FAF5EB] shadow-[0px_-4px_12px_0px_#0000000A]"
        footer={
          <div className="space-y-3 bottom-0 ">
            <Button
              type="submit"
              form="booking-form"
              className="w-full py-3 px-5 h-12 rounded-none bg-[#824C08] hover:bg-[#6f431e] flex items-center justify-between gap-2 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="text-[#FAF5EB] text-[16px] font-medium">
                Đặc Lịch
              </span>
              <ArrowRight
                size={16}
                className="text-[#FAF5EB] transition-transform duration-200 group-hover:translate-x-1"
              />
            </Button>
          </div>
        }
      >
        <form
          id="booking-form"
          onSubmit={handleSubmit}
          className="space-y-6 pb-6"
        >
          <FloatingInput
            id="customer_name"
            label="Tên khách hàng"
            value={customerName}
            onChange={setCustomerName}
            labelColor="text-[#523C14] text-[12px]"
          />
          <FloatingInput
            id="customer_phone"
            label="Số điện thoại"
            type="tel"
            value={customerPhone}
            onChange={setCustomerPhone}
            labelColor="text-[#523C14] text-[12px]"
          />
          <DateSelector
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
            disabledDates={["2026-03-14", "2026-03-12"]}
          />

          <BookingHourSelect
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
            disabledTimes={disabledTimes}
          />
        </form>
      </BaseModalSheet>

      <BookingConfirmModal
        open={showConfirmDialog}
        onClose={() => setShowConfirmDialog(false)}
      />
    </>
  );
}
