import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Define your Employee type
export type Employee = {
  id: string;
  name: string;
  phone: string;
  salary: number;
  address: string;
  shift: "Morning" | "Evening" | "Night"; // or just `string` if not fixed
  role: string;
};

export const employeeColumns: ColumnDef<Employee>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "name",
    header: "Employee Name",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "phone",
    header: "Phone No.",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "salary",
    header: "Salary",
    cell: (info) => {
      const val = info.getValue<number>();
      return val.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
      });
    },
  },

  {
    accessorKey: "address",
    header: "Address",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "shift",
    header: "Shift",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: (info) => info.getValue(),
  },
  {
    id: "actions",
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600 focus:text-red-700">
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
