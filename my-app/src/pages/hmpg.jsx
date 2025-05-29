import React from 'react';
import { useNavigate } from 'react-router-dom';
import CatalogPage from './ctlgpg';
import '../style/stylepage.css';

export default function HomePage() {
  const navigate = useNavigate();

  const handleCatalogClick = () => {
    navigate('/catalog');
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Перша половина: embedded сайт */}
      <iframe
        className="container"
        src="https://thepharma.media/uk/news"
        title="Embedded Site"
        style={{ flex: 1.5, border: 'none', minWidth: 0, padding: 0 }}
      />
      {/* Друга половина: тільки блок з ліками */}
      <div
        className='scroll-vertical'
        style={{ flex: 2, cursor: 'pointer', minWidth: 0 }}
        onClick={handleCatalogClick}
        title="Перейти до каталогу"
      >
        <CatalogPage onlyMedicines />
      </div>
    </div>
  );
}