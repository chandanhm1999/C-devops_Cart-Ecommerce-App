import React from 'react';
import { PRODUCTS } from "../../products";
import { Product } from './product';
import "./shop.css";

export const Shop = () => {
    return <div className="shop">
        <div className="shopTitle">
            <div>Shoping Cart!</div>
            <hr className="line_shop" />
        </div>
        <div className="products"> 
        {PRODUCTS.map((product) => (
            <Product data={product}/>
        ))}

        </div>
    </div>
};
