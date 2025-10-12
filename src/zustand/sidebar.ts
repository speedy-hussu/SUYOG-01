import { create } from "zustand";

interface SidebarState {
  isSidebarCollapsed: boolean;
  isHovered: boolean;
  toggleSidebar: () => void;
  setIsCollapsed: (collapsed: boolean) => void;
  setIsHovered: (hovered: boolean) => void;
}

const useSidebar = create<SidebarState>((set) => ({
  isSidebarCollapsed: false,
  isHovered: false,
  toggleSidebar: () =>
    set((state) => ({ isSidebarCollapsed: !state.isSidebarCollapsed })),
  setIsCollapsed: (collapsed) => set({ isSidebarCollapsed: collapsed }),
  setIsHovered: (hovered) => set({ isHovered: hovered }),
}));

export { useSidebar };
