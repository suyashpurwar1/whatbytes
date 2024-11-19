// src/components/Dashboard/Sidebar.jsx
import { FaTachometerAlt, FaMedal, FaClipboard } from "react-icons/fa";

const Sidebar = () => (
  <aside className="bg-gray-50 p-4 h-screen shadow border-slate-300">
    <nav className="space-y-6">
      <br />
      <a className="flex items-center text-black hover:text-blue-500 space-x-2 md:pl-7 pl-3">
        <FaTachometerAlt className="mr-2" />
        <span className="hidden md:inline">
          <strong>Dashboard</strong>
        </span>
      </a>
      <a className="flex items-center text-black hover:text-blue-500 space-x-2 md:pl-7 pl-3">
        <FaMedal className="mr-2" />
        <span className="hidden md:inline">
          <strong>Skill Test</strong>
        </span>
      </a>
      <a className="flex items-center text-black hover:text-blue-500 space-x-2 md:pl-7 pl-3">
        <FaClipboard className="mr-2" />
        <span className="hidden md:inline">
          <strong>Internship</strong>
        </span>
      </a>
    </nav>
  </aside>
);

export default Sidebar;
