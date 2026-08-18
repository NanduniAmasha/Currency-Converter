# 💱 FX Convert - Currency Converter

A fast, modern, and sleek real-time currency converter built with **React 19**, **Vite**, and **Axios**.

---

## ✨ Features

- ⚡ **Real-Time Exchange Rates**: Live rates fetched using the Frankfurter API.
- 🎨 **Glassmorphism Dark UI**: Modern dark theme with glowing accents, smooth transitions, and custom typography (`Space Grotesk`).
- 🔄 **One-Click Currency Swap**: Quick swap between source and target currencies with button animation.
- 💡 **Live Rate Indicator**: Real-time rate ticker with pulse feedback on update.
- 📱 **Responsive Design**: Works smoothly across mobile, tablet, and desktop screens.
- 🌐 **Supported Currencies**: USD, EUR, GBP, JPY, AUD, CAD, CHF, CNY, INR, LKR, SGD, AED.

---

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vite.dev/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Styling**: Vanilla CSS (Glassmorphism, Flexbox, Animations)
- **API**: [Frankfurter API](https://api.frankfurter.dev/)

---

## 📂 Project Structure

```text
currency-converter/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CurrencyConverter.jsx   # Converter logic & API integration
│   │   └── CurrencyInput.jsx       # Currency input & dropdown component
│   ├── App.css                     # Main styling & animations
│   ├── App.jsx                     # Root application component
│   ├── index.css                   # Global styles & background gradient
│   └── main.jsx                    # Application entry point
├── index.html
├── package.json
├── vite.config.js                  # Vite config with API proxy
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher)
- npm (installed automatically with Node.js)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/currency-converter.git
   cd currency-converter
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:5173`

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts development server with HMR |
| `npm run build` | Builds the app for production in the `dist` folder |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint to check code quality |

---

## 🌐 Supported Currencies

| Code | Currency Name | Code | Currency Name |
| :---: | :--- | :---: | :--- |
| **USD** | US Dollar | **EUR** | Euro |
| **GBP** | British Pound | **JPY** | Japanese Yen |
| **AUD** | Australian Dollar | **CAD** | Canadian Dollar |
| **CHF** | Swiss Franc | **CNY** | Chinese Yuan |
| **INR** | Indian Rupee | **LKR** | Sri Lankan Rupee |
| **SGD** | Singapore Dollar | **AED** | UAE Dirham |

---

## 🔌 API Configuration

In [`vite.config.js`](file:///d:/currency-converter/vite.config.js), requests to `/api` are proxied to the Frankfurter API to prevent CORS issues:

```javascript
server: {
  proxy: {
    '/api': {
      target: 'https://api.frankfurter.dev',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
  },
}
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).