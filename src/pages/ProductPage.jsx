import React, { useEffect, useState } from 'react';
import { Properties } from '../data/data';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';
import Carousel from '../components/Carousel';

const ProductPage = () => {
  const [kasaData, setKasaData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    Properties.map((property) => {
      if (property.id === id) {
        setKasaData(property);
      }
      return null;
    });
  }, [id]);

  return (
    <main className='FicheLogement'>
      <Carousel productImage={kasaData.pictures} />
      <ProductDetails productDetails={kasaData} />
    </main>
  );
};

export default ProductPage;
