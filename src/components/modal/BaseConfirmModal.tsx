import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type React from "react";

interface BaseConfirmModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  showActions?: boolean;
  children?: React.ReactNode;
}

export function BaseConfirmModal({
  open,
  onClose,
  title,
  description,
  confirmText = "Xác nhận",
  cancelText = "Hủy",
  onConfirm,
  onCancel,
  showActions = true,
  children,
}: BaseConfirmModalProps) {
  const handleCancel = () => {
    onCancel?.();
    onClose();
  };

  const handleConfirm = () => {
    onConfirm?.();
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[720px] bg-[#FAF5EB] border-none rounded-none px-[36px] py-[32px]">
        <DialogHeader className="text-center space-y-4">
          {title && (
            <DialogTitle className="text-[40px] font-normal text-[#222732] uppercase">
              {title}
            </DialogTitle>
          )}

          {description && (
            <DialogDescription className="text-[#715E28] text-[20px] leading-relaxed max-w-[560px] mx-auto">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>

        {children && <div>{children}</div>}

        {showActions && (
          <DialogFooter className="flex justify-center gap-4 mt-6">
            <Button variant="outline" onClick={handleCancel}>
              {cancelText}
            </Button>

            <Button onClick={handleConfirm} className="bg-[#824C08] text-white">
              {confirmText}
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
