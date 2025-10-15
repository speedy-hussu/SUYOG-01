import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

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
    header: ({ column }) => {
      const options = ["Morning", "Evening", "Night"];

      return (
        <div className="flex flex-col gap-1">
          <span className="font-medium">Shift</span>
          <Select
            onValueChange={(value) =>
              column.setFilterValue(value === "All" ? undefined : value)
            }
          >
            <SelectTrigger className="w-[120px] h-8">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              {options.map((shift) => (
                <SelectItem key={shift} value={shift}>
                  {shift}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      );
    },
    enableColumnFilter: true,
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "role",
    header: ({ column, table }) => {
      const uniqueRoles = Array.from(
        new Set(
          table
            .getPreFilteredRowModel()
            .rows.map((row) => row.getValue("role") as string) // 👈 cast to string
        )
      ).filter(Boolean); // removes undefined/null if any

      return (
        <div className="flex flex-col gap-1">
          <span className="font-medium">Role</span>
          <Select
            value={column.getFilterValue() as string | undefined}
            onValueChange={(value) =>
              column.setFilterValue(value === "All" ? undefined : value)
            }
          >
            <SelectTrigger className="w-[120px] h-8">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              {uniqueRoles.map((role) => (
                <SelectItem key={role} value={role}>
                  {role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      );
    },
    enableColumnFilter: true,
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
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
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
