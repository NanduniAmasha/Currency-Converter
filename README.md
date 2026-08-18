# FX Convert - Currency Converter

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

## 🔌 API 

This application uses the [Frankfurter API](https://api.frankfurter.dev/) to retrieve real-time exchange rates.

A Vite proxy is configured to handle API requests during development and avoid CORS issues.



