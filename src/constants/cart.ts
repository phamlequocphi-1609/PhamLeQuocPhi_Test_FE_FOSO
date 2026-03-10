import songel1 from "@/assets/image/songel1.png";
import songel2 from "@/assets/image/songel2.png";
import songel3 from "@/assets/image/songel3.png";
import matMeo from "@/assets/image/matmeo.png";
import sonNhu from "@/assets/image/sonnhu.png";
import sonGel from "@/assets/image/songel.png";

export interface CartChild {
  id: string;
  name: string;
  quantity: number;
  image?: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  duration?: string;
  image?: string;
  children?: CartChild[];
}

export const mockCartItems: CartItem[] = [
  {
    id: "1",
    name: "Sơn gel",
    price: 264000,
    duration: "10 phút",
    image: songel1,
    children: [
      {
        id: "c1",
        name: "Hiệu ứng: Da beo",
        quantity: 1,
        image: songel2,
      },
      {
        id: "c2",
        name: "Hiệu ứng: Da beo",
        quantity: 2,
        image: songel3,
      },
    ],
  },
  {
    id: "2",
    name: "Mắc mèo",
    price: 88000,
    duration: "",
    image: matMeo,
    children: [],
  },
  {
    id: "3",
    name: "Sơn nhủ",
    price: 88000,
    duration: "10 phút",
    image: sonNhu,
    children: [],
  },
  {
    id: "4",
    name: "Sơn gel",
    price: 88000,
    duration: "10 phút",
    image: sonGel,
    children: [],
  },
];
