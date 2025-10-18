import type { ColumnDef } from "@tanstack/react-table";
import { ActionsColumn } from "@/components/common/columns";

export type Employee = {
  id: string;
  name: string;
  phone: string;
  salary: number;
  address: string;
  shift: "Morning" | "Evening" | "Night";
  role: string;
};

export const employeeColumns: ColumnDef<Employee>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Name" },
  { accessorKey: "phone", header: "Phone" },
  {
    accessorKey: "salary",
    header: "Salary",
    cell: (info) =>
      info.getValue<number>().toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
      }),
  },
  { accessorKey: "address", header: "Address" },
  { accessorKey: "shift", header: "Shift" },
  { accessorKey: "role", header: "Role" },
  ActionsColumn<Employee>('name'), // ✅ Reusable dropdown column
];
