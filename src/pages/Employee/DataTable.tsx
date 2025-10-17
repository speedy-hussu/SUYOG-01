import * as React from "react";
import type { ColumnDef, SortingState } from "@tanstack/react-table";
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
import { EmployeeFormModal } from "@/components/forms/EmployeeFormModal";

import { Combobox } from "@/components/common/SelectCombobox";

// Define types
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [nameFilter, setNameFilter] = React.useState("");
  const [roleFilter, setRoleFilter] = React.useState("");
  const [shiftFilter, setShiftFilter] = React.useState("");

  const table = useReactTable({
    data,
    columns,
    state: { sorting, globalFilter: nameFilter },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setNameFilter,
    globalFilterFn: (row, filterValue) => {
      // ✅ Three parameters
      const name = row.getValue("name")?.toString().toLowerCase() ?? "";
      const id = row.getValue("id")?.toString().toLowerCase() ?? "";
      const searchTerm = filterValue.toLowerCase();

      return name.includes(searchTerm) || id.includes(searchTerm);
    },
  });

  // Apply filters manually
  React.useEffect(() => {
    table.getColumn("role")?.setFilterValue(roleFilter);
    table.getColumn("shift")?.setFilterValue(shiftFilter);
    table.setGlobalFilter(nameFilter);
  }, [nameFilter, roleFilter, shiftFilter, table]);

  const roleOptions = [
    { value: "", label: "All Roles" },
    { value: "Admin", label: "Admin" },
    { value: "Manager", label: "Manager" },
    { value: "Employee", label: "Employee" },
  ];

  const shiftOptions = [
    { value: "", label: "All Shifts" },
    { value: "Morning", label: "Morning" },
    { value: "Evening", label: "Evening" },
    { value: "Night", label: "Night" },
  ];

  return (
    <div>
      <div className="flex py-2 gap-5">
        <Input
          placeholder="Filter by name or Id..."
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          className="max-w-sm"
        />

        <Combobox
          options={shiftOptions}
          placeholder="Filter by shift"
          selectedValue={shiftFilter}
          onValueChange={(val) => setShiftFilter(val)}
        />
        <Combobox
          options={roleOptions}
          placeholder="Filter by role"
          selectedValue={roleFilter}
          onValueChange={(val) => setRoleFilter(val)}
        />
        <EmployeeFormModal />
        <Button className="bg-white border border-gray-400 text-gray-600">
          Export
          <FileUp className="text-gray-500" />
        </Button>
      </div>

      <ScrollArea className="h-100">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((hg) => (
              <TableRow key={hg.id}>
                {hg.headers.map((header) => (
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
                  No employees found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </ScrollArea>

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
