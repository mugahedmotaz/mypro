// صفحة لوحة التحكم
import DashboardCard from '../components/DashboardCard';

const Dashboard = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
    <DashboardCard title="Completed Tasks" value={5} color="border-blue-600" />
    <DashboardCard title="Active Habits" value={3} color="border-green-600" />
    <DashboardCard title="Last Update" value={"اليوم"} color="border-gray-400" />
  </div>
);

export default Dashboard;
