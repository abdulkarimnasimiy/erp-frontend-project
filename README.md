# 🏪 Store ERP — Frontend

**Store ERP** — bu kichik va o‘rta savdo do‘konlari uchun mo‘ljallangan
**ombor, savdo va tovar harakati**ni boshqaruvchi ERP tizimining
frontend qismi MVP.

Loyiha real magazin logikasiga asoslangan va portfolio uchun ishlab chiqilgan.

🔗 **Live demo (Netlify):**  
👉 https://market-erp.netlify.app

---

## 🚀 Asosiy imkoniyatlar

### 📦 Tovarlar (Products)
- 20 ta demo mahsulot
- Kategoriya, shtrixkod, narx
- Qoldiq (остаток) va minimal qoldiq
- Avtomatik status:
  - ✅ OK
  - ⚠️ Нужен заказ (min. qoldiqdan tushsa)

### 🔍 Qidiruv va filterlar
- Nom yoki shtrixkod bo‘yicha qidiruv
- Narx bo‘yicha filter (dan / gacha)
- Saralash:
  - Nomi A–Z / Z–A
  - Qoldiq bo‘yicha

### 🔄 Tovar harakati (Движение товара)
- Har bir mahsulot bo‘yicha:
  - 📉 Sotuv (расход)
  - 📈 Kirim (приход)
- Modal oynada to‘liq tarix:
  - Sana
  - Amal turi
  - Miqdor
  - Oldingi va yangi qoldiq

### 🛒 Savdo (Sales)
- Mahsulot sotish
- Qoldiq avtomatik kamayadi
- Har bir sotuv harakatlar tarixiga yoziladi

### 📥 Kirim (Stock In)
- Buyurtmalar bo‘yicha kirim
- Manual kirim (omborga qo‘shish)
- Qoldiq avtomatik yangilanadi

---

## 🧠 Texnologiyalar

- ⚛️ **React (Vite)**
- 🧰 **Redux Toolkit**
- 🎨 **Tailwind CSS**
- 🌐 **Netlify** (deploy)
- 🗂 Git & GitHub

---

## 🗺 Loyiha strukturasi

src/
├─ pages/ # Sahifalar (Products, Sales, StockIn)
├─ components/ # UI komponentlar va modal oynalar
├─ store/ # Redux store
├─ slices/ # productsSlice, ordersSlice, movements
├─ selectors/ # Filter va sort selectorlar

---

## 📌 Maqsad

- Frontend ERP arxitekturasini ko‘rsatish
- Real biznes logikani frontendda modellashtirish
- Backend (Django) bilan integratsiyaga tayyor struktura

---

## 👨‍💻 Muallif

**Abdulkarim**  
Frontend Developer  

Agar loyiha yoqsa ⭐ bosishni unutmang 🙂
