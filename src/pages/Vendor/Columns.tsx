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

// ✅ Customer type with relevant fields
export type Vendor = {
  id: string;
  customer_name: string;
  phone: string;
  order_status: "Pending" | "Processing" | "Completed" | "Cancelled"; // example statuses
};

export const vendorColumns: ColumnDef<Vendor>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "customer_name",
    header: "Customer Name",
  },
  {
    accessorKey: "phone",
    header: "Phone No.",
  },
  {
    accessorKey: "order_status",
    header: "Order Status",
    filterFn: "equals",
    cell: ({ getValue }) => {
      const status = getValue<string>();
      const color =
        status === "Completed"
          ? "text-green-600"
          : status === "Pending"
            ? "text-yellow-600"
            : status === "Cancelled"
              ? "text-red-600"
              : "text-blue-600";
      return <span className={color}>{status}</span>;
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const customer = row.original;

      const handleView = () => {
        console.log("View details for:", customer);
      };

      const handleEdit = () => {
        console.log("Edit customer:", customer);
      };

      const handleDelete = () => {
        console.log("Delete customer:", customer.id);
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem onClick={handleView}>
              View Details
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleDelete}
              className="text-red-600 focus:text-red-700"
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
