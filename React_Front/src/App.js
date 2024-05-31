import './App.css';
import React, { useState } from 'react';
import Navbarcomponent from './Components/Navbar/Navbarcomponent';
import {BrowserRouter as Router, Route, Switch, BrowserRouter, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import AdminDashboard from './AdminDashboard/Admin'
import Login from './AdminDashboard/Components/Login/Login'
function App() {
  const [CartItem, setCartItem] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item === product)

    if (productExit) {
      setCartItem(CartItem.map((item) => (item === product ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item === product)

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item !== product))
    } else {

      setCartItem(CartItem.map((item) => (item === product ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
  console.log(CartItem);
  return (
    <div className='body'>
      <BrowserRouter>
        <Navbarcomponent />
        <Routes>
          <Route path='/' element={<Home CartItem={CartItem}/>} />
          <Route path='products' element={<Products />}>
          </Route>
          <Route path='cart' element={<Cart CartItem={CartItem}/>} />
          <Route path='admin' element={<AdminDashboard IsLoggedIn={isLoggedIn}/>} />
          <Route path='login' element={<Login IsLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
