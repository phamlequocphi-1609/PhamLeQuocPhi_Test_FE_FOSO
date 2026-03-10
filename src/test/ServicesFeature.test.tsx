import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ServicesPage } from "../features/services/pages/ServicesPage";
import { useServiceCategories } from "../features/services/hooks/useServiceCategories";
import { serviceCategories, mockServicesCard } from "../constants/service";
import type { ServiceCategory, ServiceItem } from "@/types/service";

vi.mock("../features/services/hooks/useServiceCategories", () => ({
  useServiceCategories: vi.fn(),
}));

vi.mock(
  "../features/services/internal/serviceCategory/ServiceCategory",
  () => ({
    ServiceCategory: ({
      categories,
      activeCategory,
      onCategoryChange,
    }: {
      categories: string[];
      activeCategory: string;
      onCategoryChange: (category: string) => void;
    }) => (
      <div data-testid="service-category">
        {categories.map((category: string) => (
          <button
            key={category}
            data-testid={`category-${category}`}
            onClick={() => onCategoryChange(category)}
            className={activeCategory === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </div>
    ),
  }),
);

vi.mock("../features/services/internal/serviceSearch/ServiceSearch", () => ({
  ServiceSearch: () => <div data-testid="service-search">Search</div>,
}));

vi.mock("../features/services/internal/serviceSection/ServiceSection", () => ({
  ServiceSection: ({
    category,
    index,
  }: {
    category: ServiceCategory;
    index: number;
  }) => (
    <div
      data-testid="service-section"
      data-category={category.name}
      data-index={index}
    >
      <h3>{category.name}</h3>
      {category.services.map((service: ServiceItem) => (
        <div key={service.id} data-testid={`service-${service.id}`}>
          {service.title} - {service.price}
        </div>
      ))}
    </div>
  ),
}));

vi.mock("../features/services/internal/customerReview/CustomerReviews", () => ({
  CustomerReviews: () => <div data-testid="customer-reviews">Reviews</div>,
}));

vi.mock("../features/services/internal/serviceContact/ServiceContact", () => ({
  ServiceContact: () => <div data-testid="service-contact">Contact</div>,
}));

vi.mock("../assets/image/bg.png", () => ({ default: "mock-bg-image.png" }));

describe("ServicesPage", () => {
  const mockUseServiceCategories = vi.mocked(useServiceCategories);

  beforeEach(() => {
    vi.clearAllMocks();

    mockUseServiceCategories.mockReturnValue({
      activeCategory: "Gói Combo",
      reorderedServices: mockServicesCard,
      handleCategoryChange: vi.fn(),
    });
  });

  it("renders main components", () => {
    render(<ServicesPage />);

    expect(screen.getByTestId("service-category")).toBeInTheDocument();
    expect(screen.getByTestId("service-search")).toBeInTheDocument();
    expect(screen.getByTestId("customer-reviews")).toBeInTheDocument();
    expect(screen.getByTestId("service-contact")).toBeInTheDocument();
  });

  it("renders correct number of categories and service sections", () => {
    render(<ServicesPage />);

    expect(screen.getAllByTestId("service-section")).toHaveLength(
      mockServicesCard.length,
    );

    expect(screen.getAllByTestId(/category-/)).toHaveLength(
      serviceCategories.length,
    );
  });

  it("displays services with correct details", () => {
    render(<ServicesPage />);

    expect(screen.getByTestId("service-1")).toHaveTextContent(
      "Perfectly Polished - 390",
    );

    expect(screen.getByTestId("service-5")).toHaveTextContent(
      "Classic Manicure - 250",
    );

    expect(screen.getByTestId("service-17")).toHaveTextContent("Latte - 50");
  });

  it("highlights active category", () => {
    mockUseServiceCategories.mockReturnValue({
      activeCategory: "Manicure",
      reorderedServices: mockServicesCard,
      handleCategoryChange: vi.fn(),
    });

    render(<ServicesPage />);

    expect(screen.getByTestId("category-Manicure")).toHaveClass("active");
    expect(screen.getByTestId("category-Pedicure")).not.toHaveClass("active");
  });

  it("calls category change handler when clicking category", () => {
    const mockChange = vi.fn();

    mockUseServiceCategories.mockReturnValue({
      activeCategory: "Gói Combo",
      reorderedServices: mockServicesCard,
      handleCategoryChange: mockChange,
    });

    render(<ServicesPage />);

    fireEvent.click(screen.getByTestId("category-Manicure"));

    expect(mockChange).toHaveBeenCalledWith("Manicure");
  });

  it("reorders services when category changes", () => {
    const reordered = [
      mockServicesCard[1],
      ...mockServicesCard.filter((_, i) => i !== 1),
    ];

    mockUseServiceCategories.mockReturnValue({
      activeCategory: "Manicure",
      reorderedServices: reordered,
      handleCategoryChange: vi.fn(),
    });

    render(<ServicesPage />);

    const sections = screen.getAllByTestId("service-section");

    expect(sections[0]).toHaveAttribute("data-category", "Manicure");
    expect(sections[1]).toHaveAttribute("data-category", "Gói Combo");
  });
});
