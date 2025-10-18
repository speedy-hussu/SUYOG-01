import { DataTable } from "@/components/ui/data-table";
import { EmployeeFormModal } from "@/components/forms/EmployeeFormModal";
import { employeeColumns, type Employee } from "./EmployeeColumns";
import { Button } from "@/components/ui/button";
import { FileUp } from "lucide-react";
import { Combobox } from "@/components/common/SelectCombobox";
import * as React from "react";
import Layout from "../Layout";

// ✅ Example employee data
const employeeData: Employee[] = [
  {
    id: "1",
    name: "Alice Johnson",
    phone: "9876543210",
    salary: 50000,
    address: "1234 Elm Street, Ahmedabad",
    shift: "Morning",
    role: "Software Engineer",
  },
  {
    id: "2",
    name: "Bob Smith",
    phone: "9123456780",
    salary: 60000,
    address: "4321 Oak Avenue, Surat",
    shift: "Evening",
    role: "Team Lead",
  },
  {
    id: "3",
    name: "Charlie Brown",
    phone: "9988776655",
    salary: 55000,
    address: "5678 Pine Road, Vadodara",
    shift: "Night",
    role: "Support Engineer",
  },
  {
    id: "4",
    name: "Diana Patel",
    phone: "9012345678",
    salary: 62000,
    address: "7890 Maple Street, Rajkot",
    shift: "Morning",
    role: "QA Analyst",
  },
  {
    id: "5",
    name: "Ethan Shah",
    phone: "9345678901",
    salary: 58000,
    address: "2468 Cedar Lane, Bhavnagar",
    shift: "Evening",
    role: "Backend Developer",
  },
  {
    id: "6",
    name: "Fiona Mehta",
    phone: "9234567890",
    salary: 61000,
    address: "1357 Birch Road, Jamnagar",
    shift: "Night",
    role: "Frontend Developer",
  },
  {
    id: "7",
    name: "George Thomas",
    phone: "9456789012",
    salary: 54000,
    address: "9753 Spruce Blvd, Junagadh",
    shift: "Morning",
    role: "DevOps Engineer",
  },
  {
    id: "8",
    name: "Hannah Desai",
    phone: "9567890123",
    salary: 59000,
    address: "8642 Willow Street, Gandhinagar",
    shift: "Evening",
    role: "UI/UX Designer",
  },
  {
    id: "9",
    name: "Ishaan Kumar",
    phone: "9678901234",
    salary: 63000,
    address: "7531 Chestnut Ave, Anand",
    shift: "Morning",
    role: "Project Manager",
  },
  {
    id: "10",
    name: "Jaya Singh",
    phone: "9789012345",
    salary: 57000,
    address: "6420 Redwood Dr, Nadiad",
    shift: "Night",
    role: "Business Analyst",
  },
  {
    id: "11",
    name: "Kevin Fernandes",
    phone: "9890123456",
    salary: 60000,
    address: "5319 Magnolia Way, Bharuch",
    shift: "Evening",
    role: "Scrum Master",
  },
  {
    id: "12",
    name: "Lata Joshi",
    phone: "9901234567",
    salary: 52000,
    address: "4208 Aspen Court, Mehsana",
    shift: "Morning",
    role: "HR Executive",
  },
  {
    id: "13",
    name: "Mohit Rana",
    phone: "9012345670",
    salary: 65000,
    address: "3197 Cypress Rd, Palanpur",
    shift: "Night",
    role: "Database Admin",
  },
  {
    id: "14",
    name: "Nisha Kapoor",
    phone: "9123456781",
    salary: 61000,
    address: "2086 Beech St, Bhuj",
    shift: "Evening",
    role: "Network Engineer",
  },
  {
    id: "15",
    name: "Om Prakash",
    phone: "9234567892",
    salary: 56000,
    address: "1975 Dogwood Ave, Porbandar",
    shift: "Morning",
    role: "Security Analyst",
  },
  {
    id: "16",
    name: "Priya Nair",
    phone: "9345678903",
    salary: 64000,
    address: "1864 Poplar Dr, Vapi",
    shift: "Night",
    role: "QA Lead",
  },
  {
    id: "17",
    name: "Ravi Shankar",
    phone: "9456789014",
    salary: 59000,
    address: "1753 Hawthorn Ln, Dahod",
    shift: "Morning",
    role: "Software Architect",
  },
  {
    id: "18",
    name: "Sneha Reddy",
    phone: "9567890125",
    salary: 53000,
    address: "1642 Alder Blvd, Surendranagar",
    shift: "Evening",
    role: "Content Writer",
  },
  {
    id: "19",
    name: "Tanmay Bhat",
    phone: "9678901236",
    salary: 62000,
    address: "1531 Sycamore Rd, Amreli",
    shift: "Night",
    role: "Product Owner",
  },
  {
    id: "20",
    name: "Usha Verma",
    phone: "9789012347",
    salary: 60000,
    address: "1420 Hemlock Way, Navsari",
    shift: "Morning",
    role: "Finance Analyst",
  },
];

export default function EmployeePage() {
  const [roleFilter, setRoleFilter] = React.useState("");
  const [shiftFilter, setShiftFilter] = React.useState("");

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

  const filters = (
    <>
      <Combobox
        options={shiftOptions}
        placeholder="Filter by shift"
        selectedValue={shiftFilter}
        onValueChange={setShiftFilter}
      />
      <Combobox
        options={roleOptions}
        placeholder="Filter by role"
        selectedValue={roleFilter}
        onValueChange={setRoleFilter}
      />
    </>
  );

  const headerActions = (
    <>
      <EmployeeFormModal />
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
          <h1 className="text-2xl font-bold mb-4">Employee Table</h1>
        </div>

        <DataTable
          columns={employeeColumns}
          data={employeeData.filter(
            (e) =>
              (!roleFilter || e.role === roleFilter) &&
              (!shiftFilter || e.shift === shiftFilter)
          )}
          globalFilterKeys={["id", "name"]}
          placeholder="Search by name or ID..."
          filters={filters}
          headerActions={headerActions}
        />
      </div>
    </Layout>
  );
}
