import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./wish.css";

export const WishListItem = (props) => {
    const {id, productName, price, productImage } = props.data;
    const { wishItems, removeFromwish } = useContext(ShopContext);

    return (
        <div className="cartItem1">
            <img src={productImage} />
            <div className="description">
                <p>
                    <b> { productName }</b>
                </p>
                <p>${price}</p>
                <div className="countHandler1">
                    
                    <button onClick={() => removeFromwish(id) }>Remove</button>
                </div>
            </div>
        </div>
    )
};