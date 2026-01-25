export default function selectFilteredProducts(state) {
  let items = [...state.products.list];
  const f = state.productsFilters;

  // 🔎 SEARCH (name / barcode)
  if (f.search) {
    const q = f.search.toLowerCase();
    items = items.filter(p =>
      p.name.toLowerCase().includes(q) ||
      String(p.barcode || "").includes(q)
    );
  }

  // 📦 STOCK FILTER
  if (f.stockFilter === "ZERO") {
    items = items.filter(p => p.stock === 0);
  }
  if (f.stockFilter === "LOW") {
    items = items.filter(p => p.stock < p.minStock);
  }
  if (f.stockFilter === "OK") {
    items = items.filter(p => p.stock >= p.minStock);
  }

  // 💰 PRICE
  if (f.priceMin !== "") {
    items = items.filter(p => p.sellPrice >= Number(f.priceMin));
  }
  if (f.priceMax !== "") {
    items = items.filter(p => p.sellPrice <= Number(f.priceMax));
  }

  // 📊 SORT
  switch (f.sortBy) {
    case "NAME_ASC":
      items.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "STOCK_ASC":
      items.sort((a, b) => a.stock - b.stock);
      break;
    case "STOCK_DESC":
      items.sort((a, b) => b.stock - a.stock);
      break;
    case "PRICE_ASC":
      items.sort((a, b) => a.sellPrice - b.sellPrice);
      break;
    case "PRICE_DESC":
      items.sort((a, b) => b.sellPrice - a.sellPrice);
      break;
  }

  return items;
}
