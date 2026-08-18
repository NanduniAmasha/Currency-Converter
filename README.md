<div align="center">

# 💱 FX Convert — Real-Time Currency Converter

**A fast, modern, and sleek real-time currency exchange calculator built with React 19 and Vite.**

[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](https://github.com/)

[Key Features](#-key-features) •
[Tech Stack](#-tech-stack) •
[Quick Start](#-quick-start) •
[Project Structure](#-project-structure) •
[API Reference](#-api-reference) •
[Contributing](#-contributing)

</div>

---

## 📖 Overview

**FX Convert** is a lightweight, responsive web application designed for instant foreign exchange calculations. Featuring a dark glassmorphic design, glowing neon accents, and live exchange rate polling via the Frankfurter API, it offers a seamless user experience across mobile and desktop devices.

---

## ✨ Key Features

- ⚡ **Instant Real-Time Conversion**: Automatically recalculates exchange rates as you type.
- 🎨 **Futuristic Glassmorphic Design**: Sleek dark UI with backdrop blurs, glowing accents, and smooth hover effects.
- 🔄 **One-Click Currency Swap**: Instantly switch "From" and "To" currencies with smooth button animations.
- 💡 **Live Rate Ticker & Pulse Animation**: Visual feedback whenever rates are fetched or updated.
- 📱 **Mobile & Desktop Responsive**: Fluid layout optimized for all viewport sizes.
- 🌐 **Multi-Currency Support**: 12 major global currencies including USD, EUR, GBP, JPY, AUD, CAD, CHF, CNY, INR, LKR, SGD, and AED.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[React 19](https://react.dev/)** | Core UI component framework |
| **[Vite](https://vite.dev/)** | High-performance build tool and development server |
| **[Axios](https://axios-http.com/)** | Promise-based HTTP client for API requests |
| **[Vanilla CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)** | Custom glassmorphism, responsive grid/flexbox, animations |
| **[Google Fonts (Space Grotesk)](https://fonts.google.com/specimen/Space+Grotesk)** | Modern sans-serif typography |
| **[Frankfurter API](https://api.frankfurter.dev/)** | Real-time foreign exchange rate provider |

---

## 📂 Project Structure

```text
currency-converter/
├── public/
│   └── favicon.svg              # Browser tab icon
├── src/
│   ├── assets/                  # Static assets and icons
│   ├── components/
│   │   ├── CurrencyConverter.jsx# Main logic, state & API fetcher
│   │   └── CurrencyInput.jsx    # Reusable input row & dropdown selector
│   ├── App.css                  # Main component styles, glow effects & animations
│   ├── App.jsx                  # Root React component
│   ├── index.css                # Global styles, body background gradient & fonts
│   └── main.jsx                 # Application entry point
├── index.html                   # HTML template
├── package.json                 # Project dependencies and npm scripts
├── vite.config.js               # Vite configuration & API proxy setup
└── README.md                    # Project documentation
```

---

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** `>= 18.0.0`
- **npm** (comes with Node.js) or **yarn** / **pnpm**

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/currency-converter.git
   cd currency-converter
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Access the application:**
   Open your browser and navigate to:
   ```text
   http://localhost:5173
   ```

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite dev server with Hot Module Replacement (HMR) |
| `npm run build` | Compiles and minifies the code for production into `/dist` |
| `npm run preview` | Serves the production build locally to test deployment |
| `npm run lint` | Analyzes code for quality and style issues using ESLint |

---

## 🌐 Supported Currencies

| Code | Currency | Code | Currency |
| :---: | :--- | :---: | :--- |
| **USD** | United States Dollar | **EUR** | Euro |
| **GBP** | British Pound Sterling | **JPY** | Japanese Yen |
| **AUD** | Australian Dollar | **CAD** | Canadian Dollar |
| **CHF** | Swiss Franc | **CNY** | Chinese Yuan |
| **INR** | Indian Rupee | **LKR** | Sri Lankan Rupee |
| **SGD** | Singapore Dollar | **AED** | United Arab Emirates Dirham |

---

## 🔌 API Reference & Proxy

Exchange rates are retrieved from the open-source **Frankfurter API**. 

To prevent CORS issues in development, requests are proxied in [`vite.config.js`](file:///d:/currency-converter/vite.config.js):

```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.frankfurter.dev',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
```

### Example Endpoint Call
```http
GET /api/v2/rate/USD/EUR
```

---

## 🤝 Contributing

Contributions are always welcome! Here's how you can help:

1. **Fork** the repository
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes:**
   ```bash
   git commit -m "Add some AmazingFeature"
   ```
4. **Push to the branch:**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">
  <sub>Built with ❤️ using React & Vite</sub>
</div>
