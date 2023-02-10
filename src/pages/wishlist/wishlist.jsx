import React from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { WishListItem } from "./wish-listItem";
import { useContext } from "react";
import "./wish.css";

export const Wishlist = () => {
    const { wishItems } = useContext(ShopContext);
    return (
        <div className="cart12">
            <div>
                <h1> Your Wishlist Itemes!</h1>
            </div>
            <div className="cartItems12">
                {PRODUCTS.map((product) => {
                    if (wishItems[product.id] !==0) {
                        return <WishListItem data={product} />
                    }
                })}
            </div>    
            
        </div>
    )
};