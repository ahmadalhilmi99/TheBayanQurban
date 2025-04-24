import React from 'react';

const items = [
  { 
    country: 'Indonesia', 
    animal: 'Goat', 
    price: { SGD: 155, MYR: 480 },
    proof: 'Photo, Video, Live Update' 
  },
  { 
    country: 'Mecca', 
    animal: 'Goat', 
    price: { SGD: 155, MYR: 480 },
    proof: 'Photo, Video, Live Update' 
  },
  { 
    country: 'Uganda', 
    animal: 'Goat', 
    price: { SGD: 140, MYR: 480 },
    proof: 'Photo, Video, Live Update' 
  },
  { 
    country: 'Uganda', 
    animal: 'Cow', 
    price: { SGD: 525, MYR: 2000 },
    proof: 'Photo, Video, Live Update' 
  },
  { 
    country: 'India', 
    animal: 'Cow', 
    price: { SGD: 525, MYR: 1980 },
    proof: 'Live Update Only' 
  },
  { 
    country: 'India', 
    animal: 'Cow Parts (1/7 share)', 
    price: { SGD: 75, MYR: 280 },
    proof: 'Live Update Only' 
  },
  { 
    country: 'Uganda', 
    animal: 'Cow Parts (1/7 share)', 
    price: { SGD: 75, MYR: 300 },
    proof: 'Photo, Video, Live Update' 
  },
];

function OrderTable({ currency }) {
  const formLinks = {
    SGD: 'https://docs.google.com/forms/d/e/1FAIpQLSeAbKQUNkaWEKNuDALmck-a4J5WmCRdP_BHk7xpUEa42N92cw/viewform',
    MYR: 'https://docs.google.com/forms/d/e/1FAIpQLSfjPirQAx9_rpAPSDK7flKm0QCQbD9NtbIN4FeVdldi_rtHNA/viewform'
  };

  return (
    <section>
      <h2>Order Your Qurban</h2>
      <div className="pricing-container">
        {items.map(({ country, animal, price, proof }) => {
          const key = `${country} ${animal}`;
          return (
            <div className="pricing-card" key={key}>
              <h3>{country}</h3>
              <p>{animal}</p>
              <div className="price">
                {currency === 'SGD' ? 'SGD' : 'MYR'} {price[currency]}
              </div>
              <div className="proof">
                <span>✅</span> {proof}
              </div>
              
            </div>
          );
        })}
      </div>
      <a 
                href={formLinks[currency]} 
                target="_blank" 
                rel="noopener noreferrer"
                className="order-button"
              >
                Order With Us
              </a>
    </section>
  );
}

export default OrderTable;