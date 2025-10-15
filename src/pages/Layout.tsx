import { AppSidebar } from "@/components/AppSidebar";
import AppHeader from "@/components/Header";

import { SidebarProvider } from "@/components/ui/sidebar";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />{" "}
      <div className="w-full">
        <AppHeader />

        <main className=" w-full h-[calc(100dvh-45px)]">{children}</main>
      </div>
    </SidebarProvider>
  );
}
