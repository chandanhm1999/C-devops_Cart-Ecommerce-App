import React from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from './cart-item';
import { useContext } from "react";
import "./cart.css";
import { useNavigate } from "react-router-dom";


export const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return (
        <div className="cart">
            <div>
                <div className="name_cart"> Your Cart Itemes!</div>
                <hr className="carting_line23" />
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !==0) {
                        return <CartItem data={product} />
                    }
                })}
            </div>
            {totalAmount > 0 ? (
                <div className="checkout">
                <span className="priced">Price Details</span>
                <p> SubTotal: ${totalAmount} </p>
                <p> delivery: ${totalAmount+40}</p>
                <button onClick={() => navigate("/")}> Contunue Shopping</button>
                <button onClick={() => navigate("/thankyou")}> Checkout</button>
            </div>
            ) : (
                <h1> Your Cart is Empty</h1>
            )}
        </div>
    )
};
