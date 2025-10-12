import { useEffect, useRef, useState } from "react";
import {
  LayoutDashboard,
  ShoppingCart,
  UtensilsCrossed,
  Package,
  Users,
  Receipt,
  FileText,
  ShieldCheck,
  Settings,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import Logo from "../assets/logo.svg";
import { useSidebar } from "@/zustand/sidebar";
interface SubMenuItem {
  name: string;
}

interface MenuItem {
  name: string;
  icon: React.ReactNode;
  subItems?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    subItems: [{ name: "Stats" }],
  },
  {
    name: "Orders & Bookings",
    icon: <ShoppingCart size={20} />,
    subItems: [
      { name: "Daily Orders" },
      { name: "Bulk / Event Bookings" },
      { name: "Quotations" },
    ],
  },
  {
    name: "Menu & Recipes",
    icon: <UtensilsCrossed size={20} />,
    subItems: [{ name: "Dishes" }, { name: "Menu Planner" }],
  },
  {
    name: "Inventory",
    icon: <Package size={20} />,
    subItems: [
      { name: "Ingredients" },
      { name: "Stock & Purchase Orders" },
      { name: "Wastage" },
    ],
  },
  {
    name: "Employees",
    icon: <Users size={20} />,
    subItems: [
      { name: "Staff List" },
      { name: "Attendance & Shifts" },
      { name: "Payroll" },
    ],
  },
  {
    name: "Billing & Accounts",
    icon: <Receipt size={20} />,
    subItems: [
      { name: "POS / Counter Billing" },
      { name: "Invoices" },
      { name: "Corporate Accounts" },
    ],
  },
  {
    name: "Reports",
    icon: <FileText size={20} />,
    subItems: [
      { name: "Daily / Monthly Reports" },
      { name: "Sales & Stock Analytics" },
    ],
  },
  {
    name: "Compliance",
    icon: <ShieldCheck size={20} />,
    subItems: [{ name: "GST Reports" }, { name: "Audit Logs" }],
  },
  {
    name: "Settings",
    icon: <Settings size={20} />,
    subItems: [{ name: "Company Setup" }, { name: "Users & Roles" }],
  },
  {
    name: "Help / Support",
    icon: <HelpCircle size={20} />,
  },
];

export default function Sidebar() {
  const [expandedItem, setExpandedItem] = useState<string | null>("Dashboard");
  const [activeSubItem, setActiveSubItem] = useState<string | null>(null);
  const submenuRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [submenuHeights, setSubmenuHeights] = useState<Record<string, number>>(
    {}
  );

  const {
    isSidebarCollapsed,
    isHovered,
    setIsHovered,
  } = useSidebar();

  const isSidebarExpanded = !isSidebarCollapsed || isHovered;

  const toggleExpand = (itemName: string) => {
    setExpandedItem((prev) => (prev === itemName ? null : itemName));
  };

  const handleSubItemClick = (parentName: string, subItemName: string) => {
    setExpandedItem(parentName);
    setActiveSubItem(subItemName);
  };

  useEffect(() => {
    menuItems.forEach((item) => {
      if (item.subItems && submenuRefs.current[item.name]) {
        setSubmenuHeights((prev) => ({
          ...prev,
          [item.name]: submenuRefs.current[item.name]?.scrollHeight || 0,
        }));
      }
    });
  }, [expandedItem]);

  return (
    <div
      className={`relative h-screen border-r border-gray-200 bg-white transition-all duration-300 ease-in-out
      ${isSidebarExpanded ? "w-70" : "w-20"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Collapse Toggle */}

      {/* Logo */}
      <div className="h-15 w-full  flex items-center justify-center border-b border-gray-300">
        {isSidebarExpanded ? (
          <h1 className="text-2xl px-6 py-6 font-bold text-gray-800">suyog</h1>
        ) : (
          <div className="h-full w-20  flex items-center justify-center">
            <img src={Logo} alt="Logo" />
          </div>
        )}
      </div>

      {/* Menu */}
      <div className=" px-4  overflow-y-auto h-[calc(100vh-80px)] [&::-webkit-scrollbar]:hidden">
        <div className="my-5 ">
          <nav className="flex flex-col gap-3">
            {menuItems.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() => item.subItems && toggleExpand(item.name)}
                  className={`h-10 w-full flex items-center ${
                    isSidebarExpanded ? "justify-between" : "justify-center"
                  } px-2 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                    expandedItem === item.name
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-gray-700 hover:bg-gray-50"
                  } hover:bg-gray-200`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`${
                        expandedItem === item.name
                          ? "text-indigo-600"
                          : "text-gray-500"
                      }`}
                    >
                      {item.icon}
                    </span>
                    {isSidebarExpanded && <span>{item.name}</span>}
                  </div>
                  {isSidebarExpanded && item.subItems && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        expandedItem === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Submenu */}
                {item.subItems && (
                  <div
                    ref={(el) => {
                      submenuRefs.current[item.name] = el;
                    }}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isSidebarExpanded ? "ml-9" : ""
                    }`}
                    style={{
                      height:
                        expandedItem === item.name && isSidebarExpanded
                          ? `${submenuHeights[item.name] || 0}px`
                          : "0px",
                    }}
                  >
                    <ul className="flex flex-col gap-2 mt-2">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.name}>
                          <button
                            onClick={() =>
                              handleSubItemClick(item.name, subItem.name)
                            }
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                              activeSubItem === subItem.name
                                ? "bg-indigo-100 text-indigo-700"
                                : "text-gray-600 hover:bg-gray-200"
                            }`}
                          >
                            {subItem.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
