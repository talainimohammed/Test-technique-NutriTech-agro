import './App.css';
import Navbarcomponent from './Components/Navbar/Navbarcomponent';
import {BrowserRouter as Router, Route, Switch, BrowserRouter, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import AdminDashboard from './AdminDashboard/Admin'
import Login from './AdminDashboard/Components/Login/Login'
function App() {
  return (
    <div className='body'>
      <BrowserRouter>
        <Navbarcomponent />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='products' element={<Products />}>
            <Route path=':productid' element={<Products />} />
          </Route>
          <Route path='cart' element={<Cart />} />
          <Route path='admin' element={<AdminDashboard />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
