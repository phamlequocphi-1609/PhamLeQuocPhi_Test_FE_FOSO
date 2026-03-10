import type { Review } from "@/types/review";
import { Link } from "react-router-dom";
import unionImg from "@/assets/image/Union.png";

interface ReviewCardProps {
  review: Review;
  index?: number;
  totalItems?: number;
}

export function ReviewCard({
  review,
  index = 0,
  totalItems = 1,
}: ReviewCardProps) {
  const isFirstOrLast = index === 0 || index === totalItems - 1;
  const marginTop = isFirstOrLast ? "mt-[313px]" : "";

  return (
    <div
      className={`${marginTop} transition-all duration-500 ease-in-out hover:scale-105`}
    >
      <div className="relative">
        <img src={review.image} alt={review.name} className="w-full" />
        <div className="absolute bottom-[-20px] right-0">
          <img src={unionImg} />
        </div>
      </div>
      <div className="grid grid-cols-12 mt-[48px]">
        <div className="col-span-2">
          <img
            src={review.avatar}
            alt={review.name}
            className="w-[96px] h-[96px] object-cover"
          />
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-9">
          <h3 className="text-5xl leading-[72px] font-bold text-[#FFFFFF]">
            {review.name}
          </h3>
          <p className="text-[#FFFFFF] font-normal leading-normal mb-4 text-3xl">
            {review.content}
          </p>
          <Link
            to="#"
            className="text-[#BC978C] font-normal text-3xl transition-colors underline"
          >
            Xem thêm
          </Link>
        </div>
      </div>
    </div>
  );
}
