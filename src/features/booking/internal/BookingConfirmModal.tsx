import { BaseConfirmModal } from "@/components/modal/BaseConfirmModal";
import bookedImg from "@/assets/image/Illustration.png";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function BookingConfirmModal({ open, onClose }: Props) {
  return (
    <BaseConfirmModal open={open} onClose={onClose} showActions={false}>
      <div className="flex flex-col items-center text-center gap-6">
        <img src={bookedImg} alt="booked" className="w-[120px]" />
        <div className="space-y-4">
          <p className="text-[40px] font-normal text-[#222732] uppercase">
            Gửi yêu cầu thành công!
          </p>
          <p className="text-[#715E28] text-[22px] leading-relaxed max-w-[560px]">
            Cảm ơn bạn đã đặt dịch vụ tại The OM Lounge. Chúng tôi đã nhận được
            thông tin đặt lịch từ bạn và sẽ liên hệ lại trong thời gian sớm
            nhất.
          </p>
        </div>
      </div>
    </BaseConfirmModal>
  );
}
