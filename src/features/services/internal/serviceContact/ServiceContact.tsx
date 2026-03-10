import wrapperImg from "@/assets/image/wrapper.png";
import { ButtonCard } from "@/components/button/ButtonCard";
import { BookingModal } from "@/features/booking";
import { useModal } from "@/hooks/useModal";

export function ServiceContact() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat py-20 overflow-hidden flex justify-center"
        style={{
          backgroundImage: `linear-gradient(175.08deg, rgba(129, 105, 75, 0.2) 3.96%, #614F38 78.5%), url(${wrapperImg})`,
        }}
      >
        <div className="flex justify-center flex-col items-center text-center w-[856px]">
          <h1 className="text-[72px] font-normal text-white font-[font/family/display] mb-4">
            Đặt lịch hẹn chữa lành
          </h1>
          <p className="text-white text-[24px] font-normal">
            Đến The OM Lounge để xả stress và làm mới mình. Vẻ đẹp bắt đầu từ
            những <br /> điều nhỏ nhất và lan tỏa đến cả tâm hồn.
          </p>
          <ButtonCard
            text="Trải nghiệm ngay"
            size="lg"
            className="mt-[40px] bg-white text-[#824C08] hover:bg-[#824C08] hover:text-white"
            onClick={openModal}
          />
        </div>
      </section>

      <BookingModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}
