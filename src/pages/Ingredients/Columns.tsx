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
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const ingredient = row.original;
      const handleEdit = () => console.log("Edit:", ingredient);
      const handleDelete = () => console.log("Delete:", ingredient.id);

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
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
