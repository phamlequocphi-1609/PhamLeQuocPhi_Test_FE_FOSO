interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  reverse?: boolean;
}

export function ServiceCard({
  title,
  price,
  description,
  reverse = false,
}: ServiceCardProps) {
  return (
    <div className="overflow-hidden animate-slideUp hover:scale-[1.02] transition-all duration-300">
      <div
        className={`flex flex-col md:flex-row gap-6 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="flex-1 gap-3 flex flex-col justify-between">
          <div>
            <h3 className="text-[24px] font-semibold text-[#FFFFFF]">
              {title}
            </h3>

            <p className="text-[#B4AA9B] text-[18px] font-normal ">
              {description}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[16px] font-semibold text-[#DAD7CD]">
              {price}k
            </span>

            <button className="w-8 h-8  text-[#FFFFFF] hover:bg-[#E1C084] hover:text-[#3A3A3A] rounded-full transition-colors duration-300">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
