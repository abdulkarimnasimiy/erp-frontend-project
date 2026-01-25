export default function Dashboard() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">
        Панель управления
      </h1>

      <div className="grid grid-cols-4 gap-4">
        <StatCard title="Товаров" value="124" />
        <StatCard title="Сегодня продаж" value="12" />
        <StatCard title="Доход" value="3 200 000 сум" />
        <StatCard title="На складе" value="87" />
      </div>
    </>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="text-sm text-gray-500">
        {title}
      </div>
      <div className="text-xl font-bold mt-2">
        {value}
      </div>
    </div>
  );
}
