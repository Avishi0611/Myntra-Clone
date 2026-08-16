# Myntra Clone 🛍️

A full-stack fashion e-commerce clone inspired by [Myntra](https://www.myntra.com), built to practice real-world frontend + backend integration. The frontend is a React SPA with Redux Toolkit state management, and the backend is a lightweight Express REST API backed by a JSON data store.

> **Disclaimer:** This is a personal/educational project built for learning purposes. It is **not affiliated with, endorsed by, or connected to Myntra Designs Pvt. Ltd.** in any way. No proprietary Myntra source code, backend, or private assets were used — only the public UI/UX was used as visual inspiration.

---

## ✨ Features

- 🏠 Homepage with a rotating hero banner and a responsive product grid
- 🔍 Live search — filter products by name or brand as you type
- 🛒 Add to Bag / Remove from Bag with real-time bag count in the header
- 🧾 Bag page with an order price summary (MRP, discount, delivery, total)
- 📄 Product detail page with full pricing, rating, return & delivery info
- 💅 Myntra-style hover interactions (card lift, hidden-until-hover "Add to Bag" button)
- ⚡ REST API backend serving product data from a JSON store

---

## 🧰 Tech Stack

**Frontend**
- React 19 + Vite
- Redux Toolkit / React Redux (state management)
- React Router v7 (routing)
- Bootstrap 5 (layout utilities)
- React Icons

**Backend**
- Node.js + Express
- CORS + body-parser
- JSON file-based data store (no external database required)

---

## 📁 Project Structure

```
E-commerce-website/
├── 2-actual-backend/          # Express REST API
│   ├── app.js                 # Server entry point & routes
│   ├── data/
│   │   └── items.js           # Read/write helpers for items.json
│   ├── items.json             # Product data store
│   └── package.json
│
└── 3-myntra-react-clone/      # React frontend
    ├── public/
    │   └── images/            # Product & banner images
    ├── src/
    │   ├── components/        # Header, Footer, HomeItem, HeroBanner, BagItem, ...
    │   ├── routes/             # Home, Bag, ProductDetail
    │   ├── store/               # Redux slices: items, bag, search, fetchStatus
    │   ├── index.css
    │   └── main.jsx            # Router setup
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/myntra-clone.git
cd myntra-clone
```

### 2. Start the backend

```bash
cd 2-actual-backend
npm install
npm start
```
The API will be running at **http://localhost:8080**.

### 3. Start the frontend (in a new terminal)

```bash
cd 3-myntra-react-clone
npm install
npm run dev
```
The app will be running at **http://localhost:5173**.

> Both servers need to be running at the same time — the frontend fetches product data from the backend.

---

## 🔌 API Endpoints

| Method | Endpoint      | Description                          |
|--------|---------------|---------------------------------------|
| GET    | `/items`      | Fetch all products                    |
| GET    | `/items/:id`  | Fetch a single product by ID          |
| POST   | `/items`      | Add a new product to the data store   |

---

## 🗺️ Roadmap

- [ ] Category-based navigation (Men / Women / Kids)
- [ ] Sort & filter (price, discount, rating)
- [ ] Wishlist functionality
- [ ] User authentication
- [ ] Checkout flow with order confirmation
- [ ] Persistent database (MongoDB/PostgreSQL) instead of JSON file storage

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙋 Author

Built by Avishi Jain — feel free to reach out or open an issue if you spot a bug!
