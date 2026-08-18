const CURRENCIES = ['USD','EUR','GBP','JPY','AUD','CAD','CHF','CNY','INR','LKR','SGD','AED'];

export default function CurrencyInput({ label, amount, currency, onAmountChange, onCurrencyChange, readOnly }) {
  return (
    <div className="currency-input">
      <span className="input-label">{label}</span>
      <div className="input-row">
        <input
          type="number"
          value={amount}
          onChange={e => onAmountChange(e.target.value)}
          readOnly={readOnly}
          placeholder="0.00"
        />
        <select value={currency} onChange={e => onCurrencyChange(e.target.value)}>
          {CURRENCIES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
    </div>
  );
}