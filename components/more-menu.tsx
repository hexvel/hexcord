"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Check,
  MessageSquareText,
  Monitor,
  Moon,
  Settings2,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

import { useState } from "react";

const MoreMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button className="h-[40px] w-[40px] flex items-center justify-center dark:hover:bg-[#313338] rounded-xl transition-all">
          <Settings2 className="h-[1.2rem] w-[1.2rem]" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side="top"
        align="center"
        className="dark:bg-[#313338]"
      >
        <DropdownMenu>
          <DropdownMenuLabel>Доп. возможности</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link
            href="https://t.me/hexcode_chat"
            onClick={() => setIsOpen(false)}
            target="_blank"
          >
            <DropdownMenuItem className="flex items-center gap-x-1">
              <MessageSquareText className="h-[1rem] w-[1rem]" /> Мы в телеграм
            </DropdownMenuItem>
          </Link>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Monitor className="mr-2 size-4" />
              Тема
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="dark:bg-[#313338]">
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  <Monitor className="mr-2 size-4" />
                  Система
                  {theme === "system" && <Check className="ms-2 size-4" />}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  <Sun className="mr-2 size-4" />
                  Светлая
                  {theme === "light" && <Check className="ms-2 size-4" />}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  <Moon className="mr-2 size-4" />
                  Тёмная
                  {theme === "dark" && <Check className="ms-2 size-4" />}
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenu>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MoreMenu;
