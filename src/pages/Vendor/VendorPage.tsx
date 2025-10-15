import { vendorColumns, type Vendor } from "./Columns";
import { CustomerDataTable } from "./DataTable";

export default function VendorPage() {
  const data: Vendor[] = [
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

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold mb-4">Vendor Table</h1>
      </div>

      <CustomerDataTable columns={vendorColumns} data={data} />
    </div>
  );
}
