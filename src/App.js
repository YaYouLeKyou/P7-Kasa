import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ProductPage from './pages/ProductPage';
import Error404 from './pages/Error404';
import Layout from './components/Layout';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        {/* Page par default */}
                        <Route index element={<Home />} />
                        {/* Routage Page */}
                        <Route path="/home" element={<Home />} />
                        <Route path={`/product_page/:id`} element={<ProductPage />} />
                        <Route path="/about" element={<About />} />
                        {/* Erreur URL */}
                        <Route path="*" element={<Error404 />} />
                        <Route path="/404" element={<Error404 />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
