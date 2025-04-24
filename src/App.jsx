import React, { useState } from 'react';
import Header from './components/Header';
import WhyChoose from './components/WhyChoose';
import OrderTable from './components/OrderTable';
import ImpactSection from './components/ImpactSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currency, setCurrency] = useState('SGD'); // 'SGD' or 'MYR'

  return (
    <div className="App">
      <Header />
      <div className="currency-toggle">
        <button 
          className={`currency-btn ${currency === 'SGD' ? 'active' : ''}`}
          onClick={() => setCurrency('SGD')}
        >
          SGD
        </button>
        <button 
          className={`currency-btn ${currency === 'MYR' ? 'active' : ''}`}
          onClick={() => setCurrency('MYR')}
        >
          MYR
        </button>
      </div>
      <WhyChoose />
      <OrderTable currency={currency} />
      <ImpactSection />
      <Footer />
    </div>
  );
}

export default App;