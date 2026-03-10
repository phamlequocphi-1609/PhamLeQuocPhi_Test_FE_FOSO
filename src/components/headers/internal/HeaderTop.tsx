import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "/src/assets/image/Group.png";
import { ButtonCard } from "@/components/button";
import { ShoppingCartModal } from "@/components/modal";
import { useModal } from "@/hooks/useModal";

interface HeaderTopProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  isMobile: boolean;
}

export function HeaderTop({
  isMobileMenuOpen,
  toggleMobileMenu,
  isMobile,
}: HeaderTopProps) {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <div className="flex items-center justify-between py-4 px-4">
        <Button
          onClick={toggleMobileMenu}
          className={`${!isMobile ? "hidden" : "block"}  bg-white/10 hover:bg-white/20 text-white transition-all duration-300 active:scale-95`}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </Button>
        <div
          className={`${isMobile ? "hidden" : "block"} text-white font-medium cursor-pointer hover:text-lightYellow transition-colors duration-200 text-sm md:text-base lg:text-lg`}
        >
          ENGLISH
        </div>

        <Link
          to="/"
          className="transform hover:scale-105 transition-transform duration-200"
        >
          <img
            src={logoImage}
            alt="Logo"
            className="h-12 md:h-14 lg:h-16 drop-shadow-lg hover:drop-shadow-xl transition-all duration-200"
            loading="eager"
            decoding="async"
          />
        </Link>
        <ButtonCard
          icon={ShoppingCart}
          text="GIỎ HÀNG"
          count={3}
          showCount={true}
          variant="cart"
          size="lg"
          onClick={openModal}
          className={
            isOpen ? "bg-lightYellow hover:bg-lightYellow text-brand-300" : ""
          }
        />
      </div>

      <ShoppingCartModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}
