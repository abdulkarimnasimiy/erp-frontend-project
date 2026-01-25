import { useSelector } from "react-redux";

export default function ProductMovementsModal({ product, onClose }) {
  const movements = useSelector(state =>
    state.movements.list.filter(m => m.productId === product.id)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* modal */}
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-3xl p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-lg font-semibold">
              Движение товара
            </h2>
            <p className="text-sm text-gray-500">
              {product.name}
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black"
          >
            ✕
          </button>
        </div>

        {movements.length === 0 ? (
          <p className="text-gray-500 text-sm">
            По этому товару движений нет
          </p>
        ) : (
          <div className="border rounded overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-2">Дата</th>
                  <th className="p-2">Тип</th>
                  <th className="p-2">Кол-во</th>
                  <th className="p-2">Было</th>
                  <th className="p-2">Стало</th>
                  <th className="p-2">Причина</th>
                </tr>
              </thead>
              <tbody>
                {movements.map(m => (
                  <tr key={m.id} className="border-t">
                    <td className="p-2">
                      {new Date(m.createdAt).toLocaleString()}
                    </td>
                    <td className="p-2">
                      {m.type === "IN" ? "Приход" : "Расход"}
                    </td>
                    <td className="p-2">{m.quantity}</td>
                    <td className="p-2">{m.before}</td>
                    <td className="p-2">{m.after}</td>
                    <td className="p-2">{m.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
