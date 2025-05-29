import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/hmpg';
import CatalogPage from './pages/ctlgpg';
import CartPage from './pages/cartpg';
import AboutPage from './pages/about';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}
