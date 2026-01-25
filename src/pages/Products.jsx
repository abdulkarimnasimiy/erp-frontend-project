import { useSelector } from "react-redux";
import { useState } from "react";

import selectFilteredProducts from "../selectors/selectFilteredProducts";
import ProductsFilters from "../components/ProductsFilters";
import ProductMovementsModal from "../components/ProductMovementModal";

export default function Products() {
  // FILTER + SORT QILINGAN MAHSULOTLAR
  const products = useSelector(selectFilteredProducts);

  // MODAL
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      {/* PAGE HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Товары</h1>
        <div className="text-sm text-gray-500">
          Найдено: {products.length}
        </div>
      </div>

      {/* FILTERS */}
      <ProductsFilters />

      {/* TABLE */}
      <div className="bg-white border rounded overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="p-3 text-left">Товар</th>
              <th className="p-3 text-left">Категория</th>
              <th className="p-3 text-left">Штрихкод</th>
              <th className="p-3 text-right">Цена</th>
              <th className="p-3 text-right">Остаток</th>
              <th className="p-3 text-right">Мин.</th>
              <th className="p-3 text-center">Статус</th>
            </tr>
          </thead>

          <tbody>
            {products.length === 0 && (
              <tr>
                <td
                  colSpan="7"
                  className="p-6 text-center text-gray-500"
                >
                  Ничего не найдено
                </td>
              </tr>
            )}

            {products.map(product => {
              const needOrder = product.stock < product.minStock;

              return (
                <tr
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="border-t cursor-pointer hover:bg-gray-50"
                >
                  {/* NAME */}
                  <td className="p-3 font-medium">
                    {product.name}
                  </td>

                  {/* CATEGORY */}
                  <td className="p-3 text-gray-600">
                    {product.category}
                  </td>

                  {/* BARCODE */}
                  <td className="p-3 font-mono text-xs text-gray-500">
                    {product.barcode}
                  </td>

                  {/* PRICE */}
                  <td className="p-3 text-right font-semibold">
                    {product.sellPrice.toLocaleString()} сум
                  </td>

                  {/* STOCK */}
                  <td
                    className={`p-3 text-right font-semibold ${
                      product.stock === 0
                        ? "text-red-600"
                        : product.stock < product.minStock
                        ? "text-orange-500"
                        : "text-gray-800"
                    }`}
                  >
                    {product.stock}
                  </td>

                  {/* MIN STOCK */}
                  <td className="p-3 text-right">
                    {product.minStock}
                  </td>

                  {/* STATUS */}
                  <td className="p-3 text-center">
                    {needOrder ? (
                      <span className="px-2 py-1 text-xs rounded bg-red-100 text-red-700">
                        Нужен заказ
                      </span>
                    ) : (
                      <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-700">
                        OK
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* PRODUCT MOVEMENTS MODAL */}
      {selectedProduct && (
        <ProductMovementsModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
