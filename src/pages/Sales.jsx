import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { stockOut } from "../productsSlice";
import { addMovement } from "../stockMovementsSlice";
import { createOrder } from "../ordersSlice";

export default function Sales() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.list);

  const [selectedId, setSelectedId] = useState("");
  const [qty, setQty] = useState(1);

const selectedProduct = products.find(
  p => p.id === Number(selectedId)
);

  const handleSale = () => {
    if (!selectedProduct) return;
    if (qty <= 0) return;
    if (selectedProduct.stock < qty) {
      alert("Остатка недостаточно");
      return;
    }

    const before = selectedProduct.stock;
    const after = before - qty;

    // 1️⃣ OSTATOK KAMAYADI
    dispatch(
      stockOut({
        productId: selectedProduct.id,
        quantity: qty
      })
    );

    // 2️⃣ DVIJENIYA YOZILADI
    dispatch(
      addMovement({
        productId: selectedProduct.id,
        type: "out",
        quantity: qty,
        before,
        after,
        reason: "Продажа",
        date: new Date().toISOString()
      })
    );

    // 3️⃣ MIN OSTADKADAN TUSHSA → ZAKAZ
    if (after < selectedProduct.minStock) {
      dispatch(
        createOrder({
          productId: selectedProduct.id,
          quantity: selectedProduct.minStock * 2
        })
      );
    }

    setQty(1);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Продажи</h1>

      <div className="bg-white p-4 rounded shadow max-w-md">
        <label className="block text-sm mb-1">Товар</label>
        <select
          className="w-full border p-2 rounded mb-3"
          value={selectedId}
          onChange={e => setSelectedId(e.target.value)}
        >
          <option value="">Выберите товар</option>
          {products.map(p => (
            <option key={p.id} value={p.id}>
              {p.name} (остаток: {p.stock})
            </option>
          ))}
        </select>

        <label className="block text-sm mb-1">Количество</label>
        <input
          type="number"
          min="1"
          className="w-full border p-2 rounded mb-4"
          value={qty}
          onChange={e => setQty(Number(e.target.value))}
        />

        <button
          onClick={handleSale}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
        >
          Продать
        </button>
      </div>
    </div>
  );
}
