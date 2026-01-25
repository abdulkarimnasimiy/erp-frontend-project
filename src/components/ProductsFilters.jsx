import { useDispatch, useSelector } from "react-redux";
import {
  setSearch,
  setStockFilter,
  setPriceMin,
  setPriceMax,
  setSortBy,
} from "../productsFiltersSlice";

export default function ProductsFilters() {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.productsFilters);

  return (
    <div className="bg-white border rounded p-4 mb-4 grid grid-cols-5 gap-3 text-sm">
      <input
        placeholder="Поиск (название / штрихкод)"
        value={filters.search}
        onChange={e => dispatch(setSearch(e.target.value))}
        className="border px-2 py-1 rounded col-span-2"
      />

      <select
        value={filters.stockFilter}
        onChange={e => dispatch(setStockFilter(e.target.value))}
        className="border px-2 py-1 rounded"
      >
        <option value="ALL">Все</option>
        <option value="ZERO">Остаток 0</option>
        <option value="LOW">Мало</option>
        <option value="OK">В наличии</option>
      </select>

      <input
        placeholder="Цена от"
        value={filters.priceMin}
        onChange={e => dispatch(setPriceMin(e.target.value))}
        className="border px-2 py-1 rounded"
      />

      <input
        placeholder="Цена до"
        value={filters.priceMax}
        onChange={e => dispatch(setPriceMax(e.target.value))}
        className="border px-2 py-1 rounded"
      />

      <select
        value={filters.sortBy}
        onChange={e => dispatch(setSortBy(e.target.value))}
        className="border px-2 py-1 rounded col-span-2"
      >
        <option value="NAME_ASC">Название A–Z</option>
        <option value="STOCK_ASC">Остаток ↑</option>
        <option value="STOCK_DESC">Остаток ↓</option>
        <option value="PRICE_ASC">Цена ↑</option>
        <option value="PRICE_DESC">Цена ↓</option>
      </select>
    </div>
  );
}
