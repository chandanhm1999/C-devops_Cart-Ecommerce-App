import React from 'react'
import { Link } from "react-router-dom";
import {ShoppingCartOutlined} from '@ant-design/icons';
import "./navbar.css"

export const Navbar = ({size}) => {

    return (
        <div className="navbar">
            <div ></div>
            <div className="links">
                <Link to="/" className="shop-logo_c"> C-devops! </Link>
                <Link to="/cart" className="cart_icon1">
                    <ShoppingCartOutlined />
                </Link>
                <div className="size1">
                    <span className="size2">{size}</span>
                </div>
                <Link to="/wishlist" className="wish_icon1">Wishlist!</Link>
            </div>
        </div>
    )
};
