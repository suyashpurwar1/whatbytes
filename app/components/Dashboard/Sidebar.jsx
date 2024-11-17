// src/components/Dashboard/Sidebar.jsx
import { FaTachometerAlt, FaMedal, FaClipboard } from "react-icons/fa";

const Sidebar = () => (
  <aside className="w-55 bg-gray-50 p-4 h-screen shadow border-slate-300">
    <nav className="space-y-6">
      <br />
      <a className="flex items-center text-black hover:text-blue-500 space-x-2 space-y-2.5">
        <FaTachometerAlt />
        <span>
          <strong>Dashboard</strong>
        </span>
      </a>
      <a className="flex items-center text-black hover:text-blue-500 space-x-2 space-y-2.5">
        <FaMedal />
        <span>
          <strong>Skill Test</strong>
        </span>
      </a>
      <a className="flex items-center text-black hover:text-blue-500 space-x-2 space-y-2.5">
        <FaClipboard />
        <span>
          <strong>Internship</strong>
        </span>
      </a>
    </nav>
  </aside>
);

export default Sidebar;