import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';

import HomePage from 'pages/HomePage';
import AboutPage from 'pages/AboutPage';
import ServicePage from 'pages/ServicePage';
import ProductPage from 'pages/ProductPage';
import ContactPage from 'pages/ContactPage';
import LoginPage from 'pages/LoginPage';

import Sidebar from 'components/sidebar/Sidebar';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;