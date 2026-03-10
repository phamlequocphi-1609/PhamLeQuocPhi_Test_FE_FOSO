import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../footer/Footer";
import { MENU_ITEMS } from "@/constants/menu-link";
import headerImage from "/src/assets/image/header.png";
import { Header } from "../headers";
import { useEffect, useState } from "react";

export function Layout() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const currentPageLabel = MENU_ITEMS.find(
    (item) => item.path === location.pathname,
  )?.label;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="relative h-64 md:h-80 lg:h-96">
        <div className="absolute inset-0">
          <img
            src={headerImage}
            alt="Header banner"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="absolute inset-0 bg-[#28262659]" />
        <div className="relative z-10">
          <Header />
        </div>
        <div
          className={`absolute bottom-12 left-0 right-0 flex justify-center z-10 transition-all duration-500 ease-out ${scrolled ? "transform translate-y-8 opacity-0" : "transform translate-y-0 opacity-100"}`}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white/90 transition-all duration-500 ease-out">
            {currentPageLabel}
          </h1>
        </div>
      </div>
      <main>
        <div className=" mx-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
