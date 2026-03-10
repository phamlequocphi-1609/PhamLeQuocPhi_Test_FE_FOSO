import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonCardProps {
  icon?: LucideIcon;
  text?: string;
  count?: number;
  showCount?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "cart" | "default";
  onClick?: () => void;
}

const sizeClasses = {
  sm: "w-32 h-10 text-xs",
  md: "w-40 h-12 text-sm",
  lg: "w-[193px] h-[48px] text-base",
};

const iconSizeClasses = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-5 h-5",
};

const countSizeClasses = {
  sm: "w-5 h-5 text-xs",
  md: "w-6 h-6 text-xs",
  lg: "w-[24px] h-[24px] text-xs",
};

export function ButtonCard({
  icon: Icon,
  text,
  count = 0,
  showCount = false,
  className,
  size = "md",
  variant = "default",
  onClick,
}: ButtonCardProps) {
  const baseClasses =
    "flex items-center justify-center space-x-1 md:space-x-2 rounded-none transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer";
  const variantClasses =
    variant === "cart"
      ? "bg-brand-300 hover:bg-brand-200 text-white"
      : "bg-primary hover:bg-primary/90 text-primary-foreground";

  return (
    <Button
      className={cn(baseClasses, variantClasses, sizeClasses[size], className)}
      onClick={onClick}
    >
      {Icon && (
        <Icon
          className={cn(iconSizeClasses[size], "text-lightGray shrink-0")}
        />
      )}

      {text && (
        <span className="font-medium uppercase hidden sm:inline">{text}</span>
      )}

      {showCount && (
        <div
          className={cn(
            countSizeClasses[size],
            "bg-lightGray rounded-full flex items-center justify-center font-bold shrink-0",
          )}
        >
          <span className="text-brand-300">{count}</span>
        </div>
      )}
    </Button>
  );
}
