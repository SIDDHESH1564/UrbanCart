import React, { useState } from "react";
import Header from "./components/header"
import Item from "./components/productlist";
import Footer from "./components/footer";
import Launch from "./components/launch";
import Carts from "./components/carts";
import ViewProduct from "./components/productquickview";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './components/login';
import { Signup } from "./components/Signup";
import { CartProvider } from "./components/CartContext"
function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <BrowserRouter>
        <Header setCartOpen={setCartOpen} />
        <Carts open={cartOpen} setOpen={setCartOpen} />
        <Routes>
          <Route path="/" element={<Launch />} />
          <Route path="/shop/:category" element={<Item />} />
          <Route path="/product/:categoryId/:productId" element={<ViewProduct />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
