import * as React from "react";
import { DataTable } from "@/components/ui/data-table";
import { vendorColumns, type Vendor } from "./Columns";
import { CustomerFormModal } from "@/components/forms/CustomerFormModal";
import { Combobox } from "@/components/common/SelectCombobox";
import { Button } from "@/components/ui/button";
import { FileUp } from "lucide-react";
import Layout from "../Layout";

export default function VendorPage() {
const vendorData: Vendor[] = [
  {
    id: "A1F3",
    vendor_name: "Arjun Mehra",
    phone: "9876543210",
    order_status: "Pending",
  },
  {
    id: "B2E8",
    vendor_name: "Sonia Verma",
    phone: "9123456780",
    order_status: "Pending",
  },
  {
    id: "C4D9",
    vendor_name: "Rahul Malhotra",
    phone: "9988776655",
    order_status: "Cancelled",
  },
  {
    id: "D5A7",
    vendor_name: "Pooja Chatterjee",
    phone: "9012345678",
    order_status: "Completed",
  },
  {
    id: "E6B2",
    vendor_name: "Vikram Singhania",
    phone: "9345678901",
    order_status: "Pending",
  },
  {
    id: "F7C1",
    vendor_name: "Anjali Nair",
    phone: "9234567890",
    order_status: "Completed",
  },
  {
    id: "8D9E",
    vendor_name: "Sanjay Iyer",
    phone: "9456789012",
    order_status: "Processing",
  },
  {
    id: "9A4F",
    vendor_name: "Meera Krishnan",
    phone: "9567890123",
    order_status: "Completed",
  },
  {
    id: "1B5C",
    vendor_name: "Deepak Rao",
    phone: "9678901234",
    order_status: "Pending",
  },
  {
    id: "2C6D",
    vendor_name: "Kavita Banerjee",
    phone: "9789012345",
    order_status: "Cancelled",
  },
  {
    id: "3E7A",
    vendor_name: "Nitin Thakur",
    phone: "9890123456",
    order_status: "Processing",
  },
  {
    id: "4F8B",
    vendor_name: "Swati Menon",
    phone: "9901234567",
    order_status: "Completed",
  },
  {
    id: "5A9C",
    vendor_name: "Rohan Choudhary",
    phone: "9912345678",
    order_status: "Pending",
  },
  {
    id: "6B0D",
    vendor_name: "Tanvi Kapoor",
    phone: "9923456789",
    order_status: "Cancelled",
  },
  {
    id: "7C1E",
    vendor_name: "Manish Agarwal",
    phone: "9934567890",
    order_status: "Completed",
  },
  {
    id: "8D2F",
    vendor_name: "Shreya Ghosh",
    phone: "9945678901",
    order_status: "Processing",
  },
  {
    id: "9E3A",
    vendor_name: "Abhishek Joshi",
    phone: "9956789012",
    order_status: "Pending",
  },
  {
    id: "A4B5",
    vendor_name: "Divya Saxena",
    phone: "9967890123",
    order_status: "Completed",
  },
  {
    id: "B5C6",
    vendor_name: "Alok Mishra",
    phone: "9978901234",
    order_status: "Cancelled",
  },
  {
    id: "C6D7",
    vendor_name: "Preeti Reddy",
    phone: "9989012345",
    order_status: "Processing",
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
          <h1 className="text-2xl font-bold mb-4">Vendor Table</h1>
        </div>

        <DataTable
          columns={vendorColumns}
          filters={filters}
          globalFilterKeys={["vendor_name", "phone","id"]}
          placeholder="search by name or phone"
          headerActions={headerActions}
          data={vendorData.filter(
            (e) => !statusFilter || e.order_status === statusFilter
          )}
        />
      </div>
    </Layout>
  );
}
