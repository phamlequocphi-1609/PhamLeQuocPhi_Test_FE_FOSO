import { useState, useMemo, useCallback } from "react";
import { mockServicesCard } from "@/constants/service";

export function useServiceCategories() {
  const [activeCategory, setActiveCategory] = useState("Gói Combo");

  const reorderedServices = useMemo(() => {
    const activeIndex = mockServicesCard.findIndex(
      (category) => category.name === activeCategory,
    );
    if (activeIndex === -1) return mockServicesCard;
    const activeCategoryData = mockServicesCard[activeIndex];
    const otherCategories = mockServicesCard.filter(
      (_, index) => index !== activeIndex,
    );
    return [activeCategoryData, ...otherCategories];
  }, [activeCategory]);

  const handleCategoryChange = useCallback(
    (categoryName: string) => {
      setActiveCategory(categoryName);
    },
    [setActiveCategory],
  );

  return {
    activeCategory,
    reorderedServices,
    handleCategoryChange,
  };
}
