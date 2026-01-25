export default function Header() {
  return (
    <header className="h-14 bg-white border-b flex items-center justify-between px-6">
      <span className="font-semibold text-gray-700">
        Панель управления
      </span>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-500">
          Admin
        </span>
        <button className="text-sm text-red-500 hover:underline">
          Выход
        </button>
      </div>
    </header>
  );
}
