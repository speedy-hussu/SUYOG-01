import { ActionsColumn } from "@/components/common/columns";
import type { ColumnDef } from "@tanstack/react-table";

// ✅ Vendor type with relevant fields
export type Vendor = {
  id: string;
  vendor_name: string;
  phone: string;
  order_status: "Pending" | "Processing" | "Completed" | "Cancelled"; // example statuses
};

export const vendorColumns: ColumnDef<Vendor>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "vendor_name",
    header: "Vendor Name",
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
  ActionsColumn<Vendor>('vendor_name'),
];
