import type { ColumnDef } from "@tanstack/react-table";
import { ActionsColumn } from "@/components/common/columns";
export type Ingredient = {
  id: string;
  ingredient_name: string;
  category: string;
  stock: string;
  cost_per_unit: number;
};

export const ingredientColumns: ColumnDef<Ingredient>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "ingredient_name", header: "Ingredient Name" },
  {
    accessorKey: "category",
    header: "Category",
    filterFn: "equals",
  },
  { accessorKey: "stock", header: "Stock" },
  {
    accessorKey: "cost_per_unit",
    header: "Cost/Unit",
    cell: ({ getValue }) => `₹${getValue<number>().toFixed(2)}`,
  },

  ActionsColumn<Ingredient>('ingredient_name'),
];
