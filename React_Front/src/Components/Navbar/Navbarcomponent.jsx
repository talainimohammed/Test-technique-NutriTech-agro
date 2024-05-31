import React from "react";
import "./Navbar.css";
import cart from "../Assets/cart.png";
import logo from "../Assets/nutrilogo.PNG";
import {Navbar, Nav} from "react-bootstrap";
const Navbarcomponent = () => {
    return (
        <Navbar className="navbar" expand="lg">
        <Navbar.Brand className="nav-logo" href="#home"><img src={logo} alt="NutriTech Agro" height={50}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav justify-content-end">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/#about">A Propos</Nav.Link>
            <Nav.Link href="/products">Nos Produits</Nav.Link>
            <Nav.Link href="#contactus">Contacter Nous</Nav.Link>
            <Nav.Link href="/cart"><img src={cart} alt="cart" height={30} /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default Navbarcomponent;