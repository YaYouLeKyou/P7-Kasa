
import { Routes, Route } from 'react-router-dom';


//page import
import About from './pages/About';
import Error404 from './pages/Error404';
import ProductPage from './pages/ProductPage';
import Home from './pages/Home';
import Layout from './components/Layout';



function App() {



  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {/* Page par default */}
          <Route index element={<Home />} />
          {/* Routage Page */}
          <Route path="/home" element={<Home />} />
          <Route
            path={`/product_page/:id`}
            element={<ProductPage />}
          />
          <Route path="/about" element={<About />} />
          {/* Erreur URL */}
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
