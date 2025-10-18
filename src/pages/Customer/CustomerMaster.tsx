import * as React from "react";
import { DataTable } from "@/components/ui/data-table";
import { Combobox } from "@/components/common/SelectCombobox";
import { customerColumns, type Customer } from "./CustomerColumns";
import Layout from "../Layout";
import { FileUp } from "lucide-react";
import { CustomerFormModal } from "@/components/forms/CustomerFormModal";
import { Button } from "@/components/ui/button";

export default function CustomerPage() {
  const customerData: Customer[] = [
    {
      id: "C001",
      customer_name: "Amit Patel",
      phone: "9876543210",
      order_status: "Pending",
    },
    {
      id: "C002",
      customer_name: "Priya Sharma",
      phone: "9123456780",
      order_status: "Pending",
    },
    {
      id: "C003",
      customer_name: "Rajesh Kumar",
      phone: "9988776655",
      order_status: "Cancelled",
    },
    {
      id: "C004",
      customer_name: "Neha Desai",
      phone: "9012345678",
      order_status: "Completed",
    },
    {
      id: "C005",
      customer_name: "Rohit Mehta",
      phone: "9345678901",
      order_status: "Pending",
    },
    {
      id: "C006",
      customer_name: "Simran Kaur",
      phone: "9234567890",
      order_status: "Completed",
    },
    {
      id: "C007",
      customer_name: "Karan Singh",
      phone: "9456789012",
      order_status: "Processing",
    },
    {
      id: "C008",
      customer_name: "Isha Patel",
      phone: "9567890123",
      order_status: "Completed",
    },
    {
      id: "C009",
      customer_name: "Vivek Joshi",
      phone: "9678901234",
      order_status: "Pending",
    },
    {
      id: "C010",
      customer_name: "Sneha Reddy",
      phone: "9789012345",
      order_status: "Cancelled",
    },
    {
      id: "C010",
      customer_name: "Sneha Reddy",
      phone: "9789012345",
      order_status: "Cancelled",
    },
    {
      id: "C010",
      customer_name: "Sneha Reddy",
      phone: "9789012345",
      order_status: "Cancelled",
    },
  ];

  const [statusFilter, setStatusFilter] = React.useState("");
  const orderStatus = [
    { value: "", label: "All Status" },
    { value: "Pending", label: "Pending" },
    { value: "Processing", label: "Processing" },
    { value: "Completed", label: "Completed" },
    { value: "Cancelled", label: "Cancelled" },
  ];
  const filters = (
    <Combobox
      options={orderStatus}
      selectedValue={statusFilter}
      onValueChange={setStatusFilter}
    />
  );
  const headerActions = (
    <>
      <CustomerFormModal />
      <Button className="bg-white border border-gray-400 text-gray-600">
        Export
        <FileUp className="ml-2 h-4 w-4 text-gray-500" />
      </Button>
    </>
  );
  return (
    <Layout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold mb-4">Customer Table</h1>
        </div>

        <DataTable
          columns={customerColumns}
          globalFilterKeys={["customer_name", "phone"]}
          placeholder="search by name or phone"
          filters={filters}
          data={customerData.filter(
            (e) => !statusFilter || e.order_status == statusFilter
          )}
          headerActions={headerActions}
        />
      </div>
    </Layout>
  );
}
