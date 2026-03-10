import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function ServiceSearch() {
  return (
    <form className="w-full md:w-auto">
      <div className="flex items-center w-full md:w-[392px] border-b border-[#AFB3BB] pb-2">
        <input
          type="text"
          placeholder="Tìm kiếm"
          className="flex-1 bg-transparent outline-none text-[#DDDFE4] placeholder-[#DDDFE4] text-sm md:text-[24px]"
        />

        <Button
          type="submit"
          variant="ghost"
          size="icon"
          className="text-[#DAD7CD] hover:text-[#AFB3BB] cursor-pointer"
        >
          <Search className="h-5 w-5 md:h-6 md:w-6" />
        </Button>
      </div>
    </form>
  );
}
