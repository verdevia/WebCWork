import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { Link, useNavigate } from 'react-router-dom';
import '../style/stylepage.css';

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({ name: '', phone: '', address: '' });
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null);
  const [toastHide, setToastHide] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart') || '[]'));
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

   const handleSubmit = e => {
    e.preventDefault();
    setSending(true);
  
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
    const templateParams = {
      name: form.name,
      phone: form.phone,
      address: form.address,
      cart: cart.map(i => `${i.name} (${i.quantity})`).join(', '),
      total: total
    };
  
    emailjs.send(
      'service_lsw2btk',
      'template_j7q0c2q',
      templateParams,
      'Uks3MDlKkbIYuhTwj'
    )
      .then(() => {
        setSending(false);
        localStorage.removeItem('cart');
        setCart([]);
        setToastHide(false);
        setToast("Дякуємо за замовлення! Ми зв'яжемося з вами найближчим часом.");
        setTimeout(() => setToastHide(true), 2000);
        setTimeout(() => {
          setToast(null);
        }, 2400);
      })
      .catch(err => {
        setSending(false);
        setToastHide(false);
        setToast('Помилка відправки замовлення: ' + err.text);
        setTimeout(() => setToastHide(true), 2000);
        setTimeout(() => setToast(null), 2400);
      });
  };

  const handleClearCart = () => {
    localStorage.removeItem('cart');
    setCart([]);
  };

  const handleRemoveItem = (id) => {
    const newCart = cart.filter(i => i.id !== id);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

   if (cart.length === 0)
    return (
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          minHeight: '80vh',
          fontSize: '20pt',
          textAlign: 'center'
        }}
      >
        {toast && (
          <div className={`toast${toastHide ? ' toast-hide' : ''}`}>
            {toast}
          </div>
        )}
        <div className="product-block" style={{ width: '35%', minWidth: 260, height: '25%' }}>
          <h1>Кошик порожній</h1>
          <p>Перейти до <Link to="/catalog">каталогу?</Link></p>
        </div>
      </div>
    );
      const isMobile = window.innerWidth <= 700;
     const productBlockStyle = isMobile
    ? {
        width: '90vw',
        minWidth: 0,
        height: 'auto',
        maxHeight: '100vh',
        margin: '0 auto',
        overflow: 'auto',
        fontSize: '9pt',
        padding: 8,
      }
    : {
        width: '30%',
        minWidth: 0,
        height: 'auto',
        maxHeight: '100%',
        margin: '0 auto',
        overflow: 'auto',
        fontSize: '15pt',
        padding: 16,
      };

  return (
    <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          minHeight: '80vh',
          fontSize: '20pt',
          textAlign: 'center'
        }}
      >
      {toast && (
        <div className={`toast${toastHide ? ' toast-hide' : ''}`}>
          {toast}
        </div>
      )}
      
      <div className='product-block' style={productBlockStyle}>
        <h2>Ваш кошик</h2>
        <button
          type="button"
          onClick={handleClearCart}
          style={{ marginBottom: 16 }}
        >
          Очистити кошик
        </button>
        <ul>
          {cart.map(item => (
            <li key={item.id} style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: '8pt' }}>
              {item.name} — {item.quantity} шт. — {item.price * item.quantity} грн
              <button
                type="button"
                onClick={() => handleRemoveItem(item.id)}
                style={{ marginLeft: 8 }}
              >
                Видалити
              </button>
            </li>
          ))}
        </ul>
        <div style={{ fontWeight: 'bold', marginTop: 12, marginBottom: 12 }}>
          Сума до сплати: {total} грн
        </div>
        <form onSubmit={handleSubmit} style={{ marginTop: 24 }}>
          <input
            name="name"
            placeholder="Ваше ім'я"
            value={form.name}
            onChange={handleChange}
            required
            style={{ display: 'block', marginBottom: 8, width: '100%' }}
          />
          <input
            name="phone"
            placeholder="Телефон"
            value={form.phone}
            onChange={handleChange}
            required
            style={{ display: 'block', marginBottom: 8, width: '100%' }}
          />
          <input
            name="address"
            placeholder="Адреса"
            value={form.address}
            onChange={handleChange}
            required
            style={{ display: 'block', marginBottom: 8, width: '100%' }}
          />
          <button type="submit" disabled={sending}>
            {sending ? 'Відправка...' : 'Оформити замовлення'}
          </button>
        </form>
      </div>
    </div>
  );
}