// بطاقة ملخص للوحة التحكم
const DashboardCard = ({ title, value, color }) => (
  <div className={`bg-white rounded shadow p-4 text-center border-t-4 ${color}`}>
    <div className="text-2xl font-bold mb-2">{value}</div>
    <div className="text-gray-600">{title}</div>
  </div>
);

export default DashboardCard;
