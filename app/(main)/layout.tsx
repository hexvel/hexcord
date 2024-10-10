import NavSidebar from "@/components/nav/sidebar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      {/* почему то при `hidden md:flex` у меня коряво всё начало работать после добавления модалки */}
      {/* TODO: fix */}
      <div className="flex h-full w-[72px] z-30 flex-col fixed inset-y-0">
        <NavSidebar />
      </div>
      <main className="md:pl-[72px] h-full">{children}</main>
    </div>
  );
};

export default MainLayout;
