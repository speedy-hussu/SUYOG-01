import { AppSidebar } from "@/components/AppSidebar";
import AppHeader from "@/components/Header";

import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/Providers/ThemeProvider";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <AppSidebar />{" "}
        <div className="w-full">
          <AppHeader />
          <Toaster />
          <main className=" w-full h-[calc(100dvh-45px)]">{children}</main>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}
