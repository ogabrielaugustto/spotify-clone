import { Bell, ChevronLeft, ChevronRight, User } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <button className="flex items-center justify-center bg-black rounded-full p-1">
          <ChevronLeft />
        </button>
        <button className="flex items-center justify-center bg-black rounded-full p-1">
          <ChevronRight />
        </button>
      </div>
      <div className="flex gap-2 text-xs">
        <button className="bg-black rounded-full p-1">
          <Bell className="w-6 h-5"/>
        </button>
        <button className="bg-black rounded-full p-1">
          <User className="w-6 h-5" />
        </button>
      </div>
    </div>
  );
}
