import { useDispatch, useSelector } from "react-redux";

import { stockIn } from "../productsSlice";
import { addMovement } from "../stockMovementsSlice";
import { closeOrder } from "../ordersSlice";

export default function StockIn() {
  const dispatch = useDispatch();

  const orders = useSelector(state =>
    state.orders.list.filter(o => o.status === "open")
  );
  const products = useSelector(state => state.products.list);

  const handleAccept = (order) => {
    const product = products.find(p => p.id === order.productId);
    if (!product) return;

    const before = product.stock;
    const after = before + order.quantity;

    // 1️⃣ STOCK OSHADI
    dispatch(
      stockIn({
        productId: product.id,
        quantity: order.quantity,
      })
    );

    // 2️⃣ DVIJENIYA (IN) YOZILADI
    dispatch(
      addMovement({
        productId: product.id,
        type: "IN",
        quantity: order.quantity,
        before,
        after,
        reason: "Приход по заказу",
        date: new Date().toISOString(),
      })
    );

    // 3️⃣ ZAKAZ YOPILADI
    dispatch(closeOrder(order.id));
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">
        Приход товара
      </h1>

      {orders.length === 0 ? (
        <div className="text-gray-500">
          Нет открытых заказов
        </div>
      ) : (
        <div className="bg-white rounded border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-3 text-left">Товар</th>
                <th className="p-3 text-center">Кол-во</th>
                <th className="p-3 text-center">Действие</th>
              </tr>
            </thead>

            <tbody>
              {orders.map(order => {
                const product = products.find(
                  p => p.id === order.productId
                );

                return (
                  <tr key={order.id} className="border-t">
                    <td className="p-3">
                      {product?.name || "—"}
                    </td>

                    <td className="p-3 text-center">
                      {order.quantity}
                    </td>

                    <td className="p-3 text-center">
                      <button
                        onClick={() => handleAccept(order)}
                        className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                      >
                        Принять
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
