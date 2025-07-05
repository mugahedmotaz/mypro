// شريط تنقل علوي لجميع الصفحات
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-white shadow p-4 flex gap-4 justify-center">
    <Link to="/" className="font-bold text-blue-700">Dashboard</Link>
    <Link to="/habits" className="font-bold text-blue-700">Habits</Link>
    <Link to="/progress" className="font-bold text-blue-700">Progress</Link>
    <Link to="/mindset" className="font-bold text-blue-700">Mindset</Link>
    <Link to="/ai" className="font-bold text-blue-700">AI Assistant</Link>
  </nav>
);

export default Navbar;
