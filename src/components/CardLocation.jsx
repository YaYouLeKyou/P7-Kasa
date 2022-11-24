import React from 'react';
import { Link } from 'react-router-dom';

const CardLocation = ({property}) => {
    return (
        <div className="card_container">
          <Link to={`/product_page/${property.id}`}>
            <div className="img_container">
              <img src={property.cover} alt="logement-Pic"  />
              <div className='card_mask'/>
            </div>
            <h3>{property.title}</h3>
          </Link>
        </div>
      );
};

export default CardLocation;
