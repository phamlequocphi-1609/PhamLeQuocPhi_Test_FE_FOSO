import { Link, useLocation } from "react-router-dom";
import { MENU_ITEMS } from "@/constants/menu-link";

interface HeaderNavProps {
  isMobileMenuOpen: boolean;
  isMobile: boolean;
}

export function HeaderNav({ isMobileMenuOpen, isMobile }: HeaderNavProps) {
  const location = useLocation();

  return (
    <>
      <nav className={`${isMobile ? "hidden" : "block"}`}>
        <ul className="flex justify-center space-x-[62px] py-4">
          {MENU_ITEMS.map((item) => {
            const active = location.pathname === item.path;

            return (
              <li key={item.key}>
                <Link
                  to={item.path}
                  className={`px-3 py-2 text-[20px] transition-colors relative ${
                    active
                      ? "text-lightYellow font-semibold"
                      : "text-white hover:text-lightYellow"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div
        className={`${!isMobile ? "hidden" : "block"} absolute top-full left-0 w-full bg-white shadow-lg z-50 transition-all duration-300 ease-in-out transform origin-top ${
          isMobileMenuOpen
            ? "opacity-100 scale-y-100 translate-y-0"
            : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div
            className={`text-brand-300 font-medium cursor-pointer hover:text-lightYellow py-3 border-b border-gray-200 transform ${
              isMobileMenuOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "100ms" : "0ms" }}
          >
            ENGLISH
          </div>

          <nav className="py-2">
            {MENU_ITEMS.map((item, index) => {
              const active = location.pathname === item.path;

              return (
                <li key={item.key} className="list-none">
                  <Link
                    to={item.path}
                    className={`block px-4 py-3 text-[16px] transition-all duration-300 border-b border-gray-100 transform ${
                      active
                        ? "text-brand-300 font-semibold bg-gray-50"
                        : "text-gray-700 hover:text-brand-300 hover:bg-gray-50"
                    } ${
                      isMobileMenuOpen
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                    }`}
                    style={{
                      transitionDelay: isMobileMenuOpen
                        ? `${150 + index * 50}ms`
                        : "0ms",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
