import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import ShoppingCart from "./components/ShoppingCart";
import UserDetails from "./components/UserDetails";
import PaymentForm from "./components/PaymentForm";
import PaymentSuccess from "./components/PaymentSuccess";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/userDetails" element={<UserDetails />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<PaymentForm/>} />
        <Route path="/payment" element={<PaymentSuccess/>} />    
      </Routes>
    </div>
  );
}

export default App;
