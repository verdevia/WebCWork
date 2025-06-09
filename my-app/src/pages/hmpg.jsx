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
    <div className="maincont">
      <iframe
        className="container"
        src="https://thepharma.media/uk/news"
        title="Embedded Site"
        style={{ flex: 1.27, border: 'none', minWidth: 0, padding: 0 }}
      />
      <div
        className='scroll-vertical'
        style={{ flex: 1, cursor: 'pointer', minWidth: 0 }}
        onClick={handleCatalogClick}
        title="Перейти до каталогу"
      >
        <CatalogPage onlyMedicines />
      </div>
    </div>
  );
}