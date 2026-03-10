import { mockCartItems } from "@/constants/cart";
import { useCallback, useMemo, useState } from "react";

export const useShoppingCart = () => {
  const [items, setItems] = useState(mockCartItems);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("vi-VN").format(price) + " đ";

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateChildQty = useCallback(
    (parentId: string, childId: string, delta: number) => {
      setItems((prev) =>
        prev.map((item) =>
          item.id === parentId
            ? {
                ...item,
                children: item.children?.map((child) =>
                  child.id === childId
                    ? {
                        ...child,
                        quantity: Math.max(1, child.quantity + delta),
                      }
                    : child,
                ),
              }
            : item,
        ),
      );
    },
    [],
  );

  const totalPrice = useMemo(
    () => items.reduce((sum, item) => sum + item.price, 0),
    [items],
  );

  return {
    items,
    formatPrice,
    removeItem,
    updateChildQty,
    totalPrice,
  };
};
