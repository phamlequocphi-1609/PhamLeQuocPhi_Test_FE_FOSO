import { Button } from "@/components/ui/button";

interface ServiceCategoryProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ServiceCategory({
  categories,
  activeCategory,
  onCategoryChange,
}: ServiceCategoryProps) {
  return (
    <div className="flex flex-wrap items-center gap-y-2">
      {categories.map((category, index) => (
        <div key={category} className="flex items-center">
          <Button
            onClick={() => onCategoryChange(category)}
            className={`font-normal px-0 h-auto cursor-pointer text-base md:text-[24px] transition-colors ${
              activeCategory === category
                ? "text-[#FCE48C] font-semibold"
                : "text-white hover:text-[#FCE48C]"
            }`}
          >
            {category}
          </Button>

          {index < categories.length - 1 && (
            <div className="hidden md:block w-px h-5 bg-[#E5E3DC] mx-3" />
          )}
        </div>
      ))}
    </div>
  );
}
