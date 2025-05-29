import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/styleheader.css';
import symbol from '../images/symbol.png';
import aboutimg from '../images/about.png';
import cartimg from '../images/cart.png';
import catalogimg from '../images/catalog.png';
import homeimg from '../images/home.png';
import initHeaderAnimation from '../script/hscript.js';

export default function Header() {
 useEffect(() => {
    initHeaderAnimation();
  }, []);

  return (
    <div className="banner">
      <div style={{ flexGrow: 1, display: 'flex', paddingLeft: '40pt'}}>
        <Link to="/">
          <span className="header">
            <img src={homeimg} alt="home" style={{ width: '20pt', height: '20pt' }} />
            <button className="header" style={{ marginLeft: '10pt' }}>
              На головну
            </button>
          </span>
        </Link>
        <Link to="/catalog">
          <span className="header">
            <img src={catalogimg} alt="catalog" style={{ width: '20pt', height: '20pt' }} />
            <button className="header">
              Каталог
            </button>
          </span>
        </Link>
        <Link to="/cart">
          <span className="header">
            <img src={cartimg} alt="cart" style={{ width: '20pt', height: '20pt' }} />
            <button className="header">
              Кошик
            </button>
          </span>
        </Link>
        <Link to="/about">
          <span className="header" style={{ display: 'flex', alignItems: 'center', gap: '0pt', paddingRight: '35pt'  }}>
            <img src={aboutimg} alt="about" style={{ width: '20pt', height: '20pt' }} />
            <button className="header">
              Про нас
            </button>
          </span>
        </Link>
      </div>
      <div style={{ width: '47vw', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        <img src={symbol} alt="Logo" style={{ width: '50pt', height: '80%', paddingRight: '10pt' }} />
      </div>
    </div>
  );
}