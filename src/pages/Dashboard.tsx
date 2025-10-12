import AppHeader from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="h-full w-full flex">
      <Sidebar />
      <AppHeader />
    </div>
  );
}
