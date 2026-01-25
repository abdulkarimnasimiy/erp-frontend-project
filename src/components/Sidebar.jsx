import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `block px-4 py-2 rounded text-sm font-medium transition
   ${isActive ? "bg-blue-600 text-white" : "text-blue-300 hover:bg-gray-800"}`;

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white p-5">
      <div className="text-2xl font-bold mb-8">
        Store ERP
      </div>

      <nav className="space-y-2">
        <NavLink to="/" className={linkClass}>
          Панель управления
        </NavLink>

        <NavLink to="/products" className={linkClass}>
          Товары
        </NavLink>

        <NavLink to="/stock-in" className={linkClass}>
          Приход товара
        </NavLink>

        <NavLink to="/sales" className={linkClass}>
          Продажи
        </NavLink>
      </nav>
    </aside>
  );
}
