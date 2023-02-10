import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/navbar";
import {Shop} from "./pages/shop/shop";
import {Cart} from "./pages/cart/cart";
import { ShopContextProvider } from './context/shop-context';
import { Wishlist } from './pages/wishlist/wishlist';
import { PRODUCTS } from './products';
import { Thankyou } from './pages/cart/thankyou';
import { Footer } from './components/footer';


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          {
            <Navbar size={PRODUCTS.length}/>
          }
          <Routes>
            <Route path="/" element={<Shop />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/wishlist" element={<Wishlist />}/>
            <Route path="/thankyou" element={<Thankyou />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
