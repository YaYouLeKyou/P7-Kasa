import { Routes, Route } from 'react-router-dom';

//page import
import About from './pages/About';
import Error404 from './pages/Error404';
import ProductPage from './pages/ProductPage';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">

      <Routes>
        {/* Page par default */}
        <Route index element={<Home />} />
        {/* Routage Page */}
        <Route path="/home" element={<Home />} />
        <Route path="/product_page" element={<ProductPage />} />
        <Route path="/about" element={<About />} />
        {/* Erreur URL */}
        <Route path="*" element={<Error404 />} />
      </Routes>

    </div>
  );
}

export default App;
