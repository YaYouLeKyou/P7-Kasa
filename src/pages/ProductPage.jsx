import React from 'react';
import Carousel from '../components/Carousel';
import Collapse from '../components/Collapse';
import Properties from '../data/logements.json';
import { useParams, Navigate } from 'react-router-dom';
import Tag from '../components/TagName';
import Rating from '../components/Rating';

export default function Product() {
    document.title = "Kasa - product";
    let selectedId = useParams();
    let productTitle;
    let productPictures;
    let productDesc;
    let productHost;
    let productRating;
    let productLocation;
    let productEquipments;
    let productTags;

    Properties.forEach((product) => {
        if (product.id === selectedId.id) {
            productTitle = product.title;
            productPictures = product.pictures;
            productDesc = product.description;
            productHost = product.host;
            productRating = product.rating;
            productLocation = product.location;
            productEquipments = product.equipments;
            productTags = product.tags;
        }
    });

    if (!productTitle) {
        return <Navigate to="/404"/>;
    }

    return (
        <main className="product_display">
            <div className="display_carousel">
                <Carousel images={productPictures} />
            </div>
            <div className="product_display_details">
                <div className="product_description_left">
                    <div className="product_titles">
                        <h1>{productTitle}</h1>
                        <h2>{productLocation}</h2>
                    </div>
                    <div className="product_tags">
                        <Tag tags={productTags} />
                    </div>
                </div>
                <div className="product_description_right">
                    <div className="product_owner_container">
                        <div className="product_rating">
                            <Rating rating={productRating} />
                        </div>
                        <div className="product_owner">
                            <span>{productHost.name}</span>
                            <img
                                src={`${productHost.picture}`}
                                alt={`${productHost.name}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="product_collapses">
                <div className="product_description">
                    <Collapse props={productDesc} title={"Description"} />
                </div>
                <div className="product_equipements">
                    <Collapse
                        props={productEquipments}
                        title={"Equipements"}
                    />
                </div>
            </div>
        </main>
    );
}
