import { useState } from "react";
import { useMobile } from "@/hooks/use-mobile";
import { HeaderNav, HeaderTop } from "./internal";

export function Header() {
  const isMobile = useMobile();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="px-4 lg:px-[96px] relative">
      <HeaderTop
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        isMobile={isMobile}
      />
      <HeaderNav isMobileMenuOpen={isMobileMenuOpen} isMobile={isMobile} />
    </header>
  );
}
