import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4 hidden md:block">
      <h2 className="text-xl font-bold mb-6">FlowSense</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:text-blue-400">Dashboard</Link>
        <Link to="/settings" className="hover:text-blue-400">Settings</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
