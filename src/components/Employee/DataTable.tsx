"use client";
import * as React from "react";
import type { ColumnDef } from "@tanstack/react-table";
import type { SortingState } from "@tanstack/react-table";
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
import { ScrollArea } from "../ui/scroll-area";
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}
export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilter, setColumnFilter] = React.useState("");
  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });
  return (
    <div>
      {" "}
      {/* Example filter on name */}{" "}
      <div className="py-2">
        {" "}
        <Input
          placeholder="Filter by name..."
          value={columnFilter}
          onChange={(e) => {
            const v = e.target.value;
            setColumnFilter(v);
            table.getColumn("name")?.setFilterValue(v);
          }}
          className="max-w-sm"
        />{" "}
      </div>{" "}
      <ScrollArea className="h-100">
        {" "}
        <Table>
          {" "}
          <TableHeader>
            {" "}
            {table.getHeaderGroups().map((hg) => (
              <TableRow key={hg.id}>
                {" "}
                {hg.headers.map((header) => (
                  <TableHead key={header.id}>
                    {" "}
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}{" "}
                  </TableHead>
                ))}{" "}
              </TableRow>
            ))}{" "}
          </TableHeader>{" "}
          <TableBody>
            {" "}
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {" "}
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {" "}
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}{" "}
                    </TableCell>
                  ))}{" "}
                </TableRow>
              ))
            ) : (
              <TableRow>
                {" "}
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  {" "}
                  No employees found.{" "}
                </TableCell>{" "}
              </TableRow>
            )}{" "}
          </TableBody>{" "}
        </Table>{" "}
      </ScrollArea>{" "}
      {/* Simple pagination */}{" "}
      <div className="flex items-center justify-end space-x-2 p-2">
        {" "}
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {" "}
          Previous{" "}
        </Button>{" "}
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {" "}
          Next{" "}
        </Button>{" "}
        <div className="text-sm">
          {" "}
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
