import { EmployeeFormModal } from "@/components/EmployeeFormModal";
import Layout from "./Layout";
function Dashboard() {
  return (
    <Layout>
      <div className="bg-gray-100">
        <EmployeeFormModal />
      </div>
    </Layout>
  );
}

export default Dashboard;
