import reviewImg from "@/assets/image/bg.png";
import { useServiceCategories } from "@/features/services/hooks/useServiceCategories";
import { ServiceSection } from "../internal/serviceSection/ServiceSection";
import { serviceCategories } from "@/constants/service";
import { ServiceCategory } from "../internal/serviceCategory";
import { ServiceSearch } from "../internal/serviceSearch";
import { CustomerReviews } from "../internal/customerReview";
import { ServiceContact } from "../internal/serviceContact";

export function ServicesPage() {
  const { activeCategory, reorderedServices, handleCategoryChange } =
    useServiceCategories();

  return (
    <div>
      <div
        className="px-4 lg:px-[96px] relative bg-cover bg-center bg-no-repeat py-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(175.08deg, rgba(129, 105, 75, 0.2) 3.96%, #614F38 78.5%), url(${reviewImg})`,
        }}
      >
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 mb-10">
          <ServiceCategory
            categories={serviceCategories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
          <ServiceSearch />
        </div>
        {reorderedServices.map((category, index) => (
          <ServiceSection category={category} index={index} />
        ))}
      </div>
      <CustomerReviews />
      <ServiceContact />
    </div>
  );
}
