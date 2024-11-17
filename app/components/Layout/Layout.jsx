// src/components/Layout/Layout.jsx
import Header from "./Header";
import Sidebar from "../Dashboard/Sidebar";

const Layout = ({ children }) => (
  <div className="flex flex-col h-screen">
    <header className="w-full fixed top-0 left-0 z-50">
      <Header />
    </header>
    <div className="flex flex-1 pt-16">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r">
        <Sidebar />
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 bg-gray-100 overflow-auto">{children}</main>
    </div>
  </div>
);

export default Layout;
