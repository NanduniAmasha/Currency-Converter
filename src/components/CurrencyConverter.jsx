import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import CurrencyInput from './CurrencyInput';

export default function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency]     = useState('LKR');
  const [amount, setAmount]             = useState('1');
  const [result, setResult]             = useState('');
  const [rate, setRate]                 = useState(null);
  const [loading, setLoading]           = useState(false);
  const [pulse, setPulse]               = useState(false);

  const fetchRate = useCallback(async () => {
    if (!amount || isNaN(amount)) return;
    setLoading(true);
    try {
    // ✅ new v2 endpoint
        const { data } = await axios.get(
            `/api/v2/rate/${fromCurrency}/${toCurrency}`
        );

        // ✅ v2 returns data.rate (a single number), not data.rates[currency]
        const rate = data.rate;
        const converted = (parseFloat(amount) * rate).toFixed(2);

        setResult(converted);
        setRate(rate.toFixed(4));
        setPulse(true);
        setTimeout(() => setPulse(false), 600);
    } catch (err) {
        console.error('API Error:', err);
        setResult('Error');
    } finally {
        setLoading(false);
    }
  }, [amount, fromCurrency, toCurrency]);

  useEffect(() => { fetchRate(); }, [fetchRate]);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(result || amount);
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="logo-dot" />
        <h1>FX Convert</h1>
        <p className="subtitle">Live exchange rates</p>
      </div>

      <CurrencyInput
        label="From"
        amount={amount}
        currency={fromCurrency}
        onAmountChange={setAmount}
        onCurrencyChange={setFromCurrency}
      />

      <button className={`swap-btn ${loading ? 'spinning' : ''}`} onClick={handleSwap} aria-label="Swap currencies">
        ⇅
      </button>

      <CurrencyInput
        label="To"
        amount={result}
        currency={toCurrency}
        onAmountChange={() => {}}
        onCurrencyChange={setToCurrency}
        readOnly
      />

      {rate && (
        <div className={`rate-display ${pulse ? 'pulse' : ''}`}>
          <span>1 {fromCurrency}</span>
          <span className="rate-value">{rate}</span>
          <span>{toCurrency}</span>
        </div>
      )}
    </div>
  );
}