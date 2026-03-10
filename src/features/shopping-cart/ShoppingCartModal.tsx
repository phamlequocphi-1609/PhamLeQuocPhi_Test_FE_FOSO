import { Minus, Plus, X, Clock, ChevronRight, ArrowRight } from "lucide-react";
import { BaseModalSheet } from "../../components/modal/BaseModalSheet";
import { Button } from "@/components/ui/button";
import avatarCart from "@/assets/image/avatarCart.png";
import { cn } from "@/lib/utils";
import { useShoppingCart } from "./hooks/useShoppingCart";

interface ShoppingCartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShoppingCartModal({ isOpen, onClose }: ShoppingCartModalProps) {
  const { items, formatPrice, removeItem, updateChildQty, totalPrice } =
    useShoppingCart();

  return (
    <BaseModalSheet
      isOpen={isOpen}
      onClose={onClose}
      side="right"
      title="Giỏ Hàng"
      maxWidth="416px"
      contentClassName="p-0 flex flex-col h-full mt-[108px] bg-[#FAF5EB]"
      showCloseButton={false}
      footerClassName="mb-[108px] p-[12px] bg-[#FAF5EB] shadow-[0px_-4px_12px_0px_#0000000A]"
      footer={
        <div className="space-y-3 bottom-0 ">
          <div className="flex items-center justify-between text-sm font-normal">
            <span className="text-[#888888]">Kỹ thuật viên</span>
            <div className="flex items-center gap-2 cursor-pointer transition-all duration-200 hover:opacity-80">
              <img
                src={avatarCart}
                className="w-6 h-6 rounded-full transition-transform duration-200 hover:scale-110"
              />
              <span className="text-[16px] font-normal text-[#000000]">
                Võ Thị Bích Phượng
              </span>
              <ChevronRight
                size={16}
                className="text-[#AD8B6C] transition-transform duration-200"
              />
            </div>
          </div>

          <div className="flex justify-between">
            <span className="text-[#0A0C11] font-normal text-[16px]">
              Tổng thanh toán
            </span>
            <span className="text-[#F36363] font-semibold">
              {formatPrice(totalPrice)}
            </span>
          </div>
          <Button className="w-full py-3 px-5 h-12 rounded-none bg-[#824C08] hover:bg-[#6f431e] flex items-center justify-between gap-2 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
            <span className="text-[#FAF5EB] text-[16px] font-medium">
              Tiếp tục
            </span>
            <ArrowRight
              size={16}
              className="text-[#FAF5EB] transition-transform duration-200 group-hover:translate-x-1"
            />
          </Button>
        </div>
      }
    >
      <div className="flex flex-col">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "py-4 space-y-3 transition-all duration-300",
              "animate-in slide-in-from-right-5 fade-in-0",
              `delay-${Math.min(index * 50, 300)}`,
            )}
          >
            <div className="flex gap-3">
              <img
                src={item.image}
                className="w-14 h-14 rounded object-cover"
              />

              <div className="flex-1 space-y-1">
                <div className="flex justify-between">
                  <p className="text-sm font-medium text-[#2E2E2E]">
                    {item.name}
                  </p>

                  <Button
                    onClick={() => removeItem(item.id)}
                    className="transition-all duration-200 hover:scale-110 hover:text-red-500 cursor-pointer"
                    variant="ghost"
                    size="sm"
                  >
                    <X className="w-4 h-4 text-gray-400" />
                  </Button>
                </div>

                <div className="flex items-center justify-between text-sm">
                  {item.price > 0 && (
                    <p className="text-[#4F4F4F]">{formatPrice(item.price)}</p>
                  )}

                  {item.duration && (
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock size={12} />
                      {item.duration}
                    </div>
                  )}
                </div>
              </div>
            </div>
            {item.children?.map((child) => (
              <div
                key={child.id}
                className="flex items-center gap-3 pl-[68px] transition-all duration-300 animate-in slide-in-from-right-3 fade-in-0 delay-200"
              >
                <img
                  src={child.image}
                  className="w-10 h-10 rounded object-cover"
                />

                <p className="flex-1 text-sm text-gray-600">{child.name}</p>

                <div className="flex items-center border border-gray-300 rounded-full h-8 overflow-hidden">
                  <Button
                    onClick={() => updateChildQty(item.id, child.id, -1)}
                    className="px-2 cursor-pointer transition-all duration-200 hover:bg-gray-100 active:bg-gray-200 rounded-l-full"
                    variant="ghost"
                    size="sm"
                  >
                    <Minus size={14} />
                  </Button>

                  <span className="px-2 text-sm font-medium min-w-[20px] text-center">
                    {child.quantity}
                  </span>

                  <Button
                    onClick={() => updateChildQty(item.id, child.id, 1)}
                    className="px-2 cursor-pointer transition-all duration-200 hover:bg-gray-100 active:bg-gray-200 rounded-r-full"
                    variant="ghost"
                    size="sm"
                  >
                    <Plus size={14} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </BaseModalSheet>
  );
}
