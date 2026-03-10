import type { ServiceCategory } from "@/types/service";
import comboImg from "@/assets/image/combo.png";
import manicureImg from "@/assets/image/medicure.png";
import pedicureImg from "@/assets/image/pedicure.png";
import effectImg from "@/assets/image/perfectly.png";
import drinkImg from "@/assets/image/drink.png";

export const serviceCategories = [
  "Gói Combo",
  "Manicure",
  "Pedicure",
  "Hiệu Ứng",
  "Drinks",
];

export const mockServicesCard: ServiceCategory[] = [
  {
    id: 1,
    name: "Gói Combo",
    image: comboImg,
    services: [
      {
        id: 1,
        title: "Perfectly Polished",
        price: 390,
        description: "Làm mới móng: Mani hoặc Pedi",
      },
      {
        id: 2,
        title: "Luxury Spa Combo",
        price: 490,
        description: "Chăm sóc móng toàn diện + massage",
      },
      {
        id: 3,
        title: "Relax Combo",
        price: 450,
        description: "Manicure + Pedicure thư giãn",
      },
      {
        id: 4,
        title: "Premium Combo",
        price: 550,
        description: "Combo chăm sóc móng cao cấp",
      },
    ],
  },

  {
    id: 2,
    name: "Manicure",
    image: manicureImg,
    services: [
      {
        id: 5,
        title: "Classic Manicure",
        price: 250,
        description: "Chăm sóc móng tay cơ bản",
      },
      {
        id: 6,
        title: "Spa Manicure",
        price: 320,
        description: "Chăm sóc móng + massage tay",
      },
      {
        id: 7,
        title: "Gel Manicure",
        price: 390,
        description: "Sơn gel bền màu và bóng đẹp",
      },
      {
        id: 8,
        title: "Luxury Manicure",
        price: 450,
        description: "Manicure cao cấp với dưỡng da tay",
      },
    ],
  },

  {
    id: 3,
    name: "Pedicure",
    image: pedicureImg,
    services: [
      {
        id: 9,
        title: "Classic Pedicure",
        price: 300,
        description: "Chăm sóc móng chân cơ bản",
      },
      {
        id: 10,
        title: "Spa Pedicure",
        price: 390,
        description: "Ngâm chân thảo dược thư giãn",
      },
      {
        id: 11,
        title: "Gel Pedicure",
        price: 420,
        description: "Sơn gel bền màu cho móng chân",
      },
      {
        id: 12,
        title: "Luxury Pedicure",
        price: 520,
        description: "Chăm sóc móng chân cao cấp + massage",
      },
    ],
  },

  {
    id: 4,
    name: "Hiệu Ứng",
    image: effectImg,
    services: [
      {
        id: 13,
        title: "Ombre Effect",
        price: 200,
        description: "Hiệu ứng chuyển màu nhẹ nhàng",
      },
      {
        id: 14,
        title: "Chrome Effect",
        price: 220,
        description: "Hiệu ứng kim loại sang trọng",
      },
      {
        id: 15,
        title: "Cat Eye Effect",
        price: 230,
        description: "Hiệu ứng mắt mèo độc đáo",
      },
      {
        id: 16,
        title: "3D Nail Art",
        price: 260,
        description: "Trang trí móng nghệ thuật 3D",
      },
    ],
  },

  {
    id: 5,
    name: "Drinks",
    image: drinkImg,
    services: [
      {
        id: 17,
        title: "Latte",
        price: 50,
        description: "",
      },
      {
        id: 18,
        title: "Espresso",
        price: 50,
        description: "",
      },
      {
        id: 19,
        title: "Americano",
        price: 50,
        description: "",
      },
      {
        id: 20,
        title: "Cappuccino",
        price: 50,
        description: "",
      },
      {
        id: 21,
        title: "Milkshake",
        price: 60,
        description: "",
      },
      {
        id: 22,
        title: "Juice",
        price: 50,
        description: "",
      },
    ],
  },
];
