import type { ReactNode } from "react";
import { X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BaseModalSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  showCloseButton?: boolean;
  side?: "top" | "right" | "bottom" | "left";
  contentClassName?: string;
  maxWidth?: string;
  footerClassName?: string;
}

export function BaseModalSheet({
  isOpen,
  onClose,
  title,
  children,
  footer,
  showCloseButton = true,
  side = "right",
  contentClassName,
  maxWidth = "420px",
  footerClassName,
}: BaseModalSheetProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side={side}
        showCloseButton={false}
        style={{ maxWidth }}
        className={cn("w-full flex flex-col h-full p-0", contentClassName)}
      >
        {title && (
          <SheetHeader className="border-b border-b-[#00000012] py-4 text-center relative">
            <SheetTitle className="text-xl font-medium text-[#8B5A2B]">
              {title}
            </SheetTitle>

            {showCloseButton && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </SheetHeader>
        )}

        <div className="flex-1 overflow-y-auto px-4 py-4">{children}</div>
        {footer && (
          <SheetFooter className={cn("bg-[#F3EEE5]", footerClassName)}>
            {footer}
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}

export default BaseModalSheet;
