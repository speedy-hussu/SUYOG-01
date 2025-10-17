// src/components/tables/IngredientDataTable.tsx
import * as React from "react";
import type {
  ColumnDef,
  SortingState,
  ColumnFiltersState,
} from "@tanstack/react-table";
import { FileUp } from "lucide-react";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Combobox } from "@/components/common/SelectCombobox";
import IngredientFormModal from "@/components/forms/IngredientFormModal";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function IngredientDataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [globalFilter, setGlobalFilter] = React.useState("");

  const table = useReactTable({
    data,
    columns,
    state: { sorting, columnFilters, globalFilter },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: (row, filterValue) => {
      const name = row.getValue("ingredient_name") as string;
      const id = row.getValue("id") as string;
      const filter = (filterValue as string).toLowerCase();

      return (
        name.toLowerCase().includes(filter) || id.toLowerCase().includes(filter)
      );
    },
  });

  // ✅ Category filter options for Combobox
  const categoryOptions = [
    { value: "", label: "All Categories" },
    { value: "Vegetable", label: "Vegetable" },
    { value: "Fruit", label: "Fruit" },
    { value: "Dairy", label: "Dairy" },
    { value: "Spices", label: "Spices" },
    { value: "Grains", label: "Grains" },
  ];

  return (
    <div>
      {/* ✅ Filters and Actions */}
      <div className="flex py-2 gap-5 items-center">
        {/* Search Filter - Only affects name and ID */}
        <Input
          placeholder="Search by name or ID..."
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="max-w-sm"
        />

        {/* Category Combobox Filter - Independent filter */}
        <Combobox
          options={categoryOptions}
          placeholder="Filter by category"
          selectedValue={
            (table.getColumn("category")?.getFilterValue() as string) ?? ""
          }
          onValueChange={(value) =>
            table
              .getColumn("category")
              ?.setFilterValue(value === "" ? undefined : value)
          }
        />

        {/* Add Ingredient Modal */}
        <IngredientFormModal />

        {/* Export Button */}
        <Button className="bg-white border border-gray-400 text-gray-600">
          Export
          <FileUp className="ml-2 text-gray-500 h-4 w-4" />
        </Button>
      </div>

      {/* ✅ Table */}
      <ScrollArea className="h-100">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No ingredients found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </ScrollArea>

      {/* ✅ Pagination */}
      <div className="flex items-center justify-end space-x-2 p-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
        <div className="text-sm">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
      </div>
    </div>
  );
}
