export interface ServiceItem {
  id: number;
  title: string;
  price: number;
  description: string;
}

export interface ServiceCategory {
  id: number;
  name: string;
  image: string;
  services: ServiceItem[];
}
