import { useState, useEffect, useCallback } from "react";
import { mockReviews } from "../../../../constants/review";
import reviewImg from "@/assets/image/bg.png";
import { ReviewCard } from "./internal/ReviewCard";
import { Button } from "@/components/ui/button";

export const CustomerReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  const getSlidesPerView = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }
    return 3;
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getSlidesPerView]);

  const startIndex = Math.max(
    0,
    Math.min(activeIndex, mockReviews.length - slidesPerView),
  );
  const visibleReviews = mockReviews.slice(
    startIndex,
    startIndex + slidesPerView,
  );

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(175.08deg, rgba(129, 105, 75, 0.2) 3.96%, #614F38 78.5%), url(${reviewImg})`,
      }}
    >
      <div className=" px-4 lg:px-5">
        <div className="mb-16 text-center">
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-normal leading-[80px] md:leading-[104px] lg:leading-[128px] tracking-[20%] uppercase text-[#FFFFFF] font-[font/family/display]">
            NHẬN XÉT TỪ
          </h2>
          <p className="text-[64px] md:text-[96px] lg:text-[128px] font-normal leading-[64px] md:leading-[96px] lg:leading-[128px] tracking-normal capitalize text-[#FFFFFF] font-[font/family/display]">
            Khách Hàng
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {visibleReviews.map((review, index) => (
            <ReviewCard
              key={review.id}
              review={review}
              index={index}
              totalItems={slidesPerView}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {mockReviews.map((_, index) => (
            <div
              key={index}
              className={`relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center cursor-pointer ${
                index === activeIndex ? "border border-[#DAD3CA]" : ""
              }`}
            >
              <Button
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 md:w-3 md:h-3 lg:w-3 lg:h-3 rounded-full transition-all p-0 cursor-pointer ${
                  index === activeIndex
                    ? "bg-white"
                    : "bg-[#DAD3CA] hover:bg-[#DAD3CA]/70"
                }`}
                variant="ghost"
                size="sm"
              ></Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
