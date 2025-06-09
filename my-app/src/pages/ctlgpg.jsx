import React, { useEffect, useState } from 'react';
import '../style/stylepage.css';
import '../script/prodscript.js';
import initProductAnimation from '../script/prodscript.js';

export default function CatalogPage({ onlyMedicines }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [quantities, setQuantities] = useState({});
  const [toast, setToast] = useState(null);

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      initProductAnimation();
    }
  }, [products]);

  const handleQuantityChange = (id, value) => {
    setQuantities(q => ({ ...q, [id]: Math.max(1, Number(value)) }));
  };

  const addToCart = (product) => {
    const qty = quantities[product.id] || 1;
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const idx = cart.findIndex(item => item.id === product.id);
    if (idx > -1) {
      cart[idx].quantity += qty;
    } else {
      cart.push({ ...product, quantity: qty });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    setToast(`Додано ${qty} шт. "${product.name}" у кошик!`);
    setTimeout(() => setToast(null), 2500); 
  };

  const filtered = products
    .filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
  if (filtered.length > 0) {
    initProductAnimation();
  }
}, [filtered]);

  return (
    <div className="container">
      {}
      {toast && (
        <div className='toast'>
          {toast}
        </div>
      )}
      {!onlyMedicines && (
        <input
          type="text"
          placeholder="Пошук..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ marginBottom: 0, padding: 10, width: '100%', borderRadius: 20 }}
        />
      )}
      <div className="product-list">
        {(onlyMedicines
          ? [...filtered, ...filtered]
          : filtered
        ).map((product, idx) => (
          <div className="product-block" key={product.id + '-' + idx}>
            <img
              src={product.image.startsWith('http') ? product.image : `/images/${product.image}`}
              alt={product.name}
              style={{ width: '100%', height: '150pt', objectFit: 'contain', marginBottom: '8px' }}
            />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Ціна: {product.price} грн</p>
            <div className="product-actions">
              <input
                type="number"
                min={1}
                max={100}
                value={quantities[product.id] || 1}
                onChange={e => handleQuantityChange(product.id, e.target.value)}
              />
              <button onClick={() => addToCart(product)}>
                Додати в кошик
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}