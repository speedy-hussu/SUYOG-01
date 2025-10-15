import * as Icons from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronUp, User2 } from "lucide-react";
// Menu items.
const sidebarMenu = [
  {
    title: "Main",
    items: [{ title: "Dashboard", url: "/dashboard", icon: "LayoutDashboard" }],
  },
  {
    title: "Orders",
    items: [
      { title: "Daily Orders", url: "/orders/daily", icon: "ClipboardList" },
      { title: "Bulk Event Booking", url: "/orders/bulk", icon: "Users" },
      { title: "Quotations", url: "/orders/quotations", icon: "FileText" },
    ],
  },
  {
    title: "Menu Management",
    items: [
      { title: "Dishes", url: "/menu/dishes", icon: "UtensilsCrossed" },
      { title: "Menu Planner", url: "/menu/planner", icon: "ClipboardCheck" },
    ],
  },
  {
    title: "Staff",
    items: [
      { title: "Staff List", url: "/staff/list", icon: "Users2" },
      { title: "Payroll", url: "/staff/payroll", icon: "Wallet" },
    ],
  },
  {
    title: "Inventory",
    items: [
      { title: "Ingredients", url: "/inventory/ingredients", icon: "Boxes" },
      {
        title: "Stock & Purchase",
        url: "/inventory/stock",
        icon: "ShoppingCart",
      },
      { title: "Wastage", url: "/inventory/wastage", icon: "Trash2" },
    ],
  },
  {
    title: "Reports",
    items: [
      {
        title: "Monthly Report",
        url: "/reports/monthly",
        icon: "CalendarDays",
      },
      { title: "Sales Analysis", url: "/reports/sales", icon: "BarChart3" },
      { title: "GST Report", url: "/reports/gst", icon: "FileSpreadsheet" },
      { title: "Audit Logs", url: "/reports/audit", icon: "Clipboard" },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarTrigger className="w-8" />
      </SidebarHeader>

      <ScrollArea className="overflow-y-auto ">
        <SidebarContent>
          {sidebarMenu.map((group) => (
            <SidebarGroup key={group.title}>
              <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => {
                    const LucideIcon = Icons[
                      item.icon as keyof typeof Icons
                    ] as React.ElementType;

                    return (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <a
                            href={item.url}
                            className="flex items-center gap-2 text-sm"
                          >
                            <LucideIcon className="w-4 h-4" />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
      </ScrollArea>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
